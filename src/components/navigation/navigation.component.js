import React from 'react'

import './navigation.styles.scss'

import NavigationItem from '../navigation-item/navigation-item.component'

class Navigation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: this.props.items[0].section,
            activeTime: 'Click a City to dipslay current time'
        }

        this.navLine = React.createRef();
        this.updateSliderLine = this.updateSliderLine.bind(this)
    }

    componentDidMount() {
        this.updateSliderOnResize()
    }

    updateSliderOnResize() {
        window.addEventListener('resize', () => {
            this.updateSliderLine(this.state.activeItem)
        })
    }
    
    updateSliderLine(section, timeZone) {
        this.setState({
            activeItem: section
        })

        this.updateTime(timeZone)

        const menuItem = document.getElementById(section)
        const navLine =  this.navLine.current

        navLine.style.left = `${menuItem.offsetLeft}px`
        navLine.style.width = `${menuItem.offsetWidth}px`
    }

    updateTime(timeZone) {
        let time = new Date().toLocaleString("en-US", {timeZone: timeZone});
        time = new Date(time)

        const activeTime = `Current Time: ${time.toLocaleString()}`

        this.setState({
            activeTime
        })
    }

    render () {
        const { items } = this.props
        const { activeTime } = this.state

        return (
            <nav className="navigation">
                <div className="navigation__menu">
                    {items.map(({ index, ...otherItemProps }) => (
                            <NavigationItem key={index} {...otherItemProps} updateSliderLine={this.updateSliderLine}/>
                        ))
                    }
                </div>
                <div className="navigation__slider">
                    <div className="navigation__line" ref={this.navLine}></div>
                </div>
                <div className="navigation__time">
                    { activeTime }
                </div>  
            </nav>
        )
    }
}

export default Navigation