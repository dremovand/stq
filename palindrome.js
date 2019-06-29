function isPalindrome(str) {
    str = str.toLowerCase().replace(/[-,.\s+]/g,'').split('');
    return str.every((s,i) => s === str[str.length - 1 - i]);
}

console.log(isPalindrome("Коту тащат уток"));
console.log(isPalindrome("Мало кукле дел - к уколам"));
console.log(isPalindrome("Аргентина манит негра"));
console.log(isPalindrome("Другая строка"));