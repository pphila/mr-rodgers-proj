Describe puppets()

Test: "It will push a string into an array"
Code:
Expected Output: ["1"]

Test: "it will iterate across string to find the number 1"
Code: puppets(410)
Expected Output: phraseArray [1]; "test"

Test: "it will find the number 1 within the array and return 'Beep!'."
Code: puppets(109);
Expected Output: "Beep!"

Test: "It will find the number 2 within the array and return 'Boop!'."
Code: puppets(2099)
Expected Output: "Boop!"

Test: "It will find the number 3 within the array and replace it with 'Won't you be my neighbor?'"
Code: puppets(32);
Expected Output: "Won't you be my neighbor?"

Test: "It will return an array of numbers from 0 to the user's inputed number"
Code: puppets(7);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7]