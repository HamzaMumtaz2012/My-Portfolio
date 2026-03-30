import React from 'react'

const Footer = () => {
  return (
    <div
      style={{
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '200px',
      }}
    >
      <div
        className="footer-1"
        style={{
          backgroundColor: ' #2d3748',
          padding: '20px',
        }}
      >
        <h2>
          Hamza <span style={{ fontWeight: '500' }}>CodeHub</span>
        </h2>
        <hr color="gray" style={{ opacity: '50%', margin: '5px auto' }} width="98%" />
        <div className="icons">
          <div className="icon-1">
            <lord-icon
              src="https://cdn.lordicon.com/jjxzcivr.json"
              trigger="hover"
              style={{ width: '55px', height: '50px', margin: '15px 10px' }}
            ></lord-icon>
            <h3>github</h3>
          </div>
          <div className="icon-2">
            <lord-icon
              src="https://cdn.lordicon.com/euybrknk.json"
              trigger="hover"
              style={{ width: '55px', height: '52px', margin: '13px 0px' }}
            ></lord-icon>
            <h3>youtube</h3>
          </div>
        </div>
      </div>
      <footer>
        <p style={{ fontSize: '1rem', backgroundColor: '#1a202c', padding: '15px' }}>
          &copy; 2024 Hamza CodeHub. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer
