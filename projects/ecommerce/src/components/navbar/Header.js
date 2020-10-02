import React from 'react';
import Axios from 'axios';
import Menu from './Menu';

class Header extends React.Component {
  state = {
    menu: []
  };

  async componentDidMount() {
    try {
      const res = await Axios.get('/data/menu.json');
      const menu = res.data;
      this.setState({ menu });
    } catch (exception) {
      console.log('Error while fetching menu items', exception);
    }
  }

  render() {
    return (
      <nav className={`fixed-top shadow-sm navbar navbar-expand-lg bg-light`}>
        <a className='navbar-brand' href='#'>Home</a>
        <Menu menuData={this.state.menu} />
      </nav>
    );
  }
}

export default Header;
