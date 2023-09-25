
const arr1 = [1,2,6,7,2,1,0,5,6];
  
function arrSort(arr) {
    arr.sort((a,b)=>a-b);
    arr.reverse();
    return arr;
}

console.log(arrSort(arr1));
