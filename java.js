// Chapter no 1 (Alerts)

// Question no 1:

document.write('<br><br><h1>Chapter no 1 (Alerts)</h1>')

alert('Taha');

alert('Siddiqui');

alert('tahasiddiqui8200@gamil.com');

alert('03342066655');

alert('jawan@pakistan');

// Question no 2:

// Correct Statement:

alert(`"You're learning JavaScript!"`)

// Ouestion no 3:

alert('Pakistan Zindabad')

// Chapter no 2 (Variables for string)

// Question no 1:

var favouriteFruit='peach';

document.write('<h1>Chapter no 2 (Variables for string)</h1>')
document.write('<br><br>Question no 1: '+ favouriteFruit)

// Question no 2:

var lifeLesson;

lifeLesson='Honesty is the best policy';

document.write('<br><br>Question no 2: '+ lifeLesson)

// Question no 3:

var teamName='Jawan Pakistan';

document.write('<br><br>Question no 3: '+ teamName)

alert(teamName);

// Question no 4:

var bestMan='Charlie';

bestMan='Imran Khan';

document.write('<br><br>Question no 4: '+ bestMan)

document.write('<h1>Chapter no 3 (Variables for numbers)</h1>')

// Question no 1:

var caseOty;

// Question no 2:

caseOty=144;

// Question no 3:

var num=9;

// Question no 4:

var sum;

sum=caseOty+num;

document.write('<br><br>Question no 4: '+ sum)

// Question no 5:

var merchTotal=100;
var shippingCharges=10;
var orderTotal=merchTotal+shippingCharges;

document.write('<br><br>Question no 5: '+ orderTotal)

// Question no 6:

var randomNum=10;

newNum=randomNum+45;

document.write('<br><br>Question no 4: '+ newNum)

document.write('<h1>Chapter no 4 (Variables names legal & illegal)</h1>')

// Question no 1:

var productCost= 3.45;

document.write('<br><br>Question no 1: '+ productCost)

// Question no 2:

var NameOfBand;

// Question no 3:

var leagalVariable=67;

// Question no 4:

var MyFullName='Taha Siddiqui';

document.write('<h1>Chapter no 5 (Maths Expression 1)</h1>')

// Question no 1:

document.write('<br><br>Question no 1: '+ '%')

// Question no 2:

var num2=20%6;

document.write('<br><br>Question no 2: '+ num2)

// Question no 3:

var smallNum1=1000;
var smallNum2=2000;
var largeNum=smallNum1*smallNum2;

// Question no 4:

var subNum1=10;
var subNum2=65;

var sub=subNum2-subNum1;
document.write('<br><br>Question no 4: '+ sub)

// Question no 5:

var remNum1=10;
var remNum2=65;

var reminder=subNum2%subNum1;
document.write('<br><br>Question no 5: '+ reminder)

// Question no 6:

alert('The Multiplication of two numbers: '+(2*4))

document.write('<h1>Chapter no 6 (Maths Expression 2)</h1>')

// Question no 1:

var x=10;
x++;

document.write('<br><br>Question no 1: '+ x)

// Question no 2:

var x=100;
x--;

document.write('<br><br>Question no 1: '+ x)


// Question no 3:

var x=50;
var y=x++;

document.write('<br><br>Question no 1: '+ y)


// Question no 4:

var y=50;
var z=--y;

document.write('<br><br>Question no 1: '+ z)


// Question no 5:

var num = 5;
var newNum = num--;  // Decrement num and assign its original value to newNum

document.write('<br><br>Question no 5: '+ newNum)// Outputs the original value of num (5)
document.write('<br><br>'+ num)

// Question no 6:

var num = 15;
var newNum = num++;  // Decrement num and assign its original value to newNum

document.write('<br><br>Question no 5: '+ newNum)// Outputs the original value of num (5)
document.write('<br><br>'+ num)

// Question no 7:

var number=68;
number++;

alert('The value is: '+number)


document.write('<h1>Chapter no 7 (Maths Expression 3)</h1>')

// Question no 1:

var calculateNum=2+(2*6);
document.write('<br><br>Question no 1: '+ calculateNum)

// Question no 2:

var calculateNum=(2+2)*6;
document.write('<br><br>Question no 2: '+ calculateNum)

// Question no 3:

var calculateNum=(2+2)*(4+2);
document.write('<br><br>Question no 3: '+ calculateNum)

// Question no 4:

var calculateNum=((2+2)*4)+2;
document.write('<br><br>Question no 4: '+ calculateNum)

// Question no 5:

