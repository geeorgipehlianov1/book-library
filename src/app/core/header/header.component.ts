import { Component, OnInit, SimpleChanges } from '@angular/core';
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
   
  }

  onUser(): void {
    const data = localStorage.getItem('userData');
    if(data) {
      this.hasUser = true;
    } 
    console.log(this.hasUser);
  }


  logOut(): void {
    localStorage.removeItem('userData')
    this.router.navigate(['/login'])
  }

}
