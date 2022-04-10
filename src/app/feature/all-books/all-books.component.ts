import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IBook } from 'interfaces/books';
import { GetAllBooksService } from '../../shared/get-all-books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  books!: IBook[]

  constructor(private bookService: GetAllBooksService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('All Books')
    this.bookService.getAllBooks().subscribe(book => {
      this.books = book
    })
  }

}
