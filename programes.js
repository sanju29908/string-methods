// // // print hello world
//  console.log("HELLO WORLD");

// // ADD TWO NUMBERS
// var a = 10
// var b = 20
// var c = (a+b)
// console.log(c);

// function add(a,b){
//     console.log(a+b);
    
// }add(10,30)

// function add(a,b){
//     return(a%b)
// }
// console.log(add(10,20));


// //sqare root

// var a = 55
// var result =Math.sqrt(a)
// console.log(result);

// var a = 59
// var result = Math.sqrt(a)
// console.log(result);


// //area of triangle

// var areavalue = (4*10)/2;
// console.log(areavalue);

// // swap two variables

// var a= 2
// var b= 3
// var c=a
// a=b
// b=a
// console.log(a,b);

// var random = Math.random()*1000
// console.log(random);

// var myStr = random.toString()
// if(myStr.length==5){
//     console.log(myStr);
// }

// var myStr = random.toString()
// if(myStr.length==6){
//     console.log(myStr);
// }
// var celcius = 40
// var forienhight = celcius * 1.8 +43
// console.log(forienhight);

// var kilometres = 60
// var miles = kilometres +0.621371
// console.log(Math.floor(miles));

// var kilometres = 60
// var miles = kilometres +0.621371
// console.log(miles);

// var myDate = new Date()
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

var a =10
var b =30
var c =40
var d = b*b-4*a*c
var root1;
var root2;
if(d>0){
    root1 = (-b+Math.sqrt(d))/2*a
    root2 = (-b-Math.sqrt(d))/2*a
    console.log(root1,root2);
}else if(d ==0){
    root1 = root2 = -b/2*a
    console.log(root1,root2);
}else{
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(d)/(2*a)).toFixed(2);
    console.log(realPart,imagPart);
}
    











