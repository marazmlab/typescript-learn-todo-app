export interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

export enum Category {
  GENERAL = "general",
  WORK = "work",
  HOUSE = "house",
  HOBBY = "hobby",
  SOCIAL = "social",
}
