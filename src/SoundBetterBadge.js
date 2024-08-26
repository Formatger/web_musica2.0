import React from 'react';

function Badge() {
  return (
    <div >
      <a
        href="https://soundbetter.com/profiles/622461-albert-formatger"
        rel="noopener noreferrer"
        target="_blank"
        title="Albert Formatger profile on SoundBetter"
        style={{ display:'flex',justifyContent:'center', }}
      >
        <img
          alt="Albert Formatger, Electric Guitar on SoundBetter"
          src="https://d2p6ecj15pyavq.cloudfront.net/assets/SoundBetterBadge-c84cb3e75c4267f5bee41f7f617a81d9.svg"
          className='badge-img'
        />
      </a>
    </div>
  );
}

export default Badge;