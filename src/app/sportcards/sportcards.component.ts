import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activityES/activity.service';
import { Activity } from '../activityES/activity';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sportcards',
  templateUrl: './sportcards.component.html',
  styleUrls: ['./sportcards.component.css']
})
export class SportcardsComponent implements OnInit {

  constructor(private activityservice: ActivityService) { }

  
  activity : Activity[]= [];

  ngOnInit(): void {
    this.getActivities();
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
