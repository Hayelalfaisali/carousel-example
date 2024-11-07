import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ imagen }) {
  const [flipped, setFlipped] = useState(false);

  const props = useSpring({
    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  });

  return (
    <div className={Styles.cardContainer}>
      <animated.div
        className={Styles.card}
        style={props}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div className={Styles.cardSide}>
          <img src={imagen} alt="" className={Styles.cardImage} />
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
        </div>
        <div className={Styles.cardSide}>
          <img src={imagen} alt="" className={Styles.cardImage} />
          <h2>Flipped Title</h2>
          <p>This is the content on the back of the card.</p>
        </div>
      </animated.div>
    </div>
  );
}

export default Card;