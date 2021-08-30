import "./styles.css";
import React, { useState } from "react";

const emojipedia = {
  "❤️": "red heart",

  "💃": "Woman Dancing",

  "😏": "smirk face",

  "🔥": "fire",

  "💯": "hundred",

  "🥡": "takeaway noodle box",

  "🥵": "hot face",

  "👊": "Oncoming Fist",

  "😎": "face with sunglasses",

  "🍍": "Pineapple"
};

export default function App() {
  var emojiList = Object.keys(emojipedia);

  const [emojiMeaning, setemojiMeaning] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;
    var output = emojipedia[userInput];
    setemojiMeaning(output + userInput);
    if (output === undefined) {
      setemojiMeaning("Ooops! Emoji not found 😬");
    }
  }

  function clickHandler(emoji) {
    setemojiMeaning(emojipedia[emoji] + emoji);
  }

  return (
    <div className="flexContainer">
      <h1>Emoji Directory</h1>

      <div className="inputContainer">
        <input
          type="text"
          className="emojiInput"
          placeholder="Enter an emoji to search"
          onChange={inputHandler}
        />
      </div>

      <h2 className="outputDiv">{emojiMeaning}</h2>

      <div className="emojiFlex">
        {emojiList.map((emoji) => {
          return (
            <p key={emoji} onClick={() => clickHandler(emoji)}>
              {emoji}
            </p>
          );
        })}
      </div>
    </div>
  );
}
