import React from 'react'

class Header extends React.Component {
    render() {
        const {title} = this.props;
        return React.createElement('header', {className: "App-header"}, title);
    }
}

export default Header;