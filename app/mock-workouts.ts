import { Workout } from "./model/workout";
import { Series } from "./model/series";

export const WORKOUTS: Workout[] = [
  { 
    id: 1,
    exercise: "Pośladeły",
    date: new Date(2016,12,12),
    user: "user1",
    series: [
      {
        weight: 15,
        times: 5,
      },
      {
        weight: 1,
        times: 50
      }
    ]
  },
 { 
    id: 2,
    exercise: "Szpagateły",
    date: new Date(2016,12,12),
    user: "user1",
    series: [
      {
        weight: 15,
        times: 5,
      },
      {
        weight: 1,
        times: 50
      }
    ]
  },
];
