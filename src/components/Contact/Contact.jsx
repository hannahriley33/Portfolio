import React from 'react';
import contactStyles from './contactStyles.css';
import hp from '../../../public/hp.jpeg';

const Contact = () => {
  
  return (
    <div className={contactStyles.mainDiv}>
      <div className={contactStyles.contactInfo}>
        <p className={contactStyles.mainText}>{'Here\'s my e-mail. Have a magical day!'}</p>
        <p className={contactStyles.email}>{'riley.hannahm@gmail.com'}</p>
      </div>
      <div className={contactStyles.funFacts}>
        <img src={hp} className={contactStyles.funPic}></img>
      </div>
    </div>
  );
};

export default Contact;

