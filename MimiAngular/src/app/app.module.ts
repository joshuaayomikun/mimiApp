import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MustMatchDirective } from './must-match.directive';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MustMatchDirective,
  ],
  imports: [
    BrowserModule
    ,BrowserAnimationsModule
    ,MatFormFieldModule
    ,MatButtonModule
    ,MatInputModule
    ,MatCardModule
    ,MatToolbarModule
    ,MatSnackBarModule
    ,FormsModule
    ,HttpClientModule
    ,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports:[
    MatFormFieldModule
    ,MatButtonModule
    ,MatInputModule
    ,MatCardModule
    ,MatToolbarModule
    ,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
