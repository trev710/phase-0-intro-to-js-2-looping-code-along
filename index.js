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
