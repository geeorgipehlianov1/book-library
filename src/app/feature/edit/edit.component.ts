import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IBook } from 'interfaces/books';
import { GetAllBooksService } from 'src/app/shared/get-all-books.service';
import { EditBookService } from '../edit-book.service';
import { GetBookByIdService } from '../get-book-by-id.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('editForm') editForm!: NgForm;

  book!: IBook

  constructor(private bookService: EditBookService,
              private router: ActivatedRoute,
              private route: Router,
              private loadBooksService: GetBookByIdService,
              private titleService: Title
    ) { }


    ngOnInit(): void {
        this.titleService.setTitle('Edit Page')
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

    const choice = confirm('Are you sure you want to update this book?')
    if(choice) {
      this.bookService.editBook(id, bookData).subscribe(data => {
        this.route.navigate(['/details', data._id])
      })
    }
    
  }

}
