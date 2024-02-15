import { getChildren } from "./database.js";

const children = getChildren();

export const Kids = () => {
  let html = `<ol>`;

  for (const child of children) {
    html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`;
  }

  html += `</ol>`;
  return html;
};

document.addEventListener("click", (clickEvent) => {
  const kidClick = clickEvent.target;
  if (kidClick.dataset.type === "child") {
    for (const child of children) {
      if (child.id === parseInt(kidClick.dataset.id)) {
        window.alert(`${child.name} wishes to ${child.wish}`);
      }
    }
  }
});
