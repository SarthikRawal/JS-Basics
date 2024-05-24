function sortIt(str) {
    return sortedStr = str.split("").sort().join("");
}
function repititiveChar(str) {
    let arr = str.split('')
    let letters = []
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++
        } else {
            let value = `${count}${arr[i]}`;
            letters = [...letters, value];
            count = 1
        }
    }
    return letters
}

object = "hey hello harish"
console.log(repititiveChar(sortIt(object)));


