for(var i=1; i<=100; i++){
    let out = i;
    if(i % 3 == 0) out += 'fizz'
    if(i % 5 == 0) out += 'buzz'
    if(out != i) out = out.replace(i.toString(), '');
    console.log(out);
}