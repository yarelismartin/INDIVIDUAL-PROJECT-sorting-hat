console.log("hello")
// the main array that eill be used, conating all the students
const students = [
  { id: 1,
    name: "Harry Potter",
    house: "Gryffindor"
  },
  {   id: 2,
      name: "Hermione Granger",
      house: "Gryffindor"
  },
  {   id: 3,
      name: "Ron Weasley",
      house: "Gryffindor"
  },
  {   id: 4,
      name: "Ginny Weasley",
      house: "Gryffindor"
  },
  {   id: 5,
      name: "Neville Longbottom",
      house: "Gryffindor"
  },
  {   id: 6,
      name: "Luna Lovegood",
      house: "Ravenclaw"
  },
  {   id: 7,
      name: "Cho Chang",
      house: "Ravenclaw"
  },
  {   id: 8,
      name: "Padma Patil",
      house: "Ravenclaw"
  },
  {   id: 9,
      name: "Terry Boot",
      house: "Ravenclaw"
  },
  {   id: 10,
      name: "Draco Malfoy",
      house: "Slytherin"
  },
  {   id: 11,
      name: "Pansy Parkinson",
      house: "Slytherin"
  },
  {   id: 12,
      name: "Blaise Zabini",
      house: "Slytherin"
  },
  {   id: 13,
      name: "Millicent Bulstrode",
      house: "Slytherin"
  },
  {   id: 14,
      name: "Cedric Diggory",
      house: "Hufflepuff"
  },
  {   id: 15,
      name: "Ernie Macmillan",
      house: "Hufflepuff"
  },
  {   id: 16,
      name: "Hannah Abbott",
      house: "Hufflepuff"
  },
  {   id: 17,
      name: "Justin Finch-Fletchley",
      house: "Hufflepuff"
  },
  ];

//renderToDom function expression
const renderToDom = (divId, html)=>{
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
}

// render cardsOnDom function expression
const cardsOnDom =(array) => {
  let domString = "";
    array.forEach((student)=> {
      domString += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <span></span>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">${student.house}</p>
            <button type="click" class="btn btn-outline-danger"  id="expel--${student.id}">EXPEL</button>
          </div>
        </div>
      </div>
    </div>`
    });
  renderToDom("#displayStudents",domString);
};

//will run through all hidden divIds and ensure they are set to the correct boolean 
  document.querySelector("#welcome-card").hidden = false;
  document.querySelector("#new-student-form").hidden = true;
  document.querySelector("#btn-group").hidden = true;
  document.querySelector("#displayExpelled").hidden = true;

//render formOnDom w/ event listener
document.querySelector('#beginSorting').addEventListener('click', ()=>{
  document.querySelector("#new-student-form").hidden = false;
  
});

// array of names thatmath.random will select from from within the creatStudent function
const allHouses = [
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
]

//create  a student function
const createStudent =() =>{
  const newStudentObj ={
    id: students.length + 1,
    name: document.querySelector("#name").value,
    house: allHouses[Math.floor(Math.random()*allHouses.length)]
  };
    students.unshift(newStudentObj);
    cardsOnDom(students)
    sortingForm.reset();
};


//Event listener for the sort btn. opens up cards and btns and calls the createStudent function
document.querySelector("#sortingForm").addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log("submitting")
  document.querySelector("#btn-group").hidden = false;
  document.querySelector("#displayStudents").hidden = false;
  document.querySelector("#displayExpelled").hidden = false;
  createStudent();
})

// targeting the house btns on the dom
const showAll = document.querySelector("#all")
const showGryffindor = document.querySelector("#gryffindor")
const showHufflepuff = document.querySelector("#hufflepuff")
const showRavenclaw = document.querySelector("#ravenclaw")
const showSlytherin = document.querySelector("#slytherin")



const buttonFilter = (e)=>{
  if(e.target.id.includes("gryffindor")){
    const gryffindorArray = students.filter(item => item.house.toLocaleLowerCase() === "gryffindor");
    cardsOnDom(gryffindorArray)
  }
  if(e.target.id.includes("hufflepuff")){
    const hufflepuffArray = students.filter(item => item.house.toLocaleLowerCase() === "hufflepuff");
    cardsOnDom(hufflepuffArray)
  }
  if(e.target.id.includes("ravenclaw")){
    const ravenclawArray = students.filter(item => item.house.toLocaleLowerCase() === "ravenclaw");
    cardsOnDom(ravenclawArray)
  }
  if(e.target.id.includes("slytherin")){
    const slytherinArray = students.filter(item => item.house.toLocaleLowerCase() === "slytherin");
    cardsOnDom(slytherinArray)
  }
  if(e.target.id.includes("all")){
    cardsOnDom(students);
    ExpelCardsOnDom(expelledStudents);
  }
}
document.querySelector("#btn-group").addEventListener('click', buttonFilter);

const ExpelCardsOnDom =(array) => {
  let domString = "";
    array.forEach((student)=> {
      domString += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <span></span>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">${student.house}</p>
          </div>
        </div>
      </div>
    </div>`
    });
  renderToDom("#displayExpelled",domString);
};
//Expel a student
const displayStudent = document.querySelector("#displayStudents")
const expelledStudents =[]

displayStudent.addEventListener("click", (e) =>{
  if(e.target.id.includes("expel")){
    const [ ,id] = e.target.id.split("--");
    console.log(id)

    // Finding the Index of the Clicked Student in the students Array
    const index = students.findIndex((student) => student.id === Number(id));
    //Removing the Found Student from the students Array:
    const expelledStudent = students.splice(index, 1)[0];

    expelledStudents.push(expelledStudent)
    
    //create a new array containing onlt the students from the originaal array that have not been expelled using .filter  
    const remainingStudents = students.filter((student)=> !expelledStudents.includes(student))

    cardsOnDom(remainingStudents)
    // Rendering expelled students in a separate section of the DOM
    
    ExpelCardsOnDom(expelledStudents);
    
    
  }
});


cardsOnDom(students);
