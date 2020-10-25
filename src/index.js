module.exports = function check(str, bracketsConfig) {
  let stack = [];
  if (str.length % 2 !== 0) {
      return false
  }

  for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
          if (str[i] == bracketsConfig[j][0]) {
              stack.push(str[i])
              if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
                  if (stack[stack.length - 1] == stack[stack.length - 2]) {
                      stack.pop()
                      stack.pop()
                  }
              }
          }
          if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
              reversed = stack;
              if (reversed[reversed.length - 1] == bracketsConfig[j][0]) {
                  reversed.pop()
              }
              stack = reversed;
          }
      }
  }
  if (stack.length == 0) {
      return true
  } else {
      return false
  }
// your solution

}
