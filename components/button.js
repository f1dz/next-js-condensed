import React from 'react';
import {withRouter} from 'next/router';

export default withRouter(({herf, onClick, children, router}) => (
  <span>
    <button onClick={onClick} className={router.pathname === href ? 'current' : ''}>
      {children}
    </button>
    <style jsx>{`
      button {
        color: blue;
        border: 1px solid;
        cursor: pointer;
      }

      button:hover {
        color: red;
      }

      button:current {
        font-weight: bold;
      }
    `}</style>
  </span>
))