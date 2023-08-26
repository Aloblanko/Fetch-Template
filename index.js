const fetchButton = document.getElementById("fetchButton");
const responseContainer = document.getElementById("responseContainer");

async function fetchData() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    const data = await response.json();

    const newImage = document.createElement("img");
    newImage.src = data.message;
    newImage.classList.add("dog-image"); // Add a class to the image
    responseContainer.innerText = "";

    responseContainer.appendChild(newImage);
  } catch (error) {
    console.error("Fehler bei der API-Anfrage:", error);
  }
}

fetchButton.addEventListener("click", fetchData);
