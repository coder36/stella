import React from 'react'
import Tile from './tile'
import StellaActions from './../store/stellaactions'

@Tile
export default class NewsTile extends React.Component {

    content() {
        let news = this.props.tile;
        let img = <div className="blank"></div>
        if (news.title !== "") {
            try {
                img = <img className="tile_img" src={news.mediaGroups[0].contents[0].url.replace('70x50', '736x414')}/>
            }
            catch(e) {
            }
        }

        return (
            <a id={news.id} href="#fulltile" onClick={(e) => this.open(e)} className={`tile-skyArts-medium`}>
                <div className="container">
                    <div className="img_container">
                        {img}
                    </div>


                    <div className="header_container">
                        <div className="header">
                            <h1>{news.title}</h1>
                        </div>
                    </div>
                </div>
            </a>
        )
    }

}