// Code your solutions in this file
function writeCards(array, event) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
      newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}

function countDown(int) {
    let i = int;
    while(int >= 0) {
        console.log(int);
        int--;
    }
}
