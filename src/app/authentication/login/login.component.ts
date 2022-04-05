import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('loginForm') loginForm!: NgForm

  constructor(private userService: LoginService, private router: Router) { }

 ngAfterViewInit(): void {
     
 }

 onSubmit(): void {
  const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    
    const userData = {
      email, 
      password
    }

    this.userService.login(userData).subscribe(data => {
      console.log(data);
    })
 }

}
