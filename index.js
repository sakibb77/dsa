/** @format */

function lengthOfLastWord(s) {
  return s.trim().split(" ").at(-1).length;
}
console.log(lengthOfLastWord("   fly me   to   the moon  "));
