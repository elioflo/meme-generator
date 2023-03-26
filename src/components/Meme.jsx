import { useState } from "react";
import memesData from "../memesData";

export default function () {
  const [imgUrl, setImgUrl] = useState("");

  function getMemeImage() {
    console.log("HOLAA");
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setImgUrl(memesArray[randomNumber].url);
    console.log(imgUrl);
  }
  return (
    <div className="form">
      <input className="form__input" type="text" placeholder="Top text" />
      <input className="form__input" type="text" placeholder="Bottom text" />
      <button className="form__button" onClick={getMemeImage}>
        Get a new meme image &#128444;&#65039;
      </button>
      <img className="form__img" src={imgUrl} alt="" />
    </div>
  );
}
