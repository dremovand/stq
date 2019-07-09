function an(str1,str2) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

console.log(an('thing', 'NiGht'));
console.log(an('dog', 'god'));
console.log(an('wrong', 'answer'));