let myDate = new Date();
myDate.setDate(myDate.getDate()-100);

myDate.setHours(myDate.getHours()-2400);

myDate = new Date("Jan 1 2020 10:55");

myDate = new Date("05.06.07");
myDate = new Date("05/06/07");
myDate = new Date("05,06,07");

myDate = new Date(2021, 11, 17, 13, 22, 45, 1)

// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());

// const myYear = prompt("Enter year");
// const proDate = new Date(myYear, 0, 256);
console.log(new Date(prompt("Enter year"), 0, 0xFF+1));

console.log(0x22);
console.log(0b1111111);

//console.log(Date.now()/1000);

// намерете 256 ден от година, въведена от човек
// Oct.31 == Dec.25
