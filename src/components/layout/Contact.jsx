import React from 'react';

export default function Contact(props) {
  const { contactOn, handleContactToggle, showFooter } = props;
  const display = showFooter ? 'show' : 'hide';
  const styles = contactOn ? display + ' showContact' : display;
  return (
    <>
      <footer onClick={() => handleContactToggle(true)} className={styles}>
        <span>CONTACT</span>
        <div id="contact">
          <div className="content">
            Get in touch <br />
            hello [at] theholding.page <br />
            for collaborations, commissions or just to say hi …etc. <br />
            <a href="https://tinyletter.com/StudioHold" target="_blank">
              Newsletter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
