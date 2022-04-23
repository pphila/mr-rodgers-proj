//  Business Logic

function puppets(input) {
  let phraseArray = [];
  //ReferenceError: i is not defined
  for (let i = 0; i <= input.length; i++); {
    if (i.toString().includes(3)) {
      phraseArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes(2)) {
      phraseArray.push("Boop!");
    } else if (i.toString().includes(1)) {
      phraseArray.push("Beep!");
    } else {
      phraseArray.push(i);
    }
  }
  return phraseArray;
}

// UI Logic