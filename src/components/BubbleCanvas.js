import React from 'react';

class BubbleCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.w = window.innerWidth
        this.h = window.innerHeight
        this.ctx = this.canvasRef.getContext('2d')
        this.rate = 60
        this.arc = 100
        this.time = 0
        this.count = 1
        this.size = 7
        this.speed = 20
        this.lights = []
        this.colors = ['#d59254', '#ffffff', '#1f2839', '#cf7693'];

    }



    render() {
        this.ctx = this.canvasRef.getContext('2d')
        this.canvasRef.setAttribute('width', this.w);
        this.canvasRef.setAttribute('height', this.h);
        return (
            <div>
                <canvas ref={this.canvasRef} />
            </div>
        );
    }
}

export default BubbleCanvas




// var w = window.innerWidth,
//     h = window.innerHeight,
//     canvas = document.getElementById('bubble'),
//     ctx = canvas.getContext('2d'),
//     rate = '60',
//     arc = 100,
//     time,
//     count,
//     size = 7,
//     speed = 20,
//     lights = new Array,
//     colors = ['#d59254', '#ffffff', '#1f2839', '#cf7693'];


// function init() {
//     time = 0;
//     // count= 1;
// }
