import StellaActions from './../store/stellaactions'
import React from 'react'
import $ from 'jquery'

export default function tile(target) {

    target.prototype.open = function(e) {
        e.preventDefault();
        StellaActions.setFullTile(this.props.tile);
    };

    target.prototype.componentDidMount = function(e) {
        if ( this.props.fullScreen ) {
            $('html, body').animate({
                scrollTop: $('#fulltile').offset().top
            }, 500);
        }
    };

    target.prototype.componentDidUpdate = function(e) {
        if ( this.props.fullScreen ) {
            $('html, body').animate({
                scrollTop: $('#fulltile').offset().top
            }, 500);
        }
    };

    target.prototype.close = function(e) {
        StellaActions.closeFullTile();
    };

    target.prototype.render = function() {
        if ( this.props.fullScreen ) {
            return (
                <div id="fulltile" className="fulltile">
                    <div className="bar">
                        <span><a onClick={(e) => this.close(e) } href={`#${this.props.tile.id}`}>close</a></span>
                        {this.renderFullScreen()}
                    </div>
                </div>
            );
        }
        else {
            return this.renderTile();
        }
    };
}