import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from 'interfaces/books';
import { map } from 'rxjs';
import { GetAllBooksService } from '../../shared/get-all-books.service';
import { DeleteService } from '../delete.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  books!: IBook[]
  finalBooks!: IBook[];

  email!: string;

  constructor(private bookService: GetAllBooksService, private deleteBookService: DeleteService,
    private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('userData')!);
    this.email = user.email
    this.bookService.getAllBooks().subscribe(book => {
      this.books = book;
      this.finalBooks = this.books.filter(book => book._ownerId == user._id)
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
