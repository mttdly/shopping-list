function addNewItem() {
  var item = document.getElementById("inputItemName").value;
  document.getElementById("data").innerHTML += "<tr><td>" + item + "</td><td>";
}

function addRandomItem() {
  document.getElementById("data").innerHTML +=
    "<tr><td>" + randItem[getRndInteger()] + "</td><td>";
}

const randItem = ["Fruit", "Yogurt", "Pizza"];

function getRndInteger() {
  return Math.floor(Math.random() * randItem.length);
}
