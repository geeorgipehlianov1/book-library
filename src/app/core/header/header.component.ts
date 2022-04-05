import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hasUser: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkForUser();
  }

  checkForUser(): void {
    const data = localStorage.getItem('userData');
    console.log(data);
    
    if(data != null) {
      this.hasUser = true;
    } 
  }

  logOut(): void {
    localStorage.removeItem('userData')
    this.router.navigate(['/login'])
  }

}
