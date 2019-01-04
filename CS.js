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

console.log(numWaysStairs(4))

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

// Google interview - Add one to numbers in array

function addOne(arr) {
    var carry = 1
    var result = new Array(arr.length).fill(0)

    for(var i = arr.length - 1 ; i >= 0 ; i --) {
        var total = arr[i] + carry
        if(total==10) {
            carry = 1
        }
        else {
            carry = 0
            result[i] = total % 10
        }
    }
    if(carry==1) {
        result = new Array(arr.length +1).fill(0) 
        result[0] = 1
    }
    return result
}

console.log(addOne([9,9,8]))


// Amazon Coding Interview Question - K Closest Points to the Origin

function closest(points, k) {
    var arr = []
    for(var i =0 ; i<points.length ; i++) {
        var obj = {}
        var x = points[i][0]
        var y = points[i][1]

        var distance =  Math.sqrt(x*x + y*y)

        obj['coordinates'] = points[i]
        obj['distance'] = distance

        arr.push(obj)
    }

    var sortedArr = arr.sort((a,b) => {
        return a.distance - b.distance
    })

    var arrResult = []

    for(var i =0 ; i < k ; i ++) {
        arrResult.push(sortedArr[i]['coordinates'])
    }

    return arrResult

}

var points = [
    [-2, 4],
    [0, -2],
    [-1, 0],
    [3, 5],
    [-2, -3],
    [3, 2]
]

console.log(closest(points, 2))


// First Recurring Character

function rec(str) {
    var arr = []
    for(var i  = 0 ; i < str.length ; i ++) {
        if(arr.includes(str[i])) {
            return str[i]
        } else {
            arr.push(str[i])
        }
    }
    return null
}

console.log(rec('ABCAOPQP'))
