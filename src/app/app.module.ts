import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookUpdateComponent } from './book/book-update/book-update.component';
import { BookDeleteComponent } from './book/book-delete/book-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {RouterModule} from '@angular/router';
import { BookSingleComponent } from './book/book-single/book-single.component';
import { HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    BookCreateComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    BookSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
