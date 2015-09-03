import React from 'react'
import Tile from './tile_full'
import StellaActions from './../store/stellaactions'

@Tile
export default class ShowTile extends React.Component {

    content() {
        let tile = this.props.tile;
        return(
            <div>
                <div className="video">
                    <video loop controls>
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
        );
    }

}