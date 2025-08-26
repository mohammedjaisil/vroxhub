import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark shadow-md px-6 py-1 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <div className="text-sm text-gray-600">Welcome, Admin</div>
    </header>
  );
};

export default Header;
