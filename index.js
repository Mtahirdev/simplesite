let heading = document.querySelector(".heading");

let state = true;

setInterval(() => {
  if (state == true) {
    heading.innerText = "From Tahir";
    state = false;
  } else {
    state = true;
    heading.innerText = "Hello World";
  }
}, 3000);
