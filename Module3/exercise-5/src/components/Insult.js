function Inslut() {
  const insultArr = [
    {
      text: "Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?",
      play: "- Macbeth",
    },
    { text: "Never hung poison on a fouler toad", play: "- Richard III" },
    {
      text: "He thinks too much: such men are dangerous",
      play: "- Julius Ceasar",
    },
    {
      text: "Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.",
      play: "- The Merchant of Venice",
    },
    {
      text: "Give me your hand...I can tell your fortune. You are a fool.",
      play: "- The Two Noble Kinsmen",
    },
    {
      text: "He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!",
      play: "- The Tempest",
    },
    {
      text: "Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.",
      play: "- Titus Andronicus",
    },
    {
      text: "It is a tale Told by an idiot, full of sound and fury, Signifying nothing",
      play: "- Macbeth",
    },
    {
      text: "He hath eaten me out of house and home; he hath put all substance into that fat belly of his",
      play: "- Henry IV, Part 2",
    },
    {
      text: "Out, you green-sickness carrion! Out, you baggage! You tallow-face!",
      play: "- Romeo and Juliet",
    },
  ];

  let randomNumber = Math.floor(Math.random() * insultArr.length);

  let result = insultArr.filter(function (element, index) {
    return index == randomNumber;
  });

  //   {
  /* To be retued */
  return (
    <div className="insult">
      <h2>{result[0].text}</h2>
      <p>{result[0].play}</p>
    </div>
  );
}
export default Inslut;

//   let displayInsult = "";

//   let randomInsult = () => {
//     return (displayInsult =
//       insultArr[Math.floor(Math.random() * insultArr.length)]);
//   };

//   randomInsult();
