import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './Book';
import {environment} from '../environments/environment';

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getALl(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}/books`);
  }

  findById(id:any) : Observable<Book>{
    return this.http.get<Book>(`${API_URL}/books/${id}/update`);
  }


  update(id:any,book : Book):Observable<Book>{
    return this.http.put<Book>(`${API_URL}/books/${id}`,book);
  }

  create(book:Book):Observable<Book>{
    return this.http.post<Book>(`${API_URL}/books`,book);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${API_URL}/books/${id}`);
  }
}
