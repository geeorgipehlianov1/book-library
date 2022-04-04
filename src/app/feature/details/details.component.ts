import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'interfaces/books';
import { Observable } from 'rxjs';
import { GetBookByIdService } from '../get-book-by-id.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  book!: IBook

  constructor(private bookService: GetBookByIdService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];

    this.bookService.loadBookById(id).subscribe(book => {
      this.book = book;
    })
  }

  

}
