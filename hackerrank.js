// New Year Chaos Hackerrank - Minimum number of bribes

function minimumBribes(arr) {
    var bribes = 0
    for (var i = arr.length - 1 ; i >=0 ; i --) {
        if((arr[i] - 1) - arr.indexOf(arr[i]) > 2 ) {
            return 'Too cahotic'
        } else {
            if((arr[i] - 1) - arr.indexOf(arr[i]) <= 0) {
                if (arr.indexOf(arr[i]) > (arr[i] - 1) && arr[i] > arr[i +1]) {
                    bribes ++
                } else {
                    bribes += 0
                }
            } else {
                bribes += (arr[i] - 1) - arr.indexOf(arr[i])
            }
        }
    }
    return bribes
}

console.log(minimumBribes([2, 1, 5, 3, 4])) // 3 from [1, 2, 3, 4, 5]
console.log(minimumBribes([2, 5, 1, 3, 4])) // 'Too Chaotic'

console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])) // 'Too Chaotic'
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])) // 7