import React from 'react'

const SocialInfos = ({socialLinks}) => {
  return (
    <div className="socialLinks">
      <h3>SocialInfos</h3>
      {socialLinks.map((item) => (
        <li key={item.media}>
          <strong>{item.media}: </strong>
          <a href={item.link}>{item.link}</a>
        </li>
      ))}
    </div>
  );
}

export default SocialInfos