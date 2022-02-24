/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 * 这一道题的官方题解更巧妙一些
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const list = x.toString().split('');
  const reverseList = list.reverse();
  const reverseStr = reverseList.join('');
  return x === Number(reverseStr);
};
// @lc code=end

