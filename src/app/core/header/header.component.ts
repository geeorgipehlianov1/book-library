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
    console.log(data);
    
    if(data != null) {
      this.hasUser = true;
    } 
    console.log(this.hasUser);
  }


  logOut(): void {
    localStorage.removeItem('userData')
    this.router.navigate(['/home'])
  }

}
