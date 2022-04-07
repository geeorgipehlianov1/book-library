import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {



  email!: string;

  constructor() { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('userData')!);
    this.email = user.email
  }

}
