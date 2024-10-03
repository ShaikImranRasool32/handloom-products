import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDiscord, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function SocialMediaIcons() {
  return (
    <div className="social-media-icons">
      <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="icon">
        <FontAwesomeIcon icon={faBehance} />
      </a>
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="icon">
        <FontAwesomeIcon icon={faDiscord} />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="icon">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  );
}
