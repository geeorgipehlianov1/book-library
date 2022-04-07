import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hasUser: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
    window.location.reload();
    this.router.navigate(['/home'])
  }

}
