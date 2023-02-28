
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputbtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deletebtn = document.getElementById("delete-btn");
const tabbtn = document.getElementById("tab-btn");

const getValueFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(getValueFromLocalStorage){
     myLeads = getValueFromLocalStorage;
     render(myLeads);
}

function render(leads){
     let listItems = "";
     for(let i=0;i<leads.length;i++){
         listItems += `
         <li> 
              <a target = '_blank' href='${leads[i]}'>
              ${leads[i]}
              </a>
              
         </li>`;
         // const li = document.createElement("li");
         // li.textContent = myLeads[i];
         // ulEl.append(li);
     }
     ulEl.innerHTML = listItems;
     }


     inputbtn.addEventListener("click", function(){
          myLeads.push(inputEl.value);
          inputEl.value = '';
         
          localStorage.setItem("myLeads", JSON.stringify(myLeads));
          render(myLeads);
          console.log(localStorage.getItem("myLeads"));
     })

     
tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active: true , currentWindow: true} , function(tabs){
       myLeads.push(tabs[0].url);
     localStorage.setItem("myLeads",JSON.stringify(myLeads))
     render(myLeads);
    })

    
})


deletebtn.addEventListener("dblclick",function(){
     localStorage.clear();
     myLeads = [];
     render(myLeads);
})





