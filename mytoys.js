let hours = document.getElementById("hours");
let salary = document.getElementById("salary");
let workHours = null;
let timeBreak = null;

let button = document.getElementById("next").addEventListener("click", count);

function count () {
    if ((hours.value > 6) && (hours.value <= 9)) {
        timeBreak = ("45 min");
        workHours = hours.value - 0.75;
    } else if (hours.value > 9) {
        timeBreak = "60 min";
        workHours = hours.value - 1;
    } else {
        timeBreak = 0;
        workHours = hours.value
    }
    let p = document.getElementById("news");
    let fieldset = document.createElement("fieldset");
    fieldset.innerHTML = `${workHours} godzin pracy, <br>
    ${timeBreak} przerwy`;
    p.prepend(fieldset);
    
    let article = document.getElementById("article");
    let section = document.createElement("section");
    section.innerHTML = salary.value * workHours + " € brutto <br>" + salary.value * workHours * 0.73 + " € netto. <br>" + (salary.value * workHours * 0.73 * 4.7).toFixed(2) + " zł netto"
    article.prepend(section);
    article.classList.add
}
