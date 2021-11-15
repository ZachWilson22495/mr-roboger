# _Mr. Roboger_

#### By **Zach Wilson**

#### _A webpage that gives you a list of numbers with some funny edits_

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery

## Description

_Type a number into Mr. Roboger, and you'll receive back a list of numbers from 0 all the way to your desired number. There will be some beeps and boops along the way, as well as Mr. Roboger's heartwarming catchphrase_

## Setup/Installation Requirements

* Clone this repository to your Desktop
* Navigate to the new folder titled 'mr-roboger' and open it
* Open index.html with your browser
* Answer the questions provided and click 'Submit' to see your answer

## TEST LOG


Describe: neighbortron()

Test: "Should return the number 10"
Code: 
const numberTen = 10
Expected Output: 10

Test: "Should return all numbers up to 10"
Code:
for (let index = 0; index <= 10; index++) {
    console.log(index);
}
Expected Output: 0,1,2,3,4,5,6,7,8,9

Test: "Should say 'boop' when the number 2 is returned"
Code:
function neighbortron(input){
  let result = []
  for (let index = 0; index <= input; index++) {
    let numString = index.toString();
    if (numString.includes("2")) {
      result.push(" Boop");
    } else {
      result.push(" " + numString);
    };
  };
  return result;
};
Expected Output: 0,1,boop,3,4,5,6,7,8,9,10

Test: "Should count to twenty. Replacing ones with 'beep' and twos with 'boop.' The number twelve should return 'boop'
Code:
function neighbortron(input){
  let result = []
  for (let index = 0; index <= input; index++) {
    let numString = index.toString();
    if (numString.includes("2")) {
      result.push(" Boop");
    } else if (numString.includes("1")) {
      result.push(" Beep");
    } else {
      result.push(" " + numString);
    };
  };
  return result;
};
Expected Output: 0,beep,boop,3,4,5,6,7,8,9,beep,beep,boop,beep,beep,beep,beep,beep,beep,beep,boop


## Known Bugs

Currently no known bugs.

## License

MIT License

Copyright (c) [2021] [Zachary Wilson]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### Feel free to fix/edit all contained code to your liking. If you encounter and problems, contact me at z