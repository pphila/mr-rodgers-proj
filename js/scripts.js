//  Business Logic

function puppets(number) {
  let returnArray = [];
  for (i = 0; i <= number; i++) {
    if ([i].toString().includes(3)) {
      returnArray.push("Won't you be my neighbor?");
    } else if ([i].toString().includes(2)) {
      returnArray.push("Boop!");
    } else if ([i].toString().includes(1)) {
      returnArray.push("Beep!");
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
}

// UI Logic

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let userName = $("input#user").val();
    let phraseNumInput = $("input#phraseNumber").val();

    $(".user").text(userName);
    $(".phraseNumber").text(puppets(phraseNumInput));

    $("#response").show();
  });
});
