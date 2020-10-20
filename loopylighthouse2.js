function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let firstMultiple = i % multiples[0] === 0;
    let secondMultiple = i % multiples[1] === 0;
    let msg = '';
    if (firstMultiple) {
      msg += words[0];
    }
    if (secondMultiple) {
      msg += words[1];
    }
    if (!firstMultiple && !secondMultiple) {
      msg = i;
    }
    console.log(msg);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);