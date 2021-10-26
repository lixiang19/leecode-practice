/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 自己的思路：先遍历一遍找到每个数对应的插值，再遍历第二遍找到差值对应的index
 * 最优思路: 仅仅遍历一遍，遍历的同时存入哈希
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = function (nums, target) {
//   const obj = {}
//   const result = []
//   nums.forEach((item, index) => {
//     const diff = target - item
//     obj[diff] = index
//   })

//   for (let index = 0; index < nums.length; index++) {
//     const item = nums[index]
//     const possibleAnswer1 = obj[item]
//     const possibleAnswer2 = index
//     if (possibleAnswer1 && possibleAnswer1 !== possibleAnswer2) {
//       result.push(possibleAnswer1, possibleAnswer2)
//       break
//     }
//   }
//   return result
// }
const twoSum = function (nums, target) {
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
}

// @lc code=end
