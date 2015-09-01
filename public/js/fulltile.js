import React from 'react'
import StellaActions from './stellaactions'


export default class FullTile {

    close() {
        StellaActions.closeFullTile();
    }

    render() {
        let tile = this.props.tile;
        return(
            <div id="fulltile" className="fulltile">
                <div className="bar">
                    <span><a onClick={() => this.close() } href={'#' + this.props.tile.id}>close</a></span>
                </div>
                <div className="video">
                    <video loop autoPlay controls>
                        <source src={tile.video} type="video/mp4"/>
                    </video>
                </div>

                <div className="description_container">
                    <div className="title">
                        {tile.name}
                    </div>

                    <div className="description">
                        {tile.description}
                    </div>
                </div>
            </div>
        )
    }
}