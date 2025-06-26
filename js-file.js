const container = document.querySelector(".container");

for (let i = 0; i < 16*16; i++) {
    container.appendChild(document.createElement("div"));
}

const boxes = document.querySelectorAll(".container div")

boxes.forEach((box) => {
    box.addEventListener("click", (event) => {
        box.style["background-color"] = "red";
    });
    box.addEventListener("mouseenter", (event) => {
        box.style.backgroundColor = "green";
    });
})


