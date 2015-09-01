import React from 'react'
import StellaActions from './stellaactions'


export default class Tile extends React.Component {

    onClick() {
        StellaActions.setFullTile(this.props.tile)
    }

    render() {
        let tile = this.props.tile;
        return (
            <a id={tile.id} href="#fulltile" onClick={() => this.onClick()} className={`tile-${tile.channel}-${tile.size}`}>
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