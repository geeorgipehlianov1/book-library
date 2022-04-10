import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  hasUser: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
   this.onUser();
  }

  ngDoCheck(): void {
      this.onUser();
  }

  
  onUser(): void {
    const data = localStorage.getItem('userData');    
    if(data != null) {
      this.hasUser = true;
    } 
  }


  logOut(): void {
    localStorage.removeItem('userData')
    this.hasUser = false;
    this.router.navigate(['/home'])
  }

}
