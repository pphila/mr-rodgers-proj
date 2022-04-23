//  Business Logic

function puppets(str) {
  let phraseArray = Array.from(str);
  for (let i = 0; i <= str; i++); {
    if ([i].toString().includes(1)) {
      phraseArray.push("test");
    }
    else {
      phraseArray.push(i);
    }
  }
  return phraseArray;
}