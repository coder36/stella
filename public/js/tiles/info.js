import React from 'react'
import Tile from './tile'
import StellaActions from './../store/stellaactions'

@Tile
export default class Info extends React.Component {

    content() {
        let info = this.props.tile;
        return (
            <a id={info.id} href="#fulltile" onClick={(e) => this.open(e) } className="tile-skyOne-medium" >
                <div className="full-container">
                    <div className="title">
                        {info.title}
                    </div>

                    <div className="info">
                        {info.content}
                    </div>
                </div>
            </a>
        )
    }

}