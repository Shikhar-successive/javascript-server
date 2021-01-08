export function getRandomNumber() {
  console.log('inside Random Number');
  const max = 4;
  const min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getNextRoundRobin(total, current) {
  console.log('inside Round Robin');
  let next;
  if (current === total) {
    next = 0;
  } else {
    next = current + 1;
  }
  return next;
}
