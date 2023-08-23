function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
};

console.log(soma1());
console.log(soma1(1,2));
console.log(soma1(0, 0, 0)); // Problemas com o zero.

// Ecma2015

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma3(1,4));
