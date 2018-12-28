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

