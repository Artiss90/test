function cakes(recipe, available) {
  let countOfCake = 0;

  const getCake = ({ ...currentAvailable }) => {
    let isEnough = true;
    for (let key in recipe) {
      if (!currentAvailable[key] || currentAvailable[key] < recipe[key]) {
        isEnough = false;
        return;
      }

      currentAvailable[key] -= recipe[key];
    }
    if (isEnough) {
      countOfCake += 1;
      getCake(currentAvailable);
    }
  };

  getCake(available);

  return countOfCake;
}

// ! peeped solution
// const cakes = (needs, has) => Math.min(
//   ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
// )

//* Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// TODO Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

console.log(
  cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }),
  cakes({ flour: 300, apples: 3, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 })
);
