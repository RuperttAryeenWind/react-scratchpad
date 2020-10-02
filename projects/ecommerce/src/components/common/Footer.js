import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div >
        <footer>
          <div className='social'>
            <a href='#'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='#'>
              <i className='fab fa-google-plus-g'></i>
            </a>
          </div>
          <ul className='list-inline'>
            <li className='list-inline-item'>
              <a href='#'>Home</a>
            </li>
            <li className='list-inline-item'>
              <a href='#'>Services</a>
            </li>
            <li className='list-inline-item'>
              <a href='#'>About</a>
            </li>
            <li className='list-inline-item'>
              <a href='#'>Terms</a>
            </li>
            <li className='list-inline-item'>
              <a href='#'>Privacy Policy</a>
            </li>
          </ul>
          <p className='copyright'>
            Company Name &copy;{new Date().getFullYear()}
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
