///Normal Function
document.write(Add(10,3) + "<br>"); // function hoisting
function Add(a,b) {
    return a + b;
}

document.write(Add(2,3) + "<br>");
let Add2 = function(a,b) {
    return a + b;
}
document.write(Add2(10,3) + "<br>");
// Arrow Function
let Add3 = (a,b) => a + b;

document.write(Add3(10,3) + "<br>");
let sub=(a,b) => {return a - b};
document.write(`${sub(10,3)}<br>`);
async function getData() {
    const getData = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await getData.json();
console.log(data.title + "<br>");  
}
getData().then(() => {
    console.log("Data fetched successfully");
});
getData().catch((error) => { 
    console.error("Error fetching data:", error);
})
function  usernameList(id,...names){
for (let i = 0; i < names.length; i++) {
    document.write(`User ID: ${id}, Name: ${names[i]}<br>`);

}}
usernameList(1,"John","Doe","Smith");
(function(){
document.write("IIFE called<br>");
}());
let Person={
    name : "MIhir",
    age : 30,
    greet : function(){
        return "Hello, my name is " + this.name;
    }
}
document.write(Person.greet() + "<br>");