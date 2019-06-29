function format(input){
    input = input.reduce((acc,word,i,arr) => acc +=i === arr.length - 1 ? ` и ${word}.` : `, ${word}`);
    return input[0].toUpperCase().concat(input.slice(1).toLowerCase());
}


console.log(format(['котики','собачки','рыбКи','волосатый медведь']));
console.log(format(['овощи','фрукты']));
console.log(format(['зВеРи','лЮдИ']));