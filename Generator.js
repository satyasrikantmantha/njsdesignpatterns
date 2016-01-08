function* makeGenerator(){
    yield 'Hello World';
    console.log('Re-entered');
    return 'Finalizing';
}

var gen = makeGenerator();
console.log(gen.next());
console.log(gen.next());