const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
 }


 function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
 }

 function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
 }

 function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
 }

 function appendCat(name){
    var name_1= [...cats,name];
    return name_1;
  }

  function prependCat(name){
    var name_2= [name,...cats];
    return name_2;
  }

  function removeLastCat() {
    var catties= cats.slice(0,2);
    return catties;
 }

 function removeFirstCat() {
    var catties2= cats.slice(1);
    return catties2;
 }