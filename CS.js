// Facebook coding interview question and answer - how many ways to decode this message? Javascript

function helper(data, k, memo) {
    var s = data.length - k
    var firstEl = Number('' + data[s] + data[s+1])
    if(k==0) {
        return 1
    } else if(data[s] == 0) {
        return 0
    } 
    
    var result = helper(data, k-1, memo)
    
    if (memo[k] != null) {
        return memo[k]
    } else if (k >= 2 && firstEl <= 26) {
        result += helper(data, k - 2, memo)
    }
    memo[k] = result
    return result
}

function numWays(data) {
    var memo = new Array(data.length + 1).fill(null) 
    return helper(data, data.length, memo)
}

var data = '27345' // 2 ways --> 'ab' and 'l'

console.log(numWays(data))

// Fibonacci sequence with Recursion and Momoization

function fib(n) {
    var memo = new Array(n + 1).fill(null) 
    if(memo[n] != null) {
        return memo[n]
    }

    var result

    if(n == 1 || n == 2) {
        result = 1
    } else {
        result = fib(n - 1) + fib(n - 2)
    }

    memo[n] = result
    return result

} 

console.log(fib(4))  // 1 1 2 3 5 8 13


