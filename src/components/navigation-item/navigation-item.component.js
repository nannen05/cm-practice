import React from 'react'

class NavigationItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.navItem = React.createRef();
        this.onItemClick = this.onItemClick.bind(this)
    }

    onItemClick(section, timeZone) {
        const navItems = document.getElementsByClassName('navigation__item')

        for (var i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('active');
         }

        this.navItem.current.classList.add('active')
        this.props.updateSliderLine(section, timeZone)
    }

    render () {
        const {section, label, timeZone} = this.props

        return (
            <div className="navigation__item" id={section} onClick={() => this.onItemClick(section, timeZone)} ref={this.navItem}>
                {label}
            </div>
        )
    }
}

export default NavigationItem