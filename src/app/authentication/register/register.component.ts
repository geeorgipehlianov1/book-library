import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {

  @ViewChild('registerForm') registerForm!: NgForm

  constructor(private userService: RegisterService, private router: Router) { }

  ngAfterViewInit(): void {

  }

  onSubmit(): void {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    
    const userData = {
      email, 
      password
    }

    this.userService.register(userData).subscribe(data => {
      console.log(data);
      localStorage.setItem('userData', JSON.stringify(data))
      this.router.navigate(['/home'])
    })
  }

}
