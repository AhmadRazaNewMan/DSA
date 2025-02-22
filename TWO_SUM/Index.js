function twoSum (target,arr){
    let set = new Set();
    for(let i=0;i<arr.length;i++){
        if(set.has(target-arr[i])){
            return {first:target-arr[i],second:arr[i]};
        }else{
            set.add(arr[i]);

        }
    }
    return "No such pair found that sums up to the target";
}

const arr = [1,2,3,4,5,6,7,8,9];
const target = 10;
console.log(twoSum(target,arr));

// calculating the time complexity of the above code
// O(n) time complexity
// O(n) space complexity
