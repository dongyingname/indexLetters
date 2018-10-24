function countLetters(input) {
  var result = {};
  for (var i = 0; i < input.length; i++){
    var char = input[i];
    if (char === ' ') continue;

    if (result[char]) result[char] += ', ' + i;
    else result[char] = String(i);
  }
  return result;
}

console.log(countLetters('happy birthdayllh'));
console.log(countLetters('why am i here'));
console.log(countLetters('alright'));


