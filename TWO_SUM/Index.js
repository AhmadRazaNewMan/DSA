console.log("TWO SUM PROBLEM");

function twoSum(array_of_numbers, target) {
    let hash_map = {};
    for (let i = 0; i < array_of_numbers.length; i++) { 
        let diff = target - array_of_numbers[i];

        if (hash_map[diff] !== undefined) {
            console.log("SOLUTION FOUND");
            return [hash_map[diff], i];
        }

        hash_map[array_of_numbers[i]] = i;
    }
    return "NO SOLUTION FOUND";
}

let array_of_numbers = [2, 7, 11, 15];
let target = 9;
let result = twoSum(array_of_numbers, target);
console.log(result); 