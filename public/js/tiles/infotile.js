import React from 'react'
import Tile from './tile'
import StellaActions from './../store/stellaactions'

@Tile
export default class InfoTile extends React.Component {

    renderFullScreen() {
        let tile = this.props.tile;
        return(
            <div className="description_container">
                <div className="title">
                    {tile.title}
                </div>

                <div className="description">
                    {tile.content}
                </div>
            </div>
        )
    }

    renderTile() {
        let tile = this.props.tile;
        return (
            <a onClick={(e) => this.open(e) } className="tile-skyOne-medium" id={tile.id} href="#fulltile">
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