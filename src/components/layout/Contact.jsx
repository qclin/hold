import React from 'react';

export default function Contact(props) {
  const { contactOn, handleContactToggle, showFooter } = props;

  return (
    <>
      <footer
        onClick={() => handleContactToggle(true)}
        className={showFooter ? 'show' : 'hide'}
      >
        <span>CONTACT</span>
      </footer>
      <div id="contact" className={contactOn ? 'show' : 'hide'}>
        <div className="content bg-white">
          Get in touch <br />
          hello [at] theholding.page <br />
          for collaborations, commissions or just to say hi …etc. <br />
          <a href="https://tinyletter.com/StudioHold" target="_blank">
            Newsletter
          </a>
        </div>
      </div>
    </>
  );
}
