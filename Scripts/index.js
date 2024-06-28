


const pending_button = document.getElementsByClassName("pending-button");
const completed_button = document.getElementsByClassName("completed-button");
const past_due_button = document.getElementsByClassName("past-due-button");
const add_task = document.getElementsByClassName("add-task");
const change_user = document.getElementsByClassName("change-user");
const complete_task_button = document.getElementsByClassName("complete");
const description = document.getElementsByClassName("description-add");

const pending_container = document.getElementsByClassName("pending-container");
const completed_container = document.getElementsByClassName("completed-container");
const due_date_container = document.getElementsByClassName("past-due-container");



const no_display = "no-display";
const active = "active";
const users = ["James", "John", "Katy", "Bella", "Ricky"];

let i = 0;








pending_button[0].addEventListener("click", function () {
    pending_container[0].classList.remove(no_display);
    completed_container[0].classList.add(no_display);
    due_date_container[0].classList.add(no_display);
    pending_button[0].classList.add(active);
    completed_button[0].classList.remove(active);
    past_due_button[0].classList.remove(active);

});

completed_button[0].addEventListener("click", function () {
    pending_container[0].classList.add(no_display);
    completed_container[0].classList.remove(no_display);
    due_date_container[0].classList.add(no_display);
    pending_button[0].classList.remove(active);
    completed_button[0].classList.add(active);
    past_due_button[0].classList.remove(active);
});
past_due_button[0].addEventListener("click", function () {
    pending_container[0].classList.add(no_display);
    completed_container[0].classList.add(no_display);
    due_date_container[0].classList.remove(no_display);
    pending_button[0].classList.remove(active);
    completed_button[0].classList.remove(active);
    past_due_button[0].classList.add(active);
});



var date1 = new Date(Date.now());
console.log(date1);



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    let comp = document.getElementById(data)
    completed_container[0].appendChild(comp);
  comp.draggable = false;
  comp.classList.remove("pending");
  comp.classList.add("completed");
}


/* I Used the following code from 
https: //webdesign.tutsplus.com/learn-how-to-code-a-simple-javascript-calendar-and-datepicker--cms-108322t
to use and see how a calender is created using html css and js*/


let display = document.querySelector(".display");
let days = document.querySelector(".days");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");
let selected = document.querySelector(".selected");

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

let due_date = '';

function displayCalendar() {
  const firstDay = new Date(year, month, 1);

  const lastDay = new Date(year, month + 1, 0);

  const firstDayIndex = firstDay.getDay(); //4

  const numberOfDays = lastDay.getDate(); //31

  let formattedDate = date.toLocaleString("en-US", {
      month: "numeric",
    year: "numeric"
  });

  display.innerHTML = `${formattedDate}`;

  for (let x = 1; x <= firstDayIndex; x++) {
    const div = document.createElement("div");
    div.innerHTML += "";

    days.appendChild(div);
  }

  for (let i = 1; i <= numberOfDays; i++) {
    let div = document.createElement("div");
    let currentDate = new Date(year, month, i);

    //div.dataset.date = currentDate.toDateString();
      div.dataset.date = i+"/"+formattedDate.toString();
      div.innerHTML += i;
      div.setAttribute("onclick", "lolo(event)");
    days.appendChild(div);
    if (
      currentDate.getFullYear() === new Date().getFullYear() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getDate() === new Date().getDate()
    ) {
      div.classList.add("current-date");
      }
      
  }
}

// Call the function to display the calendar
displayCalendar();

previous.addEventListener("click", () => {
  days.innerHTML = "";
  selected.innerHTML = "";

  if (month < 0) {
    month = 11;
    year = year - 1;
  }

  month = month - 1;

  date.setMonth(month);

  displayCalendar();
  displaySelected();
});

next.addEventListener("click", () => {
  days.innerHTML = "";
  selected.innerHTML = "";

  if (month > 11) {
    month = 0;
    year = year + 1;
  }

  month = month + 1;
  date.setMonth(month);

  displayCalendar();
  displaySelected();
});






function displaySelected() {
  const dayElements = document.querySelectorAll(".days div");
  dayElements.forEach((day) => {
    day.addEventListener("click", (e) => {
        const selectedDate = e.target.dataset.date;
        
        due_date = `Due ${selectedDate}`;
    });
  });
}
displaySelected();

counterJ = 1;
let j = users[counterJ++];
console.log(j);
change_user[0].addEventListener("click", function () {
  namee = document.getElementsByClassName("user");
  namee[0].innerText = j;

  for (let k = 0; k < i; k++) {
    let cur = document.getElementById("drag" + k);
    
    if (cur.classList.contains(j)) {
      cur.classList.remove(no_display);
    }
    else {
      cur.classList.add(no_display);
    }
  }
  j = users[counterJ++];
  
  if (counterJ == users.length) {
    counterJ = 0;
  }
  
  for (let k = 0; k < i; k++) {
    let cur = document.getElementById("drag" + k);
    let date1 = new Date(Date.now())
    let date2 = new Date(cur.dataset.date);
    if (date1<date2) {
      const newParent = document.querySelector('.past-due-container');
      newParent.appendChild(cur);
    }
    
  }
});





function lolo(e) {
    due_date_raw = e.target.dataset.date
    due_date = "Due "+e.target.dataset.date;
}


add_task[0].addEventListener("click", function (e) {
  
  if (due_date == "" || description[0].value == "") {
    alert("Date or description are required!");
  }
  else {

        pending_container[0].innerHTML += '<div class="task pending ' + users[counterJ-2] + '" id="drag' + i + '" draggable="true" ondragstart="drag(event)" data-date="'+due_date_raw+'"><div class="task-number"><h1>Task ' + i + '</h1></div><div class="due-date">' + due_date + '</div><div class="description">' + description[0].value + '</div></div>';
        i++
  }
  due_date = '';
  description[0].value = '';
});