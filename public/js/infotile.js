import React from 'react'
import StellaActions from './stellaactions'

export default class InfoTile extends React.Component {

    onClick() {
        StellaActions.setFullTile(this.props.tile)
    }

    close() {
        StellaActions.closeFullTile();
    }


    render() {
        if ( this.props.fullScreen ) {
            return this.renderFullScreen()
        }
        else {
            return this.renderTile();
        }
    }

    renderFullScreen() {
        let tile = this.props.tile;
        return(
            <div id="fulltile" className="fulltile">
                <div className="bar">
                    <span><a onClick={() => this.close() } href={'#' + this.props.tile.id}>close</a></span>
                </div>


                <div className="description_container">
                    <div className="title">
                        {tile.title}
                    </div>

                    <div className="description">
                        {tile.content}
                    </div>
                </div>
            </div>
        )
    }

    renderTile() {
        let tile = this.props.tile;
        return (
            <a onClick={() => this.onClick() } className="tile-skyOne-medium" id={tile.id} href="#fulltile">
                <div className="full-container">
                    <div className="title">
                        {tile.title}
                    </div>

                    <div className="info">
                        {tile.content}
                    </div>
                </div>
            </a>
        )
    }

}