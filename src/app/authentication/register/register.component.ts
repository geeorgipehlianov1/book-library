import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {

  @ViewChild('registerForm') registerForm!: NgForm

  constructor() { }

  ngAfterViewInit(): void {
          
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
    
  }

}
