console.log("hello")
// the main array that eill be used, conating all the students
const students = [
  { 
    name: "Harry Potter",
    house: "Gryffindor"
  },
  { 
      name: "Hermione Granger",
      house: "Gryffindor"
  },
  { 
      name: "Ron Weasley",
      house: "Gryffindor"
  },
  { 
      name: "Ginny Weasley",
      house: "Gryffindor"
  },
  { 
      name: "Neville Longbottom",
      house: "Gryffindor"
  },
  { 
      name: "Luna Lovegood",
      house: "Ravenclaw"
  },
  { 
      name: "Cho Chang",
      house: "Ravenclaw"
  },
  { 
      name: "Padma Patil",
      house: "Ravenclaw"
  },
  { 
      name: "Terry Boot",
      house: "Ravenclaw"
  },
  { 
      name: "Draco Malfoy",
      house: "Slytherin"
  },
  { 
      name: "Pansy Parkinson",
      house: "Slytherin"
  },
  { 
      name: "Blaise Zabini",
      house: "Slytherin"
  },
  { 
      name: "Millicent Bulstrode",
      house: "Slytherin"
  },
  { 
      name: "Cedric Diggory",
      house: "Hufflepuff"
  },
  { 
      name: "Ernie Macmillan",
      house: "Hufflepuff"
  },
  { 
      name: "Hannah Abbott",
      house: "Hufflepuff"
  },
  { 
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

    for (const student of array){
      domString += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <span></span>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">${student.house}</p>
            <button type="button" class="btn btn-outline-danger">EXPEL</button>
          </div>
        </div>
      </div>
    </div>`;
    }
  renderToDom("#displayStudents",domString);
};

//starup function that will run through all hidden divIds and ensure they are set to the correct boolean 
// const startUp =()=> {
  document.querySelector("#welcome-card").hidden = false;
  
  document.querySelector("#new-student-form").hidden = true;

  document.querySelector("#btn-group").hidden = true;
// };

//calls the function using a 
// document.addEventListener("DOMContentLoaded",startUp);

//render formOnDom w/ event listener
document.querySelector('#beginSorting').addEventListener('click', ()=>{
  document.querySelector("#new-student-form").hidden = false;
});
// targeting the house btns on the dom
const showAll = document.querySelector("#all")
const showGryffindor = document.querySelector("#gryffindor")
const showHufflepuff = document.querySelector("#hufflepuff")
const showRavenclaw = document.querySelector("#ravenclaw")
const showSlytherin = document.querySelector("#slytherin")

// create event listener to each btn 
showGryffindor.addEventListener("click", (e)=>{

})

const buttonFilter = (event) => {
  if(event.target.id.includes('books')) {
    const gryffindorArray = referenceList.filter(item => item.type.toLocaleLowerCase === "book");
    renderCards(booksArray)
    console.log('books!')
}
}
cardsOnDom(students);
