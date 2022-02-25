/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {}
  const result = []
  for (let index = 0; index < nums.length; index++) {
    const item = nums[index]
    const diff = target - item
    if (Object.hasOwnProperty.call(obj, diff)) {
      const possibleAnswer1 = obj[diff]
      const possibleAnswer2 = index
      result.push(possibleAnswer1)
      result.push(possibleAnswer2)
      break
    }
    obj[item] = index
  }
  return result
};
// @lc code=end

