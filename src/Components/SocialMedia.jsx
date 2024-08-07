import React, { useState } from 'react';

function SocialMedia({ onSelect }) {
  const [selected, setSelected] = useState(null);

  const data = [
    { Socials: "Facebook", height: 1200, width: 630 },
    { Socials: "Instagram", height: 1080, width: 1080 },
    { Socials: "Twitter (X?)", height: 1024, width: 512 },
    { Socials: "LinkedIn", height: 1200, width: 627 }
  ];
  

  const handleSelect = (item) => {
    setSelected(item);
    onSelect(item);
    console.log("Selected platform: ", item);
  };

  return (
    <div className='text-white'>
      {data.map((item, index) => (
        <div key={index} className=' '>
          <input 
            type="radio" 
            name='social' 
            onClick={() => handleSelect(item)} 
            // className='mr-2'
          /> 
          {item.Socials}
        </div>
      ))}
    </div>
  );
}

export default SocialMedia;
