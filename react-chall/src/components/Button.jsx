// Description :
// Implement a button
// to show / hide the text content
import React, { useState } from "react";
function Button() {
  const [isShown, setShown] = useState(true);
  const toggleShown = () => {
    let newIsShown = !isShown;
    setShown(newIsShown);
    const textElement = document.getElementById("text");
    if (textElement) {
      textElement.style.display = newIsShown ? "block" : "none";
    }
  };

  return (
    <>
      <article className="article">
        <div id="text">This is the text content</div>
        <button id="show" onClick={toggleShown}>
          Show/Hide
        </button>
      </article>
    </>
  );
}
export default Button;
