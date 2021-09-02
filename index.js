function addingEventListener() {
  const input = document.getElementById("input");

  function clickAlert() {
    alert("I was clicked!");
  }

  input.addEventListener("click", clickAlert);
}

addingEventListener();

// function addingEventListener() {
//   document
//     .getElementById("button")
//     .addEventListener("click", () => alert("I was clicked!"));
// }
// addingEventListener()
