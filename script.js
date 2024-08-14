const sortBtn = document.querySelector(".sort");

const sortInputArray = (event) => {
  event.preventDefault();
  const inputValues = [...document.querySelectorAll(".values-dropdown")].map(
    (dropdown) => Number(dropdown.value)
  );
  const sortedValues = inputValues.sort((a, b) => {
    return a - b;
  });
  updateUI(sortedValues);
};

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

sortBtn.addEventListener("click", sortInputArray);
