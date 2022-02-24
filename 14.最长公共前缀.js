/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const list = strs.sort((a, b) => a.length - b.length);
  let minStr = list[0]
  let isPrefix = false;
  do {
    isPrefix = list.every(str => str.startsWith(minStr))
    if (!isPrefix) {
      minStr = minStr.slice(0, -1)
    }
  } while (!isPrefix);
  return minStr
};
// @lc code=end

