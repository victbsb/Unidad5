const nums = [2, 6, 9, 1, 45, 23, 19, 7, 5];

// for (numero of nums) {
//     for(let i=nums[0], i <= nums.length, i++);
//     if (numero > nums){

//     }
// };


var max = nums[0];

for(let i = 0; i < nums.length; i++){
    console.log(nums[i]);
    var current = nums [i];


    if (current > max) {
        max = current;
    }
}

    console.log('El valor maximo, ' + max)

//o tambien se puede hacer: For of alternativa

var max = nums[0];

for (let j of nums){
    console.log(j);
    
    if (j > max) {
        max = j;
    }
}