import React from 'react';

export default function Contact(props) {
  const { contactOn, handleContactToggle, showFooter } = props;
  const display = showFooter ? 'show' : 'hide';
  const styles = contactOn ? display + ' showContact' : display;

  return (
    <>
      <footer
        onClick={() => handleContactToggle(true)}
        className={styles + ' label'}
      >
        <span>CONTACT</span>
        <div id="contact">
          <div className="fl w-100 w-50-ns">
            Get in touch <br />
            hello [at] theholding.page <br />
            for collaborations, commissions or a simple hello 🌞 <br />
            <a href="https://tinyletter.com/StudioHold" target="_blank">
              Newsletter
            </a>
          </div>
          <div className="fr w-100 w-20-ns mt5">
            + 49 178 1882094
            <br />
            Harzer Straße 33
            <br />
            Berlin, Germany 12059
          </div>
        </div>
      </footer>
    </>
  );
}
