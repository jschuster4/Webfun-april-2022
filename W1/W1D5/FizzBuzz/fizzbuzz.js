//each multiple of 3, print Fizz
// each multiple of 5, print buzz
//multiple of 3 and 5, print fizzbuzz

//for loop will grab every number from 0 to 100
for(var i=1; i< 100; i++){
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3!=0 && i%5==0){
        console.log("Buzz");
    }
    else if(i%3==0 && i%5!=0){
        console.log("Fizz");
    }
}