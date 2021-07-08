function writeCards(name, event){ 
    let newArray =[];
    for (let i=0; i<name.length;i++){
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
            }
    return newArray;
}

function countDown(int) {
    let i = int;

        while (i >= 0) {
      console.log(i);
      i--;
    }
      return int;
}

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   } 