import { Series } from "./Series";

export class Workout {
  id: number;
  exercise: string;
  date: Date;
  user: string;
  series: Array<Series>;	
}