function isPalindrome(str) {
    str = str.toLowerCase().replace(/[-,.\s+]/g,'').split('');
    return str.every((s,i) => s === str[str.length - 1 - i]);
}

function isPalindrome2(str){
    str = str.toLowerCase().replace(/[-,.\s+]/g,'').split('');
    var check_true=0;
    for (let index = 0; index < Math.floor(str.length/2); index++) {
        console.log(`Element: ${str[index]}, -element: ${str[str.length -1 -index]}, check_true:${check_true}`)
        if(str[index] === str[str.length -1 -index]){
            check_true++;
            if(check_true >= Math.floor(str.length/2)){
                return true;
            }
        }else{
            return false;
        }   
    }
}

console.log(isPalindrome2("Коту тащат уток"));
console.log(isPalindrome2("Мало кукле дел - к уколам"));
console.log(isPalindrome2("Аргентина манит негра"));
console.log(isPalindrome2("Другая строка"));