import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IBook } from 'interfaces/books';
import { Observable } from 'rxjs';
import { DeleteService } from '../delete.service';
import { GetBookByIdService } from '../get-book-by-id.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  book!: IBook
  isOwner: boolean = false;

  constructor(private bookService: GetBookByIdService, private router: ActivatedRoute, private deleteBookService: DeleteService,
    private route: Router) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];

    this.bookService.loadBookById(id).subscribe(book => {
      this.book = book;
      const user = JSON.parse(localStorage.getItem('userData')!)
      if(book._ownerId === user._id) {
        this.isOwner = true;
      }
    })
  }

  onDelete(): void {
    const id = this.router.snapshot.params['id'];
    console.log(id);
    const choice = confirm('Are you sure you want to delete this book?')
    
    if(choice) {
      this.deleteBookService.deleteBook(id).subscribe(data => {
        this.route.navigate(['/all-books'])
    })
  }

  }
}
