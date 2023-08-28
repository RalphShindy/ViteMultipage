document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('counter').addEventListener("click", (e) => {
        e.target.innerText = (parseInt(e.target.innerText) + 1);
    });
});
