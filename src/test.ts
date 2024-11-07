const countWordOccurrences = (sentence: string, word: string) => {
  const sentenceLowerCase = sentence.toLocaleLowerCase();
  const wordLowerCase = word.toLocaleLowerCase();

  console.log(sentenceLowerCase, wordLowerCase);
};
const wordAppearsTimes = countWordOccurrences("ami tomi Ami ", "AMI");
