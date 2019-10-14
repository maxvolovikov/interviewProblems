
//named function

    //multiple parameters
    function sum(x, y){
        return x + y
    }
    //everything after arrow is assumed to be returned
    let sumArrow = (x, y) => x + y

    //single param
    function positive (n){
        return n >= 0
    }
    //dont need bracets around single param
    let positiveArrow = n => n >= 0

    //no params
    function give5 (){
        return 5
    }

    let give5Arrow = () => 5

// ananymous function:

document.addEventListener('boo', function(){
    console.log('boo')
})

document.addEventListener('boo', () => console.log('boo'))

// arrow function this is defied by where it is declared, where as normal function redefines this at the time it is called