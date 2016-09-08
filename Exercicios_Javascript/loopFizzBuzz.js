for ( var i = 1; i <= 100 ; i++) {
    var sobra3 = i%3;
    var sobra5 = i%5;

    if (sobra3 == 0 && sobra5 == 0) {
        console.log( i + ' é divisivel por 3 e 5.');
    }
    else if (sobra3 == 0) {
        console.log( i + ' é divisivel por 3.');
    }
    else if (sobra5 == 0) {
        console.log( i + ' é divisivel por 5.');
    }
    else {
        console.log( i + ' não é divisivel nem por 5 nem por 3.')
    }
}
