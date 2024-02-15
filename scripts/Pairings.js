import { getChildren, getCelebrities } from "./database.js";

const kids = getChildren();
const celebrities = getCelebrities();

const findCelebrityMatch = (kidObject, allCelebrities) => {
  let celebrityName = null;

  for (const celebrity of allCelebrities) {
    if (celebrity.id === kidObject.celebrityId) {
      celebrityName = celebrity;
    }
  }

  return celebrityName;
};

export const Pairings = () => {
  let pairHTML = `<ul>`;

  for (const kid of kids) {
    const kidsStar = findCelebrityMatch(kid, celebrities);
    pairHTML += `<li>${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}</li>`;
  }

  pairHTML += `</ul>`;

  return pairHTML;
};
