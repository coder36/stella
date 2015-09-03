import React from 'react'
import Tile from './tile_full'
import StellaActions from './../store/stellaactions'

@Tile
export default class InfoTileFull extends React.Component {

    content() {
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

}