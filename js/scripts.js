//  Business Logic

function puppets(str) {
  let phraseArray = Array.from(str);
  for (let i = 0; i <= str; i++); {
    if (str.toString().includes(1)) {
      phraseArray.push("Beep!");
    } 
    else if (str.toString().includes(2)) {
      phraseArray.push("Boop!")
    }
    else {
      phraseArray.push(str);
    }
  }
  return phraseArray;
}