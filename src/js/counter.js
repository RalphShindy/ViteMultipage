import AOS from "aos";

document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById('counter');
    let full = document.getElementById('counter_full');
    let empty = document.getElementById('counter_empty');
    full.style.display = parseInt(counter.value) === 10 ? 'block': 'none';
    empty.style.display = parseInt(counter.value) === 0 ? 'block': 'none';

    document.querySelectorAll('.change-counter').forEach(element => {
        element.addEventListener("click", (e) => {

            let newVal = (parseInt(counter.value) + parseInt(e.currentTarget.getAttribute("data-counter")));

            counter.value = newVal < 0 ? 0 : newVal > 10 ? 10 : newVal;

            if(parseInt(counter.value) === 10){
                full.style.display = 'block';
            }else{
                full.style.display = 'none';
            }

            if(parseInt(counter.value) === 0){
                empty.style.display = 'block';
            }else{
                empty.style.display = 'none';
            }
        });
    });
});
