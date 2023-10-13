import React from 'react';

export const Contact = () => {
  return (
    <section className="wid-80 contacct">
      <div>
        <h1>Contact us</h1>
        <small>We love to serve you</small>
      </div>
<form className="form wid-80">
  <div className="title">Where we connect<br /><span>Contact</span></div>
  <input type="email" placeholder="Email" name="email" className="input" required />
  <textarea type="text" placeholder="Message" name="password" className="input" required/>
  <button className="button-confirm">Send →</button>
</form>

      
    </section>
  )
}
