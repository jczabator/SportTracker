/**
 * Created by cjbg on 23.07.2016.
 */
import { Component, Input } from '@angular/core';
import { Workout } from '../model/workout';

@Component({
  selector: 'my-workout-detail',
	template: `
	<div *ngIf="workout">
		<h2>{{workout.exercise}} details!</h2>
		<div><label>date: </label>{{workout.date | date}}</div>
		<div>
		<label>weight: </label>
		<input [(ngModel)]="workout.weight" placeholder="weight"/>
		</div>
	</div>
	`
})

export class WorkoutDetailComponent{
  @Input()
  workout: Workout;
}
