import React, { Component } from "react";
import { render } from "react-dom";
import $ from "jquery";
import './Progressbar.css'




class ProgressBar extends Component {
    componentDidMount() {
        $('#percent').on('change', function () {
            var val = parseInt($(this).val());
            var $circle = $('#svg #bar');

            if (isNaN(val)) {
                val = 100;
            }
            else {
                var r = $circle.attr('r');
                var c = Math.PI * (r * 2);

                if (val < 0) { val = 0; }
                if (val > 100) { val = 100; }

                var pct = ((100 - val) / 100) * c;

                $circle.css({ strokeDashoffset: pct });

                $('#cont').attr('data-pct', val);
            }
        });

    }
    render() {
        return (
            <div id="cont" data-pct="100">
                <svg id="svg" width="200" height="200" viewPort="0 0 0 100" version="1.1">
                    <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
                    <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
                </svg>
                <input id="percent" name="percent"></input>
                <label for="percent">Type a percent!</label>

<<<<<<< HEAD
            </div >


=======


            </div >







>>>>>>> fb-dev
        );
    }
}

render(<ProgressBar />, document.getElementById("root"));

export default ProgressBar;