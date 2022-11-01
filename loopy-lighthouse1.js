for (let n=100;n<=200;n++) {
  if (!(n % 3) && !(n % 4)) {
    console.log("LoopyLighthouse");
  } else if (!(n % 3)) {
    console.log("Loopy");
  } else if (!(n % 4)) {
    console.log("Lighthouse");
  } else {
    console.log(n);
  }
}

var x = 1;

function addTwo() {
  x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);