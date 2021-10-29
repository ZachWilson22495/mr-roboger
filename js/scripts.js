const phrase = "1 2 3 4 5"

let array = phrase.split(" ")

const fixedArray = array.map(function(element) {
  if (element === "3") {
      element = "love";
  }
return fixedArray
});

-[RESULT]-

(5) [Array(5)], [Array(5)], [Array(5)], [Array(5)], [Array(5)],