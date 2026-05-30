import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewtestComponent } from './viewtest/viewtest.component';
import { NavComponent } from './nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { SportcardsComponent } from './sportcards/sportcards.component';
import { BookcomponentComponent } from './bookcomponent/bookcomponent.component';
import { NavsecondComponent } from './navsecond/navsecond.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ViewtestComponent,
    NavComponent,
    SportcardsComponent,
    BookcomponentComponent,
    NavsecondComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
