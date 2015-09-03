import StellaActions from './../store/stellaactions'
import React from 'react'
import $ from 'jquery'

export default function tile(target) {

    target.prototype.open = function(e) {
        e.preventDefault();
        StellaActions.setFullTile(this.props.tile);
    };

    target.prototype.render = function() {
        return this.content();
    }
}