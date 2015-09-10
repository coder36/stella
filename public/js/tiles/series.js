import React from 'react'
import Tile from './tile'
import StellaActions from './../store/stellaactions'

@Tile
export default class Series extends React.Component {

    content() {
        let tile = this.props.tile;
        return (
            <a id={tile.id} href="#fulltile" onClick={(e) => this.open(e)} className={`tile-${tile.channel}-${tile.size}`}>
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