import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @ViewChild('createForm') createForm!: NgForm

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.createForm.value);
    
  }

}
