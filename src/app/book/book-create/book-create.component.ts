import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  createForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(private bookService: BookService) {

  }

  ngOnInit(): void {

  }

  create() {
    this.bookService.create(this.createForm.value).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

}
