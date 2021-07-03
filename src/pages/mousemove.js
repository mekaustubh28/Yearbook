import React, {Component} from 'react';

class Cursor extends Component {
    state = {
        left: 0,
        top: 0
    }
    componentDidMount() {
        document.addEventListener('mousemove', (e) => {
            this.setState({left: e.pageX-100, top: e.pageY-10});
        });
    }
    render() {
        return (
            <div style={{left: this.state.left, top: this.state.top}} className='cursor'></div>
        )
    }
}

export default Cursor;