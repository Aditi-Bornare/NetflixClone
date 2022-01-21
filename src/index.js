// variables

// var name="hello devs";
// let name2="Hello let";
//Why two ways of declaring variables?

//What is the difference?

//Scope: Visibility
//Global Scope: Variable can be accessed anywhere in the program
//Local Scope: Can be accessed within some boundary, eg: Inside functions
//Bloak Scope: Independent Boundary, eg: Inside block

// var name="Elon Musk";   //Global Scope

// function sayName(){
//     var name="Pavan";   //Local Scope
//     console.log(name)
// }

// sayName();  //Pavan will be printed
// console.log(name)   //Elon Musk will be printed

// let myMarks=10; //global scope
// if(myMarks === 10){
//     let myMarks=30; //block scope
//     //for let it is not considered as redifinition
//     console.log(myMarks);   //we get output as 30
// } else{
//     console.log(myMarks);
// }
// console.log(myMarks);   //We get output as 10

// var myMarks=10; //global scope
// if(myMarks === 10){
//     var myMarks=30; //block scope
//     //Redifining so value changes everywhere
//     console.log(myMarks);   //we get output as 30
// } else{
//     console.log(myMarks);
// }
// console.log(myMarks);   //We get output as 30

//Constant: Value cannot be changed once defined

//Conditional Statments
//if else, else if 
//switch


//===: Is strict equal to
//It compares values as well as datatype
//"10"==10? True
//"10"===10? False
// let marks=20;

//if else
// if(marks===10){
//     console.log("Yay");
// } else{
//     console.log("Noooooooooo!");
// }

//if else if else
// if(marks===10){
//     console.log("Yay");
// } else if(marks===20){
//     console.log("Yayy true again!!");
// } else{
//     console.log("Noooooooooo!");
// }

//switch
// let marks=10;
// switch(marks){
//     case 10: {
//         console.log("Yayy");
//         break;
//     }   //Can also write without {}, but it makes code easier to read
    
//     case 38: {
//         console.log("Yayy 38");
//         break;
//     }
    
//     default:
//         console.log("None matched");
//         break;
// }

//Loops

//for loop

// for(let i=0; i<5;i++){
//     console.log(i);
// }

//while loop

// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }


//do while loop

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<5);

//FUNCTIONS

// function hello(){
//     console.log("hello");
// }

// hello();
//(): Run/Execute immediately

// function hello(name){   //parameter
//     console.log(name);
// }

// hello("Aditi"); //Argument

//arrow functions
//arrow function does not have access to 'this' keyword

//Use const for security, value cant be changed

// const sayname = (name) => {
//     console.log(name);
// };

// sayname("Adi")

// DOM Manipulation
//DOM: Document Object Model

// document.getElementById("heading").innerHTML="JavaScript DOM";
// document.querySelector(".parent").innerHTML="Hello Everyone"
//Using JS Code 

let accordian = document.getElementsByClassName("FAQ__title");
// accordian contains array of elements 

for (let i = 0; i< accordian.length; i++) {
    accordian[i].addEventListener("click", function() {
        
        // Toggles the plus and cross icon
        // childNodes[1] means first child element of button which is the icon 
        if(this.childNodes[1].classList.contains("fa-plus")){
            this.childNodes[1].classList.remove("fa-plus");
            this.childNodes[1].classList.add("fa-times");
        }
        else{
            this.childNodes[1].classList.remove("fa-times");
            this.childNodes[1].classList.add("fa-plus");
        
        }

        // nextSibling of button is div FAQ__visible 
        let content = this.nextElementSibling;
        // maxHeight will have a value when it is open 
        // so if it is open, on clicking on it we need it to close 
        // so we assign the maxHeight as null
        if(content.style.maxHeight){
            content.style.maxHeight=null;
        }
        // when it is not open, and is clicked, we assign some 
        // scrollHeight to maxHeight, i.e according to device that scrollheight 
        // will be assigned 
        else{
            content.style.maxHeight=content.scrollHeight + "px";
        }
    });
}