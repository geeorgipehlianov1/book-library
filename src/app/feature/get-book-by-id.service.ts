import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from 'interfaces/books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBookByIdService {

  constructor(private http: HttpClient) { }

  loadBookById(id: string): Observable<IBook> {
    return this.http.get<IBook>('http://localhost:3030/data/books/' + id)
  }
}
