const sortBtn = document.querySelector(".sort");

const sortInputArray = (event) => {
  event.preventDefault();
  const inputValues = [...document.querySelectorAll(".values-dropdown")].map(
    (dropdown) => Number(dropdown.value) //use .map() to create an array of numbers from the input values
  );
  const sortedValues = inputValues.sort((a, b) => {
    return a - b;
  }); // use sort method to sort the newly-formed array into ascending order
  updateUI(sortedValues); // call updateUI to display sorted numbers in the output section
};

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  }); // update the output display with sorted values
};

sortBtn.addEventListener("click", sortInputArray);
