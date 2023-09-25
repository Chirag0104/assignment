
function ReverseString(str) {
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
}

console.log(ReverseString("This is a sunny day"))