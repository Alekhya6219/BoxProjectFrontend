import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../userES/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { jwtauth } from '../auth/jwtauth';
import { User } from '../userES/user';
import { ActivityService } from '../activityES/activity.service';
import { Activity } from '../activityES/activity';

@Component({
  selector: 'app-viewtest',
  templateUrl: './viewtest.component.html',
  styleUrls: ['./viewtest.component.css']
})
export class ViewtestComponent implements OnInit {

  public user: User[] = [];
  public activity: Activity[] = [];

  constructor(private userservice: UserService, private activityservice: ActivityService) { }
  ngOnInit(): void {
    this.getUsers();
    this.getActivities();
  }
  public getUsers(): void {
    this.userservice.getUserData().subscribe(
      {
        next: (response: User[]) => { this.user = response, console.log(response) },
        error: (error: HttpErrorResponse) => console.log(error),
        complete: () => console.log('HTTP request completed')
      });
  }
  
  public getActivities(): void {
    this.activityservice.getAtivities().subscribe(
      {
        next: (response: Activity[]) => { this.activity = response, console.log(response) },
        error: (error: HttpErrorResponse) => console.log(error),
        complete: () => console.log("completed")
      });
  }
}