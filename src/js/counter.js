document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('counter').addEventListener("click", (e) => {
        let count = parseInt(e.target.innerText);
        count++;
        e.target.innerText = count.toString();
    });
});
