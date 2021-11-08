function neighbortron(input){
  for (let index = 0; index <= input; i++) {
    if (index.includes(3)) {
      result.push("Won't you be my neighbor?");
    } else if (index.includes(2)) {
      result.push("Boop");
    } else if (index.includes(1)) {
      result.push("Beep");
    } else {
      result.push(index);
    };
  };
  return finalArray;
};