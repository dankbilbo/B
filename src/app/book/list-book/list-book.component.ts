import {Component, OnInit, ViewChild} from '@angular/core';
import {BookService} from '../../book.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  displayedColumns: String[] = ['id', 'title', 'author', 'description','edit','delete'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getALl().subscribe(result => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }, error => {
        console.log(error);
      }
    );
  }

  filter(searchedKey: any) {
    console.log(searchedKey)
    this.dataSource.filter = searchedKey.trim().toLowerCase();
  }


}
