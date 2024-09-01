let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let x = i + 1; x < nums.length; x++) {
      if (nums[i] + nums[x] === target) return [i, x];
    }
  }
};

console.log(twoSum([2, 5, 5, 11], 19999));
