import React, {useState, useEffect} from 'react';
import { LiaToggleOffSolid, LiaToggleOnSolid } from 'react-icons/lia';
// import { MdOutlineToggleOff } from "react-icons/md";
// import { MdOutlineToggleOn } from "react-icons/md";

export const ToggleButton = ({ toggle, handleToggle, update, className, buttonTag }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
        // If already toggled, do nothing
        if (isToggled) return;

        handleToggle();
        update();
        setIsToggled(true);  // Set the flag to stop future toggles
    };
  return (
    <div className='flex flex-col'>
      {/* Conditionally rendering based on the toggle state */}
      {toggle ? (
        <LiaToggleOnSolid className={`text-black text-3xl cursor-not-allowed ${className}`} onClick={handleClick} />
      ) : (
        <LiaToggleOffSolid className="text-black text-3xl" onClick={handleClick} />
      )}
      <span className='text-gray-400 text-sm'>{buttonTag}</span>
    </div>
  );
};

export const StartStopButton = ({ start, stop, className}) => {
  const [toggle, setToggle] = useState(() => {
    const savedToggle = localStorage.getItem('toggleState');
    return savedToggle ? JSON.parse(savedToggle) : false;
  });

  const handleToggle = () => {
    const newToggleState = !toggle;
    setToggle(newToggleState);
    localStorage.setItem('toggleState', JSON.stringify(newToggleState));
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem('toggleState'); // Clear state on unmount if required
    };
  }, []);
  
  return (
    <div>
      {/* Conditionally rendering based on the toggle state */}
      {toggle ? (
        <LiaToggleOnSolid className={`text-black text-3xl ${className}`} onClick={() => {handleToggle(); start();}} />
      ) : (
        <LiaToggleOffSolid className="text-black text-3xl" onClick={() => {handleToggle(); stop();}} />
      )}
    </div>
  );
}