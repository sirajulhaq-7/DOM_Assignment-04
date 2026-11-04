// Task 1: Add a Class
function show() {
  let para = document.querySelector("#para");
  para.classList.add("highlight");
}

// Task 2: Remove a Class
function hide() {
  para.classList.remove("highlight");
}

// Task 3: Toggle a Class
function check() {
  para.classList.toggle("highlight");
}

// Task 4: Check Class Exists
const checker = document.getElementById("checker");
checker.addEventListener("click", function () {
  if (para.classList.contains("highlight")) {
    alert("Class exits");
  } else {
    alert("Class not exits");
  }
});

// Task 5: Button Active State
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  btn.classList.add("active-btn");
});

// Task 6: Dark Mode (Industry Example)
let dark = document.getElementById("dark");
dark.addEventListener("click", () => {
  let Change = document.getElementById("change");
  Change.classList.add("dark-mode");
});
