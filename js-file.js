const container = document.querySelector(".container");
const reset = document.querySelector("button");


reset.addEventListener("click", (event) => resetDimension(changeLength()));

for (let i = 0; i < 16*16; i++) {
    container.appendChild(document.createElement("div"));
}

let boxes = document.querySelectorAll(".container div")

changePallete();

function changeLength() {
    let length = -1;
    while (true) {
        length = Number(prompt("Enter length (1-100)", 1));
        if (length > 0 && length <= 100) {
            break;
        }
    }
    return length;
}

function changePallete() {
    boxes.forEach((box) => {
    box.addEventListener("click", (event) => {
        box.style["background-color"] = "red";
    });
    box.addEventListener("mouseenter", (event) => {
        box.style.backgroundColor = "green";
    });
})
}

function resetDimension(dimension) {
    boxes.forEach((box) => {
        container.removeChild(box);
    })

    for (let i = 0; i < dimension*dimension; i++) {
        container.appendChild(document.createElement("div"));
    }

    boxes = document.querySelectorAll(".container div")
    boxes.forEach((box) => {
        box.style.width = 800/dimension + "px";
        box.style.height = 800/dimension + "px";
        box.style.backgroundColor = "aqua";
    })

    changePallete();

}

