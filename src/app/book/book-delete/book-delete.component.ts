import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  id?: any;

  constructor(private bookService: BookService, private route:Router,private activedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activedRoute.snapshot.params['id'];
    this.bookService.delete(this.id).subscribe(() => {
      this.route.navigate(["/books"])
    }, error => {
      console.log(error);
    });
  }

}
