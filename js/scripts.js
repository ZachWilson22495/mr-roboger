function neighbortron(input){
  let result = []
  for (let index = 0; index <= input; index++) {
    let numString = index.toString();
    if (numString.includes("3")) {
      result.push(" Won't you be my neighbor?");
    } else if (numString.includes("2")) {
      result.push(" Boop");
    } else if (numString.includes("1")) {
      result.push(" Beep");
    } else {
      result.push(" " + numString);
    };
  };
  return result;
};

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const number = $("#number").val();
    let result = neighbortron(number);
    $("#output").text(result);
  });
});