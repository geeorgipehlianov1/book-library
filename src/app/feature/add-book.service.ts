import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from 'interfaces/books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private http: HttpClient,) { }

  addBook(bookData: {title: string, description: string, imageUrl: string, type: string}): Observable<IBook> {
    return this.http.post<IBook>('http://localhost:3030/data/books', bookData);
  }
}
