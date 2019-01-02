////////////////////
////////////////////
////////////////////
///// ARRAYS ///////
////////////////////
////////////////////
////////////////////


// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let maxI = 3;
    let maxJ = 3;
    let result = -64;

    for (let i = 0; i <= maxI; i++) {
        for (let j = 0; j <= maxJ; j++) {
            // sum for the top of hourglass
            let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];

            // add the middle of hourglass
            sum += arr[i + 1][j + 1];

            // add the bottom of hourglass
            sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]

            if (result < sum)
                result = sum;
        }
    }
    return result;
}

// Complete the rotLeft function below.
function rotLeft(a, d) {
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        arr.push(a[i]);
    };
    for (var j = 1; j <= d; j++) {
        arr.shift(arr.push(arr[0]));
    }
    return arr;

}


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


////////////////////
////////////////////
////////////////////
//// ALGORITHMS ////
////////////////////
////////////////////
////////////////////


// Complete the gradingStudents function below.
 
function gradingStudents(grades) {
    return grades.map(grade =>  {
        return (grade >= 38 && grade % 5 >= 3) ? grade + 5 - (grade % 5) : grade;
    });
}

console.log(gradingStudents([73, 67, 38, 33, 39])) 

