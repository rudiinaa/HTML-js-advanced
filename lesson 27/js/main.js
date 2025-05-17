function showMessage(){
    alert("this message is inside the function");
}
function showMessagetwo(){
    console.log("hello there");
}
showMessagetwo()
showMessage()

function mbledhje(number1,number2){
    return number1 + number2
}

console.log(mbledhje(100,3))

function toCelcius(f){
    return (5/9)* (f-32);
}
console.log("60 fahrenheit is equal to "+ toCelcius(60)+"celcius")

 function toSeconds(minutes){
    return minutes *60
 }
 console.log ("shendrrimi i minutave ne sekonda" +toSeconds(5))

 function triangleArea(baseLengthe,height){
    return 0.5 *baseLengthe*height
 }
 console.log(triangleArea(5,7))

 function pjestim(number1,number2){
    return number1 / number2
 }
 console.log(pjestim(90,3))

 function shumezim(number1,number2){
    return number1 * number2
 }
 console.log(shumezim(40,15))

 var car= {
    name:"bmw",
    year:2024,
    color:"black",
    kilometres:0,

    startEngine:Function(){
        alert("vrooomm")
    },

    get getKilometra(){
        return this.kilometres
    },
    get getName(){
        return this.name
    },
 }
console.log(car.getName)
console.log(car.getKilometra)

alert(car.name)
alert(car.year)

var computer = new Object();

computer.name="lenovo"
computer.CPU="intel core i7"
computer.RAM="16G"

computer.type=function(){
    return this.name+ "," this.CPU + "," + this.RAM;
}
alert(computer.type())

function Computer(name, CPU, RAM){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
}
var computer1=new Computer("Mac book pro","m1 8 core","8gb")
var computer2=new Computer("Lenovo book pro","m1 8 core","8gb")

console.log(computer1.name)
 
