// - Longest Word
let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

theBiggest.forEach((_, i, arr) => {
  arr[i] = i;
});
console.log(theBiggest);
