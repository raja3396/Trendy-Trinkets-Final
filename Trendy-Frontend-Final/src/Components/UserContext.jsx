import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(null);

  console.log(email);
  useEffect(() => {
    // Check if user email exists in local storage
    const storedEmail = localStorage.getItem('ecommerce');
    if (storedEmail) {
      const userData = JSON.parse(storedEmail);
      setEmail(userData.customerName);
    }
  }, []);

  const login = (email) => {
    // Store user email in local storage
    localStorage.setItem('ecommerce', JSON.stringify({ customerName: email }));
    setEmail(email);
  };

  const logout = () => {
    // Remove user email from local storage
    localStorage.removeItem('ecommerce');
    setEmail(null);
  };

  return (
    <UserContext.Provider value={{ email, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
