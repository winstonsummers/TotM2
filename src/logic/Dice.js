// All the functions to make up the dice logic

/**
 * Roll a D...
 * @param {number} sides 
 * @return {number} random value between one (the minimum value of a die) and the max value (number of sides)
 */
function rollaD(sides) {
  const MIN_DIE_VALUE = 1;
  return Math.floor(Math.random() * (sides - MIN_DIE_VALUE) + MIN_DIE_VALUE); 
}

/**
 * Add up Values
 * @param {Array<number>} list 
 * @return {number}
 */
function sumList(list = []) {
  const addUp = (a, b) => {a + b};
  return list.reduce(addUp);
}

/**
 * rolls die/dice as defined by params
 * @param {number} numberOfSides number of sides the die you want to roll has
 * @param {number} numberOfDice number of values you want to generate
 * @param {boolean} addUp weither or not values should be added together, does nothing if only rolling one die
 * @return {Array<number>} Always returns an array to prevent having to check data types
 */
export function rollD(numberOfSides, numberOfDice = 1, addUp = true) {
  let results = [];
  for(rolls in numberOfDice) {
    results.push(rollaD(numberOfSides));
  }
  return addUp ? [sumList(results)] : results;
} 

/**
 * @return {number} a number between one and 100 generated as if rolling two d10
 */
function percentAsD10s() {
  const tensDie = rollaD(10) * 10;
  const onesDie = rollaD(10);
  const result = tensDie + onesDie;
  return result > 100 ? result - 100 : result
}

/**
 * @return {number} a number between one and 100 generated as if rolling a d100
 */
function percentAsD100() {
  return rollaD(100)
}

/**
 * Currying function where given the number of sides you only have to define the number of dice you want to roll in the returned function
 * @param {number} sides 
 * @return {Function}
 */
export const rollDiceBySides = (sides) => {
  (numberOfDice, addUp) => {
    return rollD(sides, numberOfDice, addUp);
  }
}

/**
 * Currying function where given the number of dice you want to roll you only have to define the number of sides those dice should have in the returned function
 * @param {number} numberOfDice 
 * @return {Function}
 */
export const rollDiceByQuantity = (numberOfDice) => {
  (sides, addUp) => {
    return rollD(sides, numberOfDice, addUp);
  }
}

/**
 * Currying function for when you just need to do the same roll over and over and over again
 * @param {number} numberOfDice 
 * @param {number} numberOfSides 
 */
export const rollDiceOverAndOver = (numberOfDice, numberOfSides) => {
  (addUp) => {
    return rollD(numberOfSides, numberOfDice, addUp);
  }
}

// Functions for the standard dice every gamer knows and loves

export const rollD4  = () => rollDiceBySides(4);
export const rollD6  = () => rollDiceBySides(6);
export const rollD8  = () => rollDiceBySides(8);
export const rollD10 = () => rollDiceBySides(10);
export const rollD12 = () => rollDiceBySides(12);
export const rollD20 = () => rollDiceBySides(20);

/**
 * @param {boolean} asD10s weither to generate percent number by rolling two d10s or a d100
 * @return {number} percent number 
 */
export function rollPercentile(asD10s = true) {
  return asD10s ? percentAsD10s() : percentAsD100();
}

// Helper functions that only apply to dice :D

/**
 * returns number -1 which would be an index value since the dice functions are all setup to generate numbers between 1 - [sides]
 * @param {number} value 
 * @return {number}
 */
export function dieRollToArrIndex(value) {
  return value - 1;
}

/**
 * Curried function for rolling stats
 */
const statRoll = rollDiceOverAndOver(3, 6);

export function generateStatValue() {
  return statRoll()
}