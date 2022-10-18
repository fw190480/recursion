// Q ==>  finding fibonabbi series

let res = fib(7);
// console.log(res)
function fib(n){
    if(n<=1) return n;
    return fib(n-1) + fib(n-2)
}


// Q==>  solve to find a to power b in log(b) by using recursion
let count =0
let power = pow(2,100);
// console.log(power)          
// console.log(count)  // comes 6 due to log(b)
function pow(a,b){
    if(b==1) return a;
    if(b==0) return 1;
    if(b%2==0){
        let res = pow(a,b/2);
        count++
        return res*res
    }else{
        let res = pow(a,(b-1)/2);
        count++
        return res*res
    }
}

//  Q ===> find factorial by using recursion
let recur = recursion(5);
// console.log(recur)
function recursion(n){
    if(n==1) return 1;
    return n*recursion(n-1)
}


// Q ===> 
let isHelp = isRickHelp(1,400);
// console.log(isHelp)
function isRickHelp(n,helpMoney){
    if(n===helpMoney) return true;
    if(n>helpMoney) return false;
    return isRickHelp(n*10,helpMoney) || isRickHelp(n*20,helpMoney)
}

//  Q===> No of ways 
let toalWays =noOfWays(1,10)
console.log(toalWays)
function noOfWays(start,end){
    if(start==end) return 1
    if(start>end) return 0;
    return noOfWays(start+1,end)+noOfWays(start+2,end)+noOfWays(start+3,end)
}