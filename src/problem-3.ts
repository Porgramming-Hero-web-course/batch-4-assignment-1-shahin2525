const countWordOccurrences = (sentence: string, word: string) => {
  const sentenceLowerCase = sentence.toLocaleLowerCase();
  const wordLowerCase = word.toLocaleLowerCase();
  const re = new RegExp(wordLowerCase, "gi");
  const wordMatchTimes = sentenceLowerCase.match(re)?.length;
  return wordMatchTimes;
};
const wordAppearsTimes = countWordOccurrences(
  "successful you successful you success",
  "SuccessFUL"
);
