let c = "(())()";

console.log(c.length);


let count = 0;

for (i = 0; i < c.length; i++) {
    //console.log(c[i]);
    if (c[i] == "(") {
        count++;//Увеличиваем на единицу
    }
    if (c[i] == ")") {
        count = count - 1;///count--
    }
    if (count < 0) {
        console.log(false);
        break
    }
}

console.log(count);


if (count != 0) {
    console.log("False");
}
else {
    console.log(true);
}