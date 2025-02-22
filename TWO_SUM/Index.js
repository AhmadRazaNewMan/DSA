// // function twoSum (target,arr){
// //     let set = new Set();
// //     for(let i=0;i<arr.length;i++){
// //         if(set.has(target-arr[i])){
// //             return {first:target-arr[i],second:arr[i]};
// //         }else{
// //             set.add(arr[i]);

// //         }
// //     }
// //     return "No such pair found that sums up to the target";
// // }

// // const arr = [1,2,3,4,5,6,7,8,9];
// // const target = 10;
// // console.log(twoSum(target,arr));

// // // calculating the time complexity of the above code
// // // O(n) time complexity
// // // O(n) space complexity


// const set = new Set();
//  set.add(1);
//     set.add(2);
//     set.add(3);
//     set.add(4);

//     console.log(set);
function unknown(arr){
    const sortedArr = arr.sort((a,b)=>a-b);
    let sum = 0;
    refineArray =  sortedArr.filter((item, index) => index !== 0 && index !== sortedArr.length - 1);
    result = refineArray.map((item) => sum += item);
    return sum ;
}

    



const arr = [4,5,22,5,2,4,2,1];
console.log(unknown(arr));



// function unknown(arr) {
//     if (arr.length <= 2) return 0; // If the array has 2 or fewer elements, return 0

//     let min = Infinity;
//     let max = -Infinity;
//     let sum = 0;

//     // Find the min, max, and sum of all elements
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) min = arr[i];
//         if (arr[i] > max) max = arr[i];
//         sum += arr[i];
//     }

//     // Subtract the min and max from the sum
//     return sum - min - max;
// }

// const arr = [4, 5, 22, 5, 2, 4, 2, 1];
// console.log(unknown(arr));