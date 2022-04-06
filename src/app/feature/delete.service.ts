import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }

  deleteBook(id: any): Observable<any> {
    return this.http.delete<any>('http://localhost:3030/data/books/' + id)
  }
}
