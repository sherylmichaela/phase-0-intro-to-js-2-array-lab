let cats = ["Milo", "Otis", "Garfield"];

let destructivelyAppendCat = () => cats.push("Ralph");
let destructivelyPrependCat = () => cats.unshift("Bob");
let destructivelyRemoveLastCat = () => {
  cats.pop();
  return cats;
};

let destructivelyRemoveFirstCat = () => {
  cats.shift();
  return cats;
};

let appendCat = (name) => [...cats, name];
appendCat("Broom");

let prependCat = (name) => [name, ...cats];
prependCat("Arnold");

let removeLastCat = () => cats.slice(0, 2);
removeLastCat();

let removeFirstCat = () => cats.slice(-2);
removeFirstCat();
