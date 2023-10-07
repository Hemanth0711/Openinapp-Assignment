import React, { useState } from 'react';
import "./NewComponent.css";
import closeIcon from "../../images/Button.svg";

export default function NewComponent({ onClose }) {
  const [showSocialFields, setShowSocialFields] = useState(false);
  const [isBasicActive, setIsBasicActive] = useState(true); // Added state for Basic button
  const [isSocialActive, setIsSocialActive] = useState(false); // Added state for Social button

  const handleNextClick = () => {
    setShowSocialFields(true);
    setIsBasicActive(false);
    setIsSocialActive(false);
  };

  const handleBasicClick = () => {
    setShowSocialFields(false);
    setIsBasicActive(true);
    setIsSocialActive(false);
  };

  const handleSocialClick = () => {
    setShowSocialFields(true);
    setIsBasicActive(false);
    setIsSocialActive(true);
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className='newComponent'>
      <div className="header">
        <span>Add New Profile</span>
        <img src={closeIcon} alt="closeIcon" onClick={handleCloseClick} />
      </div>
      <div className='line'></div>
      <div className="form-container">
        <div className="form-btns">
          <div>
            <button onClick={handleBasicClick} className={isBasicActive ? 'active-btn' : ''}>Basic</button>
          </div>
          <div>
            <button onClick={handleSocialClick} className={isSocialActive ? 'active-btn' : ''}>Social</button>
          </div>
        </div>
        <div className="base-lines">
          <div className={isBasicActive ? 'active-line' : 'normal-line'}></div>
          <div className={isSocialActive ? 'active-line' : 'normal-line'}></div>
        </div>
        <div className="basic-form">
          {
            !showSocialFields && (
              <>
                <label htmlFor="name">Enter Name*</label>
                <input type="text" id="name" name="name" required="true" placeholder='Eg. John Doe' />
                <br />

                <label htmlFor="email">Enter Email*</label>
                <input type="email" id="email" name="email" required="true" placeholder='John@xyz.com' />
                <br />

                <label htmlFor="phone">Enter Phone*</label>
                <input type="tel" id="phone" name="phone" required="true" placeholder='Eg. 98XXXXXXX' />
                <br />
              </>
            )
          }
          
          {showSocialFields && (
            <>
              <label htmlFor="instagram">Instagram Link <span className="optional-text">(Optional)</span></label>
              <input type="text" id="instagram" name="instagram" placeholder='Instagram Username' />
              <br />

              <label htmlFor="linkedin">Youtube Link <span className="optional-text">(Optional)</span></label>
              <input type="text" id="linkedin" name="linkedin" placeholder='LinkedIn Profile URL' />
              <br />
            </>
          )}

          <div className='line'></div>

          <div>
            {
              !showSocialFields ? <button onClick={handleNextClick} className='btn'>Next</button> :
              <div>
                <button className='btn'>Done</button>
                <button onClick={handleBasicClick} className='btn'>Back</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
