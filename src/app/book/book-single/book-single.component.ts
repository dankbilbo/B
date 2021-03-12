import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../Book';

@Component({
  selector: 'app-book-single',
  templateUrl: './book-single.component.html',
  styleUrls: ['./book-single.component.css']
})
export class BookSingleComponent implements OnInit {
  searchedBook?: Book;

  constructor(private bookService: BookService, private activedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.bookService.findById(this.activedRoute.snapshot.params['id']).subscribe(result => {
      this.searchedBook = result;
    });
  }

}
