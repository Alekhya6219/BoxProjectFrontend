import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtauthService } from '../auth/jwtauth.service';
import { UserService } from '../userES/user.service';
import { User } from '../userES/user';
import { HttpErrorResponse } from '@angular/common/http';
import { jwtauth } from '../auth/jwtauth';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public users : User[]=[]; 

  constructor(private Service: UserService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  hide = true;

  public onAddUser(addForm: NgForm): void {
  this.Service.addUser(addForm.value).subscribe(
    (response: User) => {
      console.log(response);
      this.snackBar.open('User registered successfully!', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });
    },
    (error: HttpErrorResponse) => {
      console.log(error.error);
      this.snackBar.open('Registration failed. Please try again.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    },
    () => {
      addForm.reset();
    }
  );
}

  public onGetUser(): void {
    // document.getElementById('add-employee-form')?.click();

    this.Service.getUserData().subscribe((data) => {
      this.users = data; // Assign the data to the users property
    });
  }
}
