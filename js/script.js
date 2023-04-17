// SECTION TWO - FLEXBOX

const flexItems = document.querySelectorAll(".flex-item");

// Add event listeners to each div element
flexItems.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    // Select the i element inside the hovered div element
    const icon = item.querySelector("i");
    icon.classList.remove("far");
    icon.classList.add("fas");
  });

  item.addEventListener("mouseleave", function () {
    // Select the i element inside the hovered div element
    const icon = item.querySelector("i");
    icon.classList.remove("fas");
    icon.classList.add("far");
  });
});

// SECTION FOUR - FORM

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// PHONE INPUT FORMAT 

const phoneInput = document.querySelector('input[type="tel"]');

phoneInput.addEventListener("input", function (event) {
  const input = event.target.value;
  const regex = /^[0-9]{0,3}-?[0-9]{0,4}-?[0-9]{0,4}$/;
  if (regex.test(input)) {
    let formattedInput = input.replace(/-/g, "");
    if (formattedInput.length > 3) {
      formattedInput =
        formattedInput.slice(0, 3) + "-" + formattedInput.slice(3);
    }
    if (formattedInput.length > 8) {
      formattedInput =
        formattedInput.slice(0, 8) + "-" + formattedInput.slice(8);
    }
    phoneInput.value = formattedInput;
  } else {
    phoneInput.value = "";
  }
});
