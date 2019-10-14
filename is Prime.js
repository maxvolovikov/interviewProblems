/*
write a function that will define if the number is prime:
A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. A natural number greater than 1 that is not prime is called a composite number. For example, 5 is prime because the only ways of writing it as a product, 1 × 5 or 5 × 1, involve 5 itself.

0, 1 - not prime numbers
2 - is a prime number
anything even (besides 2) is not a prime number

if anyt number can be expressed by multiplication of natural numbers like x  * y then we only need to check one side of multiplication while x < y and the other will be symmetrical - meanint any number we are checking should be only checked up to its square root.
*/

let isPrime = (n) => {
    //2 is prime
    if (n === 2){
        return true;
    }
    //input valdation, check for 0,1 and make sure n is not even
    if (!Number.isInteger(n) || n < 2 || !(n%2)){
        return false;
    }
    //only checking starting at 3 odd numbers up to sqrt of n
    for (let i = 3; Math.sqrt(n); i+=2){
        //check if n can be divided by i without a remainder
        if (!(n%i)){
            return false;
        }
    }
    return true;
}