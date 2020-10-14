for (let i = 100; i <= 200; i++) {
  let divByThree = i % 3 === 0;
  let divByFour = i % 4 === 0;
  let msg = '';
  if (divByThree) {
    msg += 'Loopy';
  }
  if (divByFour) {
    msg += 'Lighthouse';
  }
  if (!divByThree && !divByFour) {
    msg = i;
  }
  console.log(msg);
}