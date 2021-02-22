function isOldEnoughToVote(age) {
  // your code here
  if (age>=18) {
      return "Puede botar";
  }
  else if(age<18){

    return "No puede botar";
  }
}

var output = isOldEnoughToVote(18);
console.log(output);