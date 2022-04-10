import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  public setTitle(): void {
    this.titleService.setTitle('404 Not Found!')
  }

  ngOnInit(): void {
    this.setTitle();
  }

}
