import Tile from './tile'
import TopTile from './toptile'
import Store from './store'
import React from 'react'
import connectToStores from 'alt/utils/connectToStores'


@connectToStores
export default class Page extends React.Component{

    constructor(props) {
        super(props)
    }

    static getStores() {
        return [Store];
    }

    static getPropsFromStores() {
        return Store.getState();
    }

    render() {

        let tiles = this.props.tiles.map( (tile) => {
            return(
                <Tile imgUrl={tile.image} title={tile.name} channel={tile.channel} size="small" />
            );
        });
        console.log(this.props.tiles)

        return(
            <div>
                <TopTile>
                    <div className="tilesContent">
                        {tiles}
                    </div>
                </TopTile>
            </div>
        )

    }
}