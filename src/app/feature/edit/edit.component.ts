import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'interfaces/books';
import { GetBookByIdService } from '../get-book-by-id.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements AfterViewInit {

  @ViewChild('editForm') editForm!: NgForm;

  book!: IBook

  constructor(private bookService: GetBookByIdService, private router: ActivatedRoute) { }

  ngAfterViewInit(): void {
    const id = this.router.snapshot.params['id']
    this.bookService.loadBookById(id).subscribe(book => {
      this.book = book;
    })   
  }
  

  onSubmit(): void {
    console.log(this.editForm.value);
    
  }

}
