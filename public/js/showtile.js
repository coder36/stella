import React from 'react'
import StellaActions from './stellaactions'


export default class ShowTile extends React.Component {

    onClick() {
        StellaActions.setFullTile(this.props.tile)
    }

    close() {
        StellaActions.closeFullTile();
    }

    render() {
        if ( this.props.fullScreen ) {
            return this.renderFullScreen()
        }
        else {
            return this.renderTile();
        }
    }

    renderFullScreen() {
        let tile = this.props.tile;
        return(
            <div id="fulltile" className="fulltile">
                <div className="bar">
                    <span><a onClick={() => this.close() } href={'#' + this.props.tile.id}>close</a></span>
                </div>
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
            <a id={tile.id} href="#fulltile" onClick={(e) => this.onClick()} className={`tile-${tile.channel}-${tile.size}`}>
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