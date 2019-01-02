// Facebook coding interview question and answer - how many ways to decode this message?

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

var data = '12' // 2 ways --> 'ab' and 'l'

console.log(numWays(data))