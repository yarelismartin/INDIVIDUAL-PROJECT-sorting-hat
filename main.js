// the main array that eill be used, conating all the students
const students = [
  { id: 1, name: "Harry", house: "Gryffindor" },
  { id: 2, name: "Hermione", house: "Gryffindor" },
  { id: 3, name: "Ron", house: "Gryffindor" },
  { id: 4, name: "Ginny", house: "Gryffindor" },
  { id: 5, name: "Neville", house: "Gryffindor" },
  { id: 6, name: "Luna", house: "Ravenclaw" },
  { id: 7, name: "Cho", house: "Ravenclaw" },
  { id: 8, name: "Padma", house: "Ravenclaw" },
  { id: 9, name: "Terry", house: "Ravenclaw" },
  { id: 10, name: "Draco", house: "Slytherin" },
  { id: 11, name: "Pansy", house: "Slytherin" },
  { id: 12, name: "Blaise", house: "Slytherin" },
  { id: 13, name: "Millicent", house: "Slytherin" },
  { id: 14, name: "Cedric", house: "Hufflepuff" },
  { id: 15, name: "Ernie", house: "Hufflepuff" },
  { id: 16, name: "Hannah", house: "Hufflepuff" },
  { id: 17, name: "Justin", house: "Hufflepuff" },
];

//renderToDom function expression
const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
};

// render cardsOnDom function expression
const cardsOnDom = (array) => {
  let domString = "";
  array.forEach((student) => {
    domString += `<div class="card mb-3" >
      <div class="row g-0 example">
        <div class="col-md-4" style="background-color: ${
          student.house === "Ravenclaw"
          ? "#0D6EFD"
          : student.house === "Gryffindor"
          ? "#DC3545" 
          : student.house === "Slytherin"
          ? "#198754" 
          : student.house === "Hufflepuff"
          ? "#FFC107" 
          : " "
        }">
          <div class="card-image-placeholder">
          </div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title card-name">${student.name}</h5>
            <p class="card-text">${student.house}</p>
            <button type="click" class="btn btn-outline-danger"  id="expel--${student.id}">EXPEL</button>
          </div>
        </div>
      </div>
    </div>`;
  });
  renderToDom("#displayStudents", domString);
};

//key
const sortBtn = document.querySelector("#sortingBtn");
const form = document.querySelector("form");
const btnGroup = document.querySelector("#btn-group");

//render FormOnDom
const formOnDom = () => {
  let domString = `
  <h5>Enter First Year's Name</h5>
  <div class="mb-3 form-center">
  <input type="text" class="form-control" id="name" placeholder="Name"
  required style="width:400px;">
  <button type="submit" class="btn btn-primary sorting-btn" id="sortingBtn" style="margin-left:20px;">Sort!</button>
  </div>`;
  renderToDom("#sortingForm", domString);
};

//render btnsOnDom
const btnsOnDom = () => {
  let domString = `
  <hr>
  <h5>Filter Students</h5>
  <div class="btn-flex">
  <button type="click" class="btn btn-secondary btn-filter" id="all">All</button>
  <button type="click" class="btn btn-danger btn-filter" id="gryffindor">Gryffindor</button>
  <button type="click" class="btn btn-warning btn-filter" id="hufflepuff">Hufflepuff</button>
  <button type="click" class="btn btn-primary btn-filter" id="ravenclaw">Ravenclaw</button>
  <button type="click" class="btn btn-success btn-filter" id="slytherin">Slytherin</button>
  </div>
  `;
  renderToDom("#btn-group", domString);
};

// array of names thatmath.random will select from from within the creatStudent function
const allHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

//create  a student function
const createStudent = () => {
  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector("#name").value,
    house: allHouses[Math.floor(Math.random() * allHouses.length)],
  };
  students.push(newStudentObj);
  students.sort((a,b) => a.name.localeCompare(b.name));
  cardsOnDom(students);
  form.reset();
  console.log("submitting");
};
//eventListener for the form btn by using click and submit
sortBtn.addEventListener("click", formOnDom);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createStudent();
  btnsOnDom();
  document.querySelector("#displayStudentsBorder").hidden = false;
  document.querySelector("#displayExpelledBorder").hidden = false;
});

const buttonFilter = (e) => {
  if (e.target.id.includes("gryffindor")) {
    const gryffindorArray = students.filter(
      (item) => item.house.toLocaleLowerCase() === "gryffindor"
    );
    cardsOnDom(gryffindorArray);
  }
  if (e.target.id.includes("hufflepuff")) {
    const hufflepuffArray = students.filter(
      (item) => item.house.toLocaleLowerCase() === "hufflepuff"
    );
    cardsOnDom(hufflepuffArray);
  }
  if (e.target.id.includes("ravenclaw")) {
    const ravenclawArray = students.filter(
      (item) => item.house.toLocaleLowerCase() === "ravenclaw"
    );
    cardsOnDom(ravenclawArray);
  }
  if (e.target.id.includes("slytherin")) {
    const slytherinArray = students.filter(
      (item) => item.house.toLocaleLowerCase() === "slytherin"
    );
    cardsOnDom(slytherinArray);
  }
  if (e.target.id.includes("all")) {
    cardsOnDom(students);
    ExpelCardsOnDom(expelledStudents);
  }
};

document.querySelector("#btn-group").addEventListener("click", buttonFilter);

const ExpelCardsOnDom = (array) => {
  let domString = "";
  array.forEach((student) => {
    domString += `<div class="card expeled-card" >
      <img src="https://pm1.aminoapps.com/6929/c50b896def25b54b11dfec725f9d8acac786ddfdr1-2044-1150v2_hq.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Sadly, <span style="color:red;">${student.name}</span> went over to the dark side! </p>
        <div  id="expel--${student.id}"></div>
      </div>
    </div>`;
  });
  renderToDom("#displayExpelled", domString);
};

//Expel a student
const displayStudent = document.querySelector("#displayStudents");
const expelledStudents = [];

displayStudent.addEventListener("click", (e) => {
  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");
    console.log(id);

    // Finding the Index of the Clicked Student in the students Array
    const index = students.findIndex((student) => student.id === Number(id));
    //Removing the Found Student from the students Array:
    const expelledStudent = students.splice(index, 1)[0];

    expelledStudents.push(expelledStudent);
    
    //create a new array containing only the students from the originaal array that have not been expelled using .filter
    const remainingStudents = students.filter(
      (student) => !expelledStudents.includes(student)
    );

    cardsOnDom(remainingStudents);
    // Rendering expelled students in a separate section of the DOM

    ExpelCardsOnDom(expelledStudents);
  }
});