var cost=(2+2)*(4+10);
document.write('<br><br>Question no 5: '+ cost)

// Question no 6:

var units=2+(2*4)+10;
document.write('<br><br>Question no 6: '+ units)

// Question no 7:

var pressure=4/2*4;
document.write('<br><br>Question no 7: '+ pressure)

document.write('<h1>Chapter no 8 (Concatinating Text Strings)</h1>')

// Question no 1:

var num = "2"+"2";
document.write('<br><br>Question no 1: '+ num)


// Question no 2:

var message = "Hello, "+"Dolly";
document.write('<br><br>Question no 2: '+ message)


// Question no 3:

alert('33'+3);

// Question no 4:

alert('Pakistan'+'Zindabad');

// Question no 5:

var onePart='Pakistan ';
var secondPart=onePart+1;

document.write('<br><br>Question no 5: '+ secondPart)

// Question no 6:

var firtName='Taha';
var lastName='Siddiqui';
var fullName=firtName+lastName;

document.write('<br><br>Question no 6: '+ fullName)

document.write('<h1>Chapter no 9 (Prompts)</h1>')

// Question no 1:

var pFirstName=prompt('Enter first name: ');

// Question no 2:

var country=prompt('country','China');

// Question no 3:

var yourName=prompt('Enter your name');

// Question no 4:

var yourNationality=prompt('Enter your nationality','pakistani');

// Question no 5:

var favouriteCarBrand='Enter your favourite car brand';
var car='Rolls Royce';
var userFavCar=prompt(favouriteCarBrand,car);

// Question no 6:

var yourUniversity=prompt('Enter your University name','Baharia University')
alert(yourUniversity);

document.write('<h1>Chapter no 10 (if Statement)</h1>')

// Question no 1:

var city='karachi'

if(city==='karachi'){
    console.log('The City Of Lights');
}

// Question no 2:

var x=2;
var y=2;

if (x === y) {
    var z = prompt("Please enter the value of z:");
    console.log("The value of z is:", z); 
}

// Question no 3:

