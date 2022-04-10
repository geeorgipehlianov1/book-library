import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginForm') loginForm!: NgForm

  loginFromGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: LoginService, 
    private router: Router) { }


 onSubmit(): void {
    const email = this.loginFromGroup.value.email;
    const password = this.loginFromGroup.value['password'];
    
    
    const userData = {
      email, 
      password
    }
    
    this.userService.login(userData).subscribe(data => {
      let userData = {
        email: data.email,
        password: data.password,
        _id: data._id,
        token: data.accessToken
      }
      localStorage.setItem('userData', JSON.stringify(data))

      this.router.navigate(['/home'])
    })
 }

}
