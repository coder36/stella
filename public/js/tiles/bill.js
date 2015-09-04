import React from 'react'
import Tile from './tile'
import StellaActions from './../store/stellaactions'

@Tile
export default class BillTile extends React.Component {

    content() {
        let tile = this.props.tile;
        return (
            <a id={tile.id} href="#fulltile" onClick={(e) => this.open(e) } className="tile-skyOne-medium"  >
                <div className="full-container">
                    <div className="title">
                        See Your Bill
                    </div>

                    <div className="info">
                        {tile.content}
                    </div>
                </div>
            </a>
        )
    }

}