const twoSum = function(nums, target) {
  for(let i = 0;i<nums.length;i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) 
        return [i,j]
    }
  }
    return []
  }

console.log(twoSum([2,3,4], 7))
// since 3 + 4 = 7, the answer is [1,2] => array[1] + array[2] = 7