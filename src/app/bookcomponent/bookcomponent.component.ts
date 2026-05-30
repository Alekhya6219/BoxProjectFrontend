import { Component, OnInit } from '@angular/core';
import { Activity } from '../activityES/activity';
import { ActivityService } from '../activityES/activity.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-bookcomponent',
  templateUrl: './bookcomponent.component.html',
  styleUrls: ['./bookcomponent.component.css']
})
export class BookcomponentComponent implements OnInit {

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
