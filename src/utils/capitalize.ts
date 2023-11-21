export default function capitalize(string: string) {
  const finalSentence = string.replace(/(^\w{1})|(\s+\w{1})/g, letter =>
    letter.toUpperCase()
  );

  return finalSentence;
}
