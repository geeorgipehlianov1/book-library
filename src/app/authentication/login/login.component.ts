import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('loginForm') loginForm!: NgForm

  constructor() { }

 ngAfterViewInit(): void {
     
 }

 onSubmit(): void {
   console.log(this.loginForm.value);
   
 }

}
