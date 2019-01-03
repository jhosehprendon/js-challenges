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

var data = '12345' // 2 ways --> 'ab' and 'l'

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

console.log(fib(8))  // 1 1 2 3 5 8 13 **21**


// Amazon interview - Recursive Staricase Problem

function numWaysStairs(n) {
    if(n === 0 || n === 1) {
        return 1
    }

    var nums = new Array(n + 1).fill(null)
    nums[0] = 1
    nums[1] = 1

    for (var i = 2 ; i < nums.length ; i++) {
        nums[i] = nums[i-1] + nums[i-2]
    }

    return nums[n]
}

console.log(numWaysStairs(3))

// Variation with option steps

function numWaysStairsX(n, options) {
    if(n === 0) {
        return 1
    }

    var nums = new Array(n + 1).fill(null)
    nums[0] = 1

    for (var i = 1 ; i < nums.length ; i++) {
        var total = 0
        for(var j = 0 ; j < options.length ; j++) {
            if(i- options[j] >= 0) {
                total += nums[i - options[j]]
            }
        }
        nums[i] = total
    }

    return nums[n]
}

console.log(numWaysStairsX(4, [1,3,5]))