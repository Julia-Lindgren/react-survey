import React from 'react';

function RadioButtons({ colorRating, handleRadioChange }) {
  return (
    <div className="form__group radio">
      <ul>
        <li>
          <input id="color-one" type="radio" name="colorRating" value="1" checked={colorRating === "1"} onChange={handleRadioChange} />
          <label htmlFor="color-one">1</label>
        </li>
        <li>
          <input id="color-two" type="radio" name="colorRating" value="2" checked={colorRating === "2"} onChange={handleRadioChange}
          />
          <label htmlFor="color-two">2</label>
        </li>
        <li>
          <input id="color-three" type="radio" name="colorRating" value="3" checked={colorRating === "3"} onChange={handleRadioChange}
          />
          <label htmlFor="color-three">3</label>
        </li>
        <li>
          <input id="color-four" type="radio" name="colorRating" value="4" checked={colorRating === "4"} onChange={handleRadioChange}
          />
          <label htmlFor="color-four">4</label>
        </li>
      </ul>
    </div>
  );
}

export default RadioButtons