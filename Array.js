


let Username="MIhir Gupta";
reverse="";
function reverseString(str){
    for(let i=str.length-1;i>=0;i--){
        reverse+= str[i];
    }
    return reverse;

}
console.log(reverseString(Username));

function StortingArray(array){
 for(let  i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]>array[j]){
            let temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
 }
 for(let i=0;i<array.length;i++){
    document.write(array[i] + " ");
 }

}
let Nunber=[1,12,10,2,3,111,30,31,7]
StortingArray(Nunber);
let Nunber_=[1,1,2,3,3,312,10,2,3,111,30,31,7]
function removeDuplicate(array){
    let uniqueArray = [...new Set(array)];
    for(let i=0;i<uniqueArray.length;i++){
        console.log(uniqueArray[i] + " ");
    }
}
removeDuplicate(Nunber_);
//Without using Set
let n=[1,1,2,3,3,312,10,2,3,111,30,31,7]
function removeDuplicate_WithoutSet(array){
let uniqueArray=[];    

for(let i=0;i<array.length;i++){
    isDuplicate=false;
    for(let j=i+1;j<array.length;j++){
        if(array[i]===array[j]){
            isDuplicate=true;
            break;
        }
    }
    if(!isDuplicate){
       uniqueArray[uniqueArray.length]=array[i];
    }
}
for(let i=0;i<uniqueArray.length;i++){
    console.log(uniqueArray[i] + " ");
}
}
removeDuplicate_WithoutSet(n);
let username="ihi";
reverse="";
function reverseString(username)
{
    for(let i=username.length-1;i>=0;i--)
    {
        reverse+=username[i];
    }
    return reverse
    
}
let check=reverseString(username)
if(check===username)
{
    console.log('Palidrome');
   
   
}
else
{
    console.log('not palidrome')
}
function checkPrimeNumber(number){
    let isprime=true
    if(number<=1){
        isprime=false;
    }
    for(let i=2;i<number;i++){
        if(number%i==0){
            isprime=false;
            break;
        }
    }
    if(isprime){
        console.log(`${number} is a prime number`);
    }
    else{
        console.log(`${number} is not a prime number`);
    }
}
checkPrimeNumber(7);