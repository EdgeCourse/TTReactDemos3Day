import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light', // Default theme
  setTheme: () => {} // Empty function initially
});


{/*
function MyComponent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white' // Toggle font color as well
    }}>
      check this out!
    </div>
  );
}

export default MyComponent;
*/}

function MyComponent() {


  const { theme, setTheme } = useContext(ThemeContext); // Assuming you have a ThemeContext
  const [isLightTheme, setIsLightTheme] = useState(theme === 'light'); // Initialize based on context

  const toggleTheme = () => {
    const newTheme = isLightTheme ? 'dark' : 'light';
    setIsLightTheme(!isLightTheme);
    setTheme(newTheme); // Update the theme in your context
  };

  return (
    <div>
      <div style={{
        backgroundColor: isLightTheme ? 'white' : 'black',
        color: isLightTheme ? 'black' : 'white'
      }}>
        check this out!
      </div>
      <button onClick={toggleTheme}>
        {isLightTheme ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
}

export default MyComponent;