import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from './book/list-book/list-book.component';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookUpdateComponent} from './book/book-update/book-update.component';
import {BookSingleComponent} from './book/book-single/book-single.component';
import {BookDeleteComponent} from './book/book-delete/book-delete.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ListBookComponent},
  {path:"books",component:ListBookComponent},
  {path:"books/add",component:BookCreateComponent},
  {path:"books/:id/update", component:BookUpdateComponent},
  {path:"books/:id",component:BookSingleComponent},
  {path:"books/:id/delete",component:BookDeleteComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
