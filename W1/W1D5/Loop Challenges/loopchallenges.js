//challenge 1, print odd numbers 1-20

for(i=1; i<21; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}

//challenge 2, decreasing multiples of 3

for(i=100; i>0; i--){
    if(i%3 == 0){
        console.log(i);
    }
}

//challenge 3 print the sequence

var arr = [4, 2.5, 1, -0.5, -2, -3.5]
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//challenge 4 add the numbers from 1-100

var sum = 0; 
for(var i=0; i<101; i++){
    sum+= i;
}
console.log(sum);

//challenge 5 factorial from 1-12

var product = 1; 
for (var i=1; i<13; i++){
    product *= i;
}
console.log(product);
