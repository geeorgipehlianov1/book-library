import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {

  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required]),
    'rePass': new FormControl('')
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: RegisterService, 
    private router: Router,
    private titleService: Title) { }

    public setTitle(): void {
      this.titleService.setTitle('Register Page')
    }

    ngOnInit(): void {
        this.setTitle()
    }


  onSubmit(): void {

    const email = this.registerFormGroup.value['email'];
    const password = this.registerFormGroup.value.password;
    const rePass = this.registerFormGroup.value.rePass;

    const userData = {
          email, 
          password
        }

    if(password == rePass) {
      const userData = {
        email, 
        password
      }
  
      this.userService.register(userData).subscribe(data => {
        localStorage.setItem('userData', JSON.stringify(data))
        this.router.navigate(['/home'])
      })
    
    } else {
      alert('Passwords dont\'t match!')
    }
  }

}
