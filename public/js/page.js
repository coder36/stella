import ShowTile from './tiles/showtile'
import InfoTile from './tiles/infotile'
import ShowTileFull from './tiles/showtile_full'
import InfoTileFull from './tiles/infotile_full'
import TopTile from './toptile'
import Store from './store/store'
import React from 'react'
import connectToStores from 'alt/utils/connectToStores'
import $ from 'jquery'


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

    getRowView() {
        let view = [];
        let previousBottom = null;
        this.props.tiles.forEach( (tile) => {

            let res = $('#' + tile.id );
            let bottom = res.length == 0 ? null : res[0].getBoundingClientRect().bottom;

            if ( bottom != null && (previousBottom == null || previousBottom != bottom) ) {
                view.push(null);
                previousBottom = bottom;
            }

            view.push(tile);
        });
        view.push(null);

        return view;
    }

    createTile(tile, fullScreen) {
        let type = tile.type;
        if ( type === "show" ) return fullScreen ? (<ShowTileFull tile={tile}/>) : (<ShowTile tile={tile}/>);
        if ( type === "info" ) return fullScreen ? (<InfoTileFull tile={tile}/>) : (<InfoTile tile={tile}/>);
    }

    isMobile() {
        return $('.mobile').css('display') == 'block';
    }


    render() {

        this.props.redraw_page;

        let tiles = [];
        let fullScreenTile = null;
        this.getRowView().forEach( (tile) => {
            if( tile == null && fullScreenTile  ) {
                tiles.push( this.createTile(fullScreenTile,true) );
                fullScreenTile = null;
            }
            else if (tile != null) {
                if ( tile.fullScreen ) fullScreenTile = tile;
                tiles.push( this.createTile(tile,false) );
            }
        });

        let topTile;
        if ( !this.isMobile() ) topTile = <TopTile/>;

        return(
            <div className="pageContainer">
                {topTile}
                <div className="tilesContent">
                    {tiles}
                </div>
            </div>
        )

    }
}
