import StellaActions from './../store/stellaactions'
import React from 'react'

export default function tile(target) {

    target.prototype.open = function() {
        StellaActions.setFullTile(this.props.tile)
    };

    target.prototype.close = function() {
        StellaActions.closeFullTile();
    };

    target.prototype.render = function() {
        if ( this.props.fullScreen ) {
            return (
                <div id="fulltile" className="fulltile">
                    <div className="bar">
                        <span><a onClick={() => this.close() } href={'#' + this.props.tile.id}>close</a></span>
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