var zipCode=10010
if (zipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

// Question no 3:

var x=3;
if(x===3){
    x=1
}

console.log(x);

document.write('<h1>Chapter no 11 (Comparion Operator)</h1>')

// Question no 1:

var a=10;
var b=20;

if(a!=b){
    console.log('Both values are unequal');
}

// Question no 2:

var a=10;
var b=20;

if(a>=b){
    console.log('a is greater than b');
}

// Question no 3:

var c=50;

if(a!=100){
    c=100;
}

// Question no 4:

var c=50;

if(a!=100){
    alert('Congratulations')
}

// Question no 5:

var myName='Taha';
var userName=prompt('Enter your first name')
if(userName!=myName){
    alert('No Match')
}

document.write('<h1>Chapter no 12 (if-else and else-if statements)</h1>')

// Question no 1:

var x=10;
var y=20;

if(x>=y){
    alert('x is greater than y');
}
else if(x<=y) {
    alert('y is greater than x');
}

// Question no 2:

var marks=89;

if(marks>=80){
    console.log('Your grade is A+');
}
else if(marks<80&&marks>=70) {
    console.log('Your grade is A');
}
else if(marks<70&&marks>=60) {
    console.log('Your grade is B');
}
else if(marks<60&&marks>=50) {
    console.log('Your grade is C');
}
else{
    console.log('Try next time your fail');
}

// Question no 3:

var a=6;

if(a===10){
    alert('a is 10')
}
else{
    alert('The value of a is'+a)
}

// Question no 4:

var city='karachi';

if(city=='karachi'){
    console.log('Your are in karachi rightnow');
}
else if(city=='lahore') {
    console.log('Your are in lahore rightnow');
}
else{
    console.log('Unknown City');
}

document.write('<h1>Chapter no 13 (Testing set of conditions)</h1>')

// Question no 1:

var a=10;
var b=10;
var c=5;
var d=5;

if(a===b&&c===d){
    console.log('True');
}
else{
    console.log('false');
}

// Question no 2:

var a=10;
var b=10;
var c=5;
var d=7;

if(a===b||c===d){
    console.log('True');
}
else{
    console.log('false');
}

// Question no 3:

var personName='Arsalan';
var age=40

if(personName==='Hamza'||personName==='Arsalan'&& age<60){
    console.log('verified');
}
else{
    console.log('unverified');
}

// Question no 4:

var x=10;
var y=20;

if(x<y){
    alert('x is less than y');
}
else if(x>y){
    alert('x is greater than y');
}

// Question no 5:

var firstName='Taha';
var lastName='Siddiqui';

var userFirstName=prompt('Enter first name');
var userLastName=prompt('Enter last name');

if(firstName==userFirstName&&lastName==userLastName){
    alert('Both name are same');
}
else{
    alert('sorry different names');
}

document.write('<h1>Chapter no 14 (If statement nested)</h1>')

// Question no 1:

var password=7;

if(password!=''){
    if(password<5){
        alert('Password must be greater than 5')
    }
    else
    alert('OK')
}

// Question no 2:

var a=1;
var c='Max'

if (a===1){
    if (c==="Max") {
    alert("OK");
    }
}

// Question no 3:

var a=1;
var c='Max'

if (a === 1 && c==='Max'){
    alert("OK");
}

// Question no 4:

var x=10;
var y=10;

if(x==y){
    if(x<=y){
        alert('x is less than y');
    }
}

document.write('<h1>Chapter no 15 (Array 1)</h1>')

// Question no 1:

var array=[];

// Question no 2:

var array=['Pakistan'];

// Question no 3:

var alaphabet=['h','i','j','k'];

alert(alaphabet[2]);

// Question no 4:

var alaphabet=['h','i','j','k','l','m','n','o'];

alert('Total length '+ alaphabet.length);

// Question no 5:

var fruits=['peach'];

fruits[1]=['orange'];

alert(fruits[1]);

document.write('<h1>Chapter no 16 (Array 2)</h1>')

// Question no 1:

var arr=['Pakistan'];
arr.push('Canada');

alert(arr[1]);

// Question no 2:

var alaphabet=['h','i','j','k'];

alaphabet.pop()

console.log(alaphabet);

// Question no 3:

var alaphabet=['h','i','j','k'];

alaphabet.push(4)

console.log(alaphabet);

document.write('<h1>Chapter no 16 (Array 3)</h1>')

// Question no 1:

var sizes=['S','M','XL','XXL','XXXL'];

sizes.shift()

console.log(sizes);

// Question no 2:

var sizes=['S','M','XL','XXL','XXXL'];

sizes.unshift('2','3','4')

console.log(sizes);

// Question no 3:

var cars=['Rolls Royce'];

cars.unshift('Bently')

console.log(cars);

// Question no 4:

var sizes=['S','M','XL','XXL','XXXL'];

sizes.splice(2,0,'L')

console.log(sizes);

// Question no 5:

var sizes=['S','M','XL','XXL','XXXL'];

var newSizes=sizes.slice(0,3)

console.log(newSizes);

// Question no 6:

var pets=['dog','cat','ox','duck','frog'];

pets.splice(1,3,'loin','bear')

console.log(pets);

// Question no 7:

var pets=['dog','cat','ox','duck','frog'];

pets.splice(1,2)

console.log(pets);

// Question no 8:

var pets=['dog','cat','ox','duck','frog','flea'];

var newPets=pets.slice(3,5)

console.log(newPets);

document.write('<h1>Chapter no 17-20 (for loops)</h1>')

// Question no 1:

for(let i=1;i<=10;i++){
    console.log(i);
};

// Question no 2:

for(let i=0;i<=11;i++){
    console.log(i);
};

// Question no 3:

for(var i=0;i<=4;i++){
    console.log(i);
};

// Question no 4:

for(var no=0;no<100;no++){
    console.log(no);
};

// Question no 5:

for(var i=3;i<0;i--){
    console.log(i);
};

// Question no 6:

var bestCars=['Rolls Royce','Bently','Mercedes']
var length=bestCars.length;

// Question no 7:

var flag=true;

// Question no 8:

var pets=['dog','cat','ox','duck','frog','flea'];

for (let i = 0; i < pets.length; i++);

// Question no 9:

for(let i=0;i<=10;i++){
    if(i==1){
        alert('It should be 1');
        break;
    }
};

// Question no 10:

var userNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
var firstName = prompt("Enter first name");
var userFound = false; 

for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] === firstName) {
        alert("Enter");
        userFound = true; 
        break;
    }
}

if (!userFound) {
    alert("Please write correct user name");
}

// Question no 11:

var matchFound = false; 
var list = ["Alice", "Bob", "Charlie", "David", "Eve"];
var userInput = prompt("Enter first name");

for (var i = 0; i < list.length; i++) { 
    if (userInput === list[i]) { 
        alert("Match found"); 
        matchFound = true; 
        break; 
    } 
}

if (!matchFound) { 
    alert("Please write correct user name"); 
}

// Question no 12:

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) { 
        var concatenated = firstArr[i] + secondArr[j]; 
        console.log(concatenated);
    }
}