import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AboutComponent } from './core/about/about.component';
import { ContactsComponent } from './core/contacts/contacts.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { HasUserGuard } from './core/has-user.guard';
import { HomePageComponent } from './core/home-page/home-page.component';
import { AddBookComponent } from './feature/add-book/add-book.component';
import { AllBooksComponent } from './feature/all-books/all-books.component';
import { DetailsComponent } from './feature/details/details.component';
import { EditComponent } from './feature/edit/edit.component';
import { MyProfileComponent } from './feature/my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'all-books',
    canActivate: [HasUserGuard],
    component: AllBooksComponent
  },
  {
    path: 'add-book',
    canActivate: [HasUserGuard],
    component: AddBookComponent,
  },
  {
    path: 'my-profile',
    canActivate: [HasUserGuard],
    component: MyProfileComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
