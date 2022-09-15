const redColor = document.querySelector(".red")
const blackColor = document.querySelector(".black")
const grayColor = document.getElementsByClassName("gray")[0]
const imageCard = document.querySelector(".product-image")
const feedbackBtn = document.querySelector(".feedback")
const cartButton = document.getElementById("button")
const itemTag = document.getElementsByTagName("h3")[0]

// Red circle click code
redColor.addEventListener("click", function() {
    cartButton.style.backgroundColor = "red"
    itemTag.style.color = "red"
    imageCard.style.backgroundImage = "url(./img/red-benz.webp)"
})

// Gray circle click code
grayColor.addEventListener("click", function() {
    cartButton.style.backgroundColor = "gray"
    itemTag.style.color = "gray"
    imageCard.style.backgroundImage = "url(./img/gray-benz.jpg)"
})

// Black circle click code
blackColor.addEventListener("click", function() {
    cartButton.style.backgroundColor = "black"
    itemTag.style.color = "white"
    imageCard.style.backgroundImage = "url(./img/black-benz.jpg)"
})

const cart = () => {
    cartButton.style.display = "none"
    feedbackBtn.style.display = "block"
}

cartButton.addEventListener("click", cart)



