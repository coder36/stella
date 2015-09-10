import React from 'react'
import Tile from './tile_full'
import StellaActions from './../store/stellaactions'

@Tile
export default class ShowTile extends React.Component {

    content() {
        let tile = this.props.tile;

        let video;

        if ( tile.video ) {
            video = (
                <div className="video">
                    <video loop controls>
                        <source src={tile.video} type="video/mp4"/>
                    </video>
                </div>
            );
        }

        if ( tile.video_image ) {

            video = (
                <div className="video">
                    <img src={tile.video_image}/>
                </div>
            );
        }


        return(
            <div>
                {video}

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