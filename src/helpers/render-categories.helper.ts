import { Category } from "../types/types";

const handleCategoryChange = (category: Category) => {
  if (category === "general") {
    console.log("change for general");
  } else if (category === "hobby") {
    alert("going for chill");
  } else if (category === "work") {
    document.body.style.background = "red";
  } else if (category === "house") {
    console.log("work work work");
    alert("going to work");
    document.body.style.background = "green";
  } else if (category === "social") {
    document.body.style.background = "yellow";
  } else {
    const never: never = category;
    console.log(never);
  }
};

export const render = (
  categories: Category[],
  categoriesContainerelement: HTMLElement,
  inputChangeCallback: (category: Category) => void
) => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");

    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
      inputChangeCallback(category);
      handleCategoryChange(category);
    });

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainerelement.appendChild(categoryElement);
  });
};
