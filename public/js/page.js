import Tile from './tile'
import TopTile from './toptile'
import InfoTile from './infotile'
import FullTile from './fulltile'
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

        let tiles = [];
        let fullTile = null;


        this.props.tiles.forEach( (tile) => {
            tiles.push(
                <Tile tile={tile}/>
            );

            if (tile.fullScreen) {
                fullTile = tile;
            }
        });

        if ( fullTile ) {
            tiles.push(<FullTile tile={fullTile}/>)
        }


        return(
            <div className="pageContainer">
                <TopTile/>
                <div className="tilesContent">
                    <InfoTile/>
                    {tiles}
                </div>
            </div>
        )

    }
}
