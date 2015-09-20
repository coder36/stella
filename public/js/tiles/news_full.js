import React from 'react'
import Tile from './tile_full'
import StellaActions from './../store/stellaactions'

@Tile
export default class NewsFull extends React.Component {

    content() {
        let news = this.props.tile;
        let img;

        try {
            img = news.mediaGroups[0].contents[0].url.replace('70x50', '736x414');
        }
        catch(e)
        {
        }

        return(
            <div>
                <div className="video">
                    <img src={img}/>
                </div>

                <div className="description_container">
                    <div className="title">
                        {news.title}
                    </div>

                    <div className="description">
                        {news.content}
                    </div>
                </div>
            </div>
        );
    }

}