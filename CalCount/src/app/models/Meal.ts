import { User } from "./User";

export interface Meal {
  id: number;
  user: User;
  name: string;
  calories: number;
  description: string;
  exercise: boolean;
  date: string;
}
