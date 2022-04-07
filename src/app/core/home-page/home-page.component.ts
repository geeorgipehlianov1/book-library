import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IBook } from 'interfaces/books';
import { GetAllBooksService } from '../../shared/get-all-books.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  books!: IBook[];

  constructor(private bookService: GetAllBooksService) { }
  

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(book => {
      this.books = book;   
      this.books.splice(3)
    })
  }

}
