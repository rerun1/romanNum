var userNumber = "";
var result = "";
var stringArray = [];
var ones = [];
var tens = [];
var hundreds = [];


var stringTest = function(string){
  for (var i = 0; i < string.length; i ++ ){
    if (string.match(/[^\d*]/)) {
      result = "Error! Please enter just numbers";
      return result;
    } else if (string === "0") {
      result = "Error! Please enter a number other than zero";
      return result;
    } else if (string.match(/^[0]/)) {
      result = "Error! Please enter a number that does not begin with zero";
      return result;
    }
  }

  if (string === "10") {
    result = "X"
    return result;
  } else if (string === "50") {
    result = "L"
    return result;
  } else if (string === "100") {
    result = "C";
    return result;
  } else if (string === "500") {
    result = "D";
    return result;
  } else if (string === "1000") {
    result = "M";
    return result;
  }

  stringArray = string.split("").reverse();

  if (stringArray[0] === "1") {
    ones.push("I");
  } else if (stringArray[0] === "2") {
    ones.push("II");
  } else if (stringArray[0] === "3") {
    ones.push("III");
  }  else if (stringArray[0] === "4") {
    ones.push("IV");
  }  else if (stringArray[0] === "5") {
    ones.push("V");
  }  else if (stringArray[0] === "6") {
    ones.push("VI");
  }  else if (stringArray[0] === "7") {
    ones.push("VII");
  }  else if (stringArray[0] === "8") {
    ones.push("VIII");
  }  else if (stringArray[0] === "9") {
    ones.push("IX");
  }

  if (stringArray[1] === "1") {
    tens.push("X");
  } else if (stringArray[1] === "2") {
    tens.push("XX");
  } else if (stringArray[1] === "3") {
    tens.push("XXX");
  }  else if (stringArray[1] === "4") {
    tens.push("XL");
  }  else if (stringArray[1] === "5") {
    tens.push("L");
  }  else if (stringArray[1] === "6") {
    tens.push("LX");
  }  else if (stringArray[1] === "7") {
    tens.push("LXX");
  }  else if (stringArray[1] === "8") {
    tens.push("LXXX");
  }  else if (stringArray[1] === "9") {
    tens.push("XC");
  }

  if (stringArray[2] === "1") {
    hundreds.push("C");
  } else if (stringArray[2] === "2") {
    hundreds.push("CC");
  } else if (stringArray[2] === "3") {
    hundreds.push("CCC");
  }  else if (stringArray[2] === "4") {
    hundreds.push("CD");
  }  else if (stringArray[2] === "5") {
    hundreds.push("D");
  }  else if (stringArray[2] === "6") {
    hundreds.push("DC");
  }  else if (stringArray[2] === "7") {
    hundreds.push("DCC");
  }  else if (stringArray[2] === "8") {
    hundreds.push("DCCC");
  }  else if (stringArray[2] === "9") {
    hundreds.push("CM");
  }

  if (stringArray[3] === "1") {
    thousands.push("M");
  } else if (stringArray[3] === "2") {
    thousands.push("MM");
  } else if (stringArray[3] === "3") {
    thousands.push("MMM");
  }

  var concatNumber = thousands.concat(hundreds, tens, ones);

  result = concatNumber.join("");

  return result;

}


var resetForm = function(){
  result = "";
  tens = [];
  ones = [];
  hundreds = [];
  thousands = [];
}


$(document).ready(function(){
  $("form#convertForm").submit(function(event){

    resetForm();


    userNumber = $("input#numberInput").val();

    stringTest(userNumber);

    $("p#romanNumberOutput").text(result);

    console.log(result);

    event.preventDefault();
  });
});
