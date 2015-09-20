import React from 'react'
import Tile from './tile'
import StellaActions from './../store/stellaactions'

@Tile
export default class Series extends React.Component {

    content() {
        let tile = this.props.tile;
        let img;
        if ( tile.name !== "" ) {
            img = <img className="tile_img" src={tile.image}/>
        }
        else {
            img = <div className="blank"></div>
        }


        return (
            <a id={tile.id} href="#fulltile" onClick={(e) => this.open(e)} className={`tile-${tile.channel}-${tile.size}`}>
                <div className="container">
                    <div className="img_container">
                        {img}
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