const marks = [0,3,9,4,6,7,1];
let sum = 0 ;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
const avg = sum / marks.length;
console.log('The avg of class is : ' , Math.floor(avg))