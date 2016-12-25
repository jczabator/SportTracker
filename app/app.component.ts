import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WorkoutDetailComponent } from './component/workout-detail.component';
import { Workout } from './model/workout';
import { WorkoutService } from './service/workout-service';

@Component({
    selector: 'my-app',
    templateUrl: "app/template/app.component.html",
    styleUrls: ["app/style/app.component.css"],
    directives: [WorkoutDetailComponent],
    providers: [WorkoutService]
})

export class AppComponent implements OnInit {
  title = 'Sport Tracker';
  sectionTitle = "Workouts"
  selectedWorkout: Workout;
  workouts: Workout[];

  constructor(private workoutService: WorkoutService) 
  {
  }

  onSelect(workout: Workout) {
    this.selectedWorkout = workout;
  };

  getWorkouts() {
    this.workoutService.getWorkouts().then(workouts => this.workouts = workouts);
  }

  ngOnInit(){
    this.getWorkouts();
  }
}
