
//1.
for (var i = 1; i <=10; i++)
{
console.log(i)
}

//2.
for (var i = 2; i<= 20; i+=2)
{
    console.log(i)
}
for (var i = 1; i<= 15; i+=2)
{
    console.log(i)
}
//3.

///
///
//
//4.
var number = 7;
for (var i = 1; i<= 10; i++){
    console.log(`${number} x ${i} = ${number * i }`);
}
//
//
//

//5.
for( var i = 1; i<=10; i++)
{
    console.log(`The square of ${i} is ${i ** 2}`)
}

var arr = [3,7,2,9,5]
var small = arr[0]
for(var num of arr){
    if (num < small){
        small = num
    }
}
console.log(`The small element in the array ${arr} is
${small}`)
