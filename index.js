//distance covered function
function scuberGreetingForFeet(distance) {
  console.log('delivary cost for: ' + distance)
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

console.log(scuberGreetingForFeet(1500))

//area function
console.log ('City:')
function ternaryCheckCity(city){
  return city === 'NYC'
  ? 'Ok, sounds good.'
  :  'No go.'
}
console.log(ternaryCheckCity('LA'))

// tip replies
console.log ('Tips:')
function switchOnCharmFromTip(tip){
  switch (tip){
    case `generous`: return `Thank you so much.`;
    case `not as generous`: return `Thank you.`
    default: return `Bye.`;
  }
}
console.log(switchOnCharmFromTip('nothing'))
