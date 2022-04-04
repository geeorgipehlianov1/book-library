import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './all-books/all-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    AllBooksComponent,
    AddBookComponent,
    MyProfileComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
