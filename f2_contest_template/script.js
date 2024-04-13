/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
 arr.map(function(value,index){
  for(let t of arr){
    if(t.profession == "developer"){
      console.log(t.name);
    }
  }
 })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(value,index){
    for(let t of arr){
      if(t.profession == "developer"){
        console.log(t.name);
      }
    }
   })
}

function addData() {
  //Write your code here, just console.log
}

function removeAdmin(arr) {
  //Write your code here, just console.log
   for(let t of arr){
    if(t.profession == "admin"){
      arr.pop();
    }
   }
}

function concatenateArray() {
  //Write your code here, just console.log
}
