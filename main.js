const list = [
  "HTML 5",
  "CSS3",
  "Angular 2",
  "React",
  "Node.js",
  "Vue.js",
  "PHP",
  "JavaScript",
  "Bootstrap",
];

// Get Elements from DOM and store them in constants

const output = document.querySelector(".output");
const search = document.querySelector(".filter-input");
const sortBtn = document.querySelector('.sort-btn');
const icon = document.querySelector('.material-icons');


// Listen to User Event
window.addEventListener("DOMContentLoaded", loadList);
search.addEventListener("input", filter);
sortBtn.addEventListener("click", sortList);


// Global Vriables
let AssendingSort = false; 
let result;

// Loading Function
function loadList() {
  let temp = `<ul class="list-items">`;
  list.forEach((item) => {
    temp += `<li class="list-item"> ${item} </li>`;
  });
  temp += `</ul>`;
  output.innerHTML = temp;
}


function filter(e) {

    result  = list.filter(item=> item.toLowerCase().includes(e.target.value.toLowerCase()));
    let temp = `<ul class="list-items">`;
   
    if(result.length<=0){
      result=['No Item Found'];
    }
    result.forEach(item=>{
      if(item === 'No Item Found'){
        temp+=`<li class="no-item"> ${item}</li>`;
      }else{
        temp+=`<li class="list-item"> ${item}</li>`;
      }
    })
    
    temp+=`</ul>`

    output.innerHTML =temp;
}

// Sorting Function

function sortList(){
  let temp="";
  let sortedList;

  AssendingSort = !AssendingSort;

  if(AssendingSort){

    icon.textContent ="arrow_drop_down";
    sortedList = result.sort();
  }else{
    icon.textContent ="arrow_drop_up";
    sortedList = result.sort().reverse();
  }

  temp = `<ul class="list-items">`;
  sortedList.forEach((item) => {
    if(item === 'No Item Found'){
      temp+=`<li class="no-item"> ${item}</li>`;
    }else{
      temp+=`<li class="list-item"> ${item}</li>`;
    }
  });
  temp += `</ul>`;
  output.innerHTML = temp;


}

