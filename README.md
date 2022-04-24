# Mr Roboger's Neighborhood
#### By Peter Philavanh


#### Mr. Roboger's Neighborhood

## Technology Used:
* VS Code
* Javascript
* Jquery
* HTML
* GitHub

## Description
This a fun webpage that is themed after "Mister Rogers' Neighborhood. Enter your name and a number and it will respond to your inputs with specific phrases according to the number the user may input. This webpage was developed independently and was used as practice for writing loops and branches with JavaScript.

## Setup/Installation Requirements
* Clone repository to your desktop from Github url to save a copy onto device
* Using cmd GUI, navigate to the cloned directory named "language-selector.html"
* Continued in cmd GUI, open index.html to view project locally
* Directory contents such as css, img, scripts, and readme can also be accessed

## Known Bugs
* No known bugs
* Please report any known bugs to author via email: efl2ice89@gmail.com

## License
Copy right (C) April 2022 Peter Philavanh.
Image: (C) 2018 The Fred Rogers Company. All Rights Reserved.

## TDD log

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