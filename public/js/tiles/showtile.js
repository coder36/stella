import React from 'react'
import StellaActions from './../store/stellaactions'
import Tile from './tile'

@Tile
export default class ShowTile extends React.Component {

    renderFullScreen() {
        let tile = this.props.tile;
        return(
            <div>
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
        );
    }

    renderTile() {
        let tile = this.props.tile;
        return (
            <a id={tile.id} href="#fulltile" onClick={(e) => this.open()} className={`tile-${tile.channel}-${tile.size}`}>
                <div className="container">
                    <div className="img_container">
                        <img className="tile_img" src={tile.image}/>
                    </div>


                    <div className="header_container">
                        <div className="header">
                            <h1>{tile.name}</h1>
                        </div>
                    </div>
                </div>
            </a>
        )
    }

}