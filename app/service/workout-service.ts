import { Injectable } from "@angular/core";
import { WORKOUTS } from "../mock-workouts";

@Injectable()
export class WorkoutService {
    getWorkouts(){
        return Promise.resolve(WORKOUTS);
    }
}