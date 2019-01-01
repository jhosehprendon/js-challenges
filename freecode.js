// FreeCode Camp JS challenges

// 1. String Reverse

const reverse = (str) => {
    // console.log(str.split('').reverse().join(''))
    var arr = str.split('')
    var newArr = []
    for (var i=arr.length - 1; i>=0; i--) {
        newArr.push(arr[i])
    }
    console.log(newArr.join(''))
}

reverse('Holaaaa')

// 2. Factorialize

const factor = (num) => {
    var bucket = 1
    for(var i= num ; i>=1 ; i --) {
        bucket *= i
    }
    console.log(bucket)
}

factor(10)

// 3. Palindrome

const palindorme = (str) => {
    var inverted = str.split('').reverse().join('')
    if (str === inverted) {
        console.log('Is Palindorme!')
    } else {
        console.log('Nope')
    }
}

palindorme('aka')

// 4. Longest word in string

const longest = (str) => {
    var arr = str.split(' ')
    var word = arr[0]

    for(var i = 0 ; i < arr.length ; i++) {
        if(word.length < arr[i].length) {
            word = arr[i]
        }
    }
    console.log(word)
}

longest('The nice little brownlyty tree in the path')

// 5. Title case a string

const titleCase = (str) => {
    var arr = str.toLowerCase().split(' ')
    var sentence = ''
    for(var i=0; i<arr.length; i++) {
        var word = arr[i][0].toUpperCase() + arr[i].slice(1) + ' '
        sentence = sentence + word
    }
    console.log(sentence)
}

titleCase("I'm a little tea pot")

// 6. Largest Four in array

const largestFour = (arr) => {
    var final = []
    for (var i = 0 ; i < arr.length ; i++) {
        var max = 0
        for (var j = 0; j < arr[i].length ; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j]
            }
        }
        final.push(max)
    }
    console.log(final)
}

largestFour([[1, 2, 3, 4], [34, 35, 36 , 37], [50, 51, 52, 53], [100, 91, 92, 93]])

// 7. Confirm ending

const confirm = (str, end) => {
    var cutWord = str.slice(str.length - end.length)
    console.log(cutWord === end)
}

confirm('Hello', 'o')

// 8. Repeat a string num times

const numTimes = (str, num) => {
    var final = ''
    for(var i = 1 ; i <= num ; i++) {
        final += str
    }
    console.log(final)
}

numTimes('hello', 10)

// 9. Truncate string

const truncate = (str, num) => {
    if(num <= 3 ) {
        var cut = str.slice(0,num) + '...'
        console.log(cut)
    } else {
        var cut = str.slice(0,num - 3) + '...'
        console.log(cut)
    }
}

truncate('A yellow sun is shining today', 20)

// 10. Chunky Monkey

function chunck(arr, size) {
    var arrNew = []
    while(arr.length > 0) {
        arrNew.push(arr.splice(0, size))
    }
    return arrNew
}

console.log(chunck(['a', 'b', 'c', 'd', 'e'], 4))

// 11. Slasher

function  slasher(arr, howMany) {
    return arr.slice(howMany)
}

console.log(slasher([1,2,3], 2))

// 12. Mutations

function mutation(arr) {
    var word1 = arr[0].toLowerCase()
    var word2 = arr[1].toLowerCase()
    var bool = false
    for(var i = 0 ; i < word2.length ; i++) {
        for(var j = 0; j < word1.length ; j++) {
            if(word2[i] === word1[j]) {
                bool = true
                break;
            } else {
                bool = false
            }
        }
    }
    return bool
}

console.log(mutation(['helloy', 'hey']))

// 13. Bouncer -- return an array with truthy values

function bouncer(arr) {
    return arr.filter((el) => {
        return el
    })
}

console.log(bouncer([7, 'ate', '', false, null, undefined, 9]))

// 14. Seek and Destroy

function destroyer(arr) {
    var args = Object.keys(arguments).map(el => {
        return arguments[el]
    })
    var targets = args.slice(1)
    
    return arr.filter(el => {
        return !targets.includes(el)
    })
}

console.log(destroyer([1,2,3,1,2,3], 2, 3)) // [1, 1]


// 15. Where do I belong?

function getIndexToIns(arr, num) {
    arr.push(num)

    arr.sort((a, b) => {
        return a - b
    })
    return arr.indexOf(num)
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35))

// 16. Caesar Cipher

function root13(str) {
    var solved = ''
    for(var i = 0; i < str.length ; i++) {
        var ascii = str[i].charCodeAt()
        if(ascii >= 65 && ascii <= 77){
            solved += String.fromCharCode(ascii + 13)
        } else if ( ascii >= 78 && ascii <= 90) {
            solved += String.fromCharCode(ascii - 13)
        } else {
            solved += str[i]
        }
    }
    return solved
}

console.log(root13('SERR PBQR PNZC'))

// 17. Sum all the numbers in a range

function sumAll(arr) {

    arr.sort((a, b) => {
        return a-b
    })

    var start = arr[0]
    var end = arr[1]
    var sum = 0

    for (var i = start ; i <= end; i++){
        sum += i
    }
    return sum
}

console.log(sumAll([4, 1])) // 10

// 18. Diff two arrays

function diff(arr1, arr2) {
    finalArr = []
    for ( var i = 0 ; i < arr1.length ; i ++) {
        if( !arr1.includes(arr1[i]) ) {
            finalArr.push(arr1[i])
        }
    }

    for ( var i = 0 ; i < arr2.length ; i ++) {
        if( !arr1.includes(arr2[i]) ) {
            finalArr.push(arr2[i])
        }
    }
    return finalArr
}

console.log(diff([1,2,3,5], [1,2,3,4,5])) // [4]
