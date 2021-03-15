function wakeDog(name, type) {
  return `Wake ${name} the ${type}`
}

function leashDog(name, type) {
  return `Leash ${name} the ${type}`
}
function walkToPark(name, type) {
  return `Walk to the park with ${name} the ${type}`
}
function throwFrisbee(name, type) {
  return `Throw the frisbee for ${name} the ${type}`
}
function walkHome(name, type) {
  return `Walk home with ${name} the ${type}`
}
function unleashDog(name, type) {
  return `Unleash ${name} the ${type}`
}
const routine =  [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(name, type) {
  return routine.map(r => r(name, type))
}
