document.querySelectorAll('.button').forEach(button => {
    button.addEventListener("click", () => {
        
        let btn_txt = button.textContent; // Get the text content of the clicked button
        console.log(btn_txt);
        document.querySelector(".display").innerHTML += btn_txt; // Append to the display
    });
});
document.querySelector(".equals").addEventListener("click", () => {
    const display = document.querySelector(".display");
    let expression = display.innerText.trim();
    display.innerText = eval(expression);
});
document.querySelector(".clear-button").addEventListener("click", () => {
    document.querySelector(".display").innerText = "";
})

document.querySelector(".backspace-button").addEventListener("click", () => {
    const display = document.querySelector(".display");
    let currentText = display.innerText;
    display.innerText = currentText.slice(0, -1);
});
