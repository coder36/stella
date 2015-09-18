import Series from './tiles/series'
import SeriesFull from './tiles/series_full'
import Info from './tiles/info'
import InfoFull from './tiles/info_full'
import YourBillFull from './tiles/your_bill_full'
import YourBill from './tiles/your_bill'
import News from './tiles/news'
import NewsFull from './tiles/news_full'
import TopTile from './toptile'
import Store from './store/store'
import React from 'react'
import connectToStores from 'alt/utils/connectToStores'
import $ from 'jquery'
import {isRunningOnClient} from './utils'


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

        if ( !isRunningOnClient() ) return this.props.tiles;
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
        if ( type === "info" ) return fullScreen ? (<InfoFull tile={tile}/>) : (<Info tile={tile}/>);
        if ( type === "series" ) return fullScreen ? (<SeriesFull tile={tile}/>) : (<Series tile={tile}/>);
        if ( type === "your_bill" ) return fullScreen ? (<YourBillFull tile={tile}/>) : (<YourBill tile={tile}/>);
        if ( type === "news" ) return fullScreen ? (<NewsFull tile={tile}/>) : (<News tile={tile}/>);
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

        if(isRunningOnClient()) {
            if (!this.isMobile()) topTile = <TopTile/>;
        }

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
