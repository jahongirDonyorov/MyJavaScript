'use strict';

// githab


// Amaliyot
let numberOfNews = +prompt('Siz qancha yangiliklar kurdigiz');
console.log(numberOfNews);

let personalNewsDB = {
  count:numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

let a = prompt('oxirgi kurgan yangiliklardan biri'),
b = prompt('unga qanday baho bergan buardingiz');

personalNewsDB.news[a] = b;
console.log(personalNewsDB);

