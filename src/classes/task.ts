import { Category } from "../types/types.js";

export class TaskClass {
  name: string;
  done: boolean;
  category?: Category;

  constructor(name: string, done: boolean, category: Category = Category.GENERAL) {
    this.name = name;
    this.done = done;
    this.category = category;
  }
}
