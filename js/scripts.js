//  Business Logic

function puppets(str) {
  let phraseArray = Array.from(str);
  for (let i = 0; i <= str; i++); {
    if (str.toString().includes(3)) {
      phraseArray.push("Won't you be my neighbor?");
    } 
    else if (str.toString().includes(2)) {
      phraseArray.push("Boop!")
    } 
    else if (str.toString().includes(1)) {
      phraseArray.push("Beep!")
    }
    else {
      phraseArray.push(str);
    }
  }
  return phraseArray;
}