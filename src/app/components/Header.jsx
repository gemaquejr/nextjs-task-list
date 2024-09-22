import React from 'react';
import Image from 'next/image';
import './../app/styles/globals.scss'

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Image src="/assets/logo.png" alt="Logo" width={150} height={36} />
      </div>
      <div>
        <h1>Bem-vindo de volta, Marcus</h1>
      </div>
      <div>
        <p>Segunda, 01 de dezembro de 2025</p>
      </div>
    </header>
  );
};

export default Header;