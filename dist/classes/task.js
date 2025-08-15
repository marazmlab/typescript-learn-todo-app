import { Category } from "../types/types.js";
export class TaskClass {
    constructor(name, done, category = Category.GENERAL) {
        this.name = name;
        this.done = done;
        this.category = category;
    }
}
