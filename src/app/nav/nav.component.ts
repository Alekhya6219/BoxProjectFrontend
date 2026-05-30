import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtauthService } from '../auth/jwtauth.service';
import { UserService } from '../userES/user.service';
import { User } from '../userES/user';
import { HttpErrorResponse } from '@angular/common/http';
import { jwtauth } from '../auth/jwtauth';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private Service: JwtauthService,
    private authser: jwtauth,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['showLogin']) {
        this.showPopUp();
      }
    });
  }

  isPopUpVisible = false;

  showPopUp() {
    this.isPopUpVisible = !this.isPopUpVisible;
  }

  hidePopUp() {
    this.isPopUpVisible = false;
  }

  login(loginForm: NgForm) {
    this.Service.login(loginForm.value).subscribe(
      (response: any) => {
        console.log(response.jwtToken);
        console.log(response.user.role);
        this.authser.setRole(response.user.role);
        this.authser.setToken(response.jwtToken);

        this.snackBar.open('Logged in successfully!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });

        this.hidePopUp(); // optionally hide the popup
      },
      (error) => {
        console.log(error);
        this.snackBar.open('Login failed: Invalid username or password', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}
