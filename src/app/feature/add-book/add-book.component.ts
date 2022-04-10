import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AddBookService } from '../add-book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @ViewChild('createForm') createForm!: NgForm

  constructor(private bookService: AddBookService, 
    private router: Router,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Add Book')
  }

  onSubmit(): void {

    const title = this.createForm.value.title;
    const description = this.createForm.value.description;
    const imageUrl = this.createForm.value.imageUrl;
    const type = this.createForm.value.type;

    const bookData = {
      title,
      description,
      imageUrl,
      type
    }

    console.log(bookData);
    

   this.bookService.addBook(bookData).subscribe(data => {
     this.router.navigate(['/details', data._id])
   })
    
  }

}
