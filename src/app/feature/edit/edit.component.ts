import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IBook } from 'interfaces/books';
import { EditBookService } from '../edit-book.service';
import { GetBookByIdService } from '../get-book-by-id.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements AfterViewInit {

  @ViewChild('editForm') editForm!: NgForm;

  book!: IBook

  constructor(private bookService: EditBookService, private router: ActivatedRoute, private route: Router) { }

  ngAfterViewInit(): void {
    const id = this.router.snapshot.params['id']
    // this.bookService.loadBookById(id).subscribe(book => {
    //   this.book = book;
    // })   
  }
  

  onSubmit(): void {
    const id = this.router.snapshot.params['id']

    const title = this.editForm.value.title;
    const description = this.editForm.value.description;
    const imageUrl = this.editForm.value.imageUrl;
    const type = this.editForm.value.type;

    const bookData = {
      title,
      description,
      imageUrl,
      type
    }
    this.bookService.editBook(id, bookData).subscribe(() => {
      this.route.navigate(['/home'])
    })
    
  }

}
