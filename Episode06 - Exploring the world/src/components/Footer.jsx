import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <span>❤️</span>
        seban
        <span>&copy;</span>
        {year}
        <strong>
          Tasty <span>Trails</span>
        </strong>
      </div>
    );
  };
  
export default Footer