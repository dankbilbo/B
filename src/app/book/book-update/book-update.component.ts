import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {BookService} from '../../book.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  id?: number;
  updateForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    author: new FormControl(null),
    description: new FormControl(null),
  });

  constructor(private route: ActivatedRoute, private bookService: BookService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.findById(this.id).subscribe(result => {
      this.updateForm = new FormGroup({
        title: new FormControl(result.title, [Validators.required, Validators.minLength(3)]),
        author: new FormControl(result.author, [Validators.required, Validators.minLength(3)]),
        description: new FormControl(result.description, [Validators.required, Validators.minLength(3)]),
      });
    });
  }


  update() {
    this.bookService.update(this.id,this.updateForm.value);
  }
}
