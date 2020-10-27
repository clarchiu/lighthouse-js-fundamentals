function loopyLighthouse(range, multiples, words) {
  const start = range[0];
  const end = range[1];
  for (let i = start; i <= end; i++) { //while loop more performative
    const isDivByFirstMult = i % multiples[0] === 0;
    const isDivBySecondMult = i % multiples[1] === 0;

    let msg = '';
    msg += isDivByFirstMult ? words[0] : '';
    msg += isDivBySecondMult ? words[1] : '';
    console.log(msg ? msg: i);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);