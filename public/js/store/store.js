import alt from './../alt'
import StellaActions from './stellaactions'
import $ from 'jquery'
import {isRunningOnClient, hashCode} from '../utils'

class StellaStore {

    constructor() {
        this.bindActions(StellaActions);
        this.state = { tiles: [], redraw_page: 0 };
        this.init();
        if ( isRunningOnClient() ) {
            this.readSeriesData();
            this.readCustomerBillData();
            this.readNewsData();
            this.listenForResize();
        }
    }

    init() {
        const tiles = this.state.tiles;

        tiles.push(
            {
                id: 'welcome',
                type: 'info',
                title: 'Welcome Back',
                content: ''
            },
            {
                id: 'your_bill',
                type: 'your_bill'
            }
        );
    }

    addTile(tile) {
        const tiles = this.state.tiles;

        let existingTile = this.findTile(tile.id, tiles);
        if ( existingTile ) {
            Object.assign( existingTile, tile );
        }
        else {
            tiles.push(tile);
        }
        this.setState( tiles );
    }

    findTile(id, tiles) {

        let res = tiles.find( tile => tile.id === id );
        console.log(res);

        return res;
    }

    addTiles(tiles) {
        tiles.forEach( tile => this.addTile(tile) );
    }

    setFullTile(tile) {
        const tiles = this.state.tiles;
        const res = tiles.map( (t) => {
           t.fullScreen = (t.id === tile.id);
           return t;
        });
        this.setState( {tiles: res })
    }

    closeFullTile() {
        const tiles = this.state.tiles;
        const res = tiles.map( (t) => {
            t.fullScreen = false;
            return t;
        });

        this.setState( {tiles: res })
    }

    redrawPage() {
        let counter = this.state.redraw_page;
        counter++;
        this.setState( {redraw_page: counter })
    }


    readNewsData() {

        $.ajax({
            url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://feeds.skynews.com/feeds/rss/home.rss',
            type: 'GET',
            dataType: 'jsonp',
            cache: false } )
            .done( (json) => {
                const entries = json.responseData.feed.entries;

                entries.forEach((entry) =>{
                    entry.id = hashCode(entry.title);
                    entry.type = 'news';
                });

                StellaActions.addTiles(entries);
            }
        );


    }

    readCustomerBillData() {
        fetch("http://safe-plains-5453.herokuapp.com/bill.json")
            .then(resp => resp.json())
            .then( (json) => {
                let tile = json;
                tile.type = 'your_bill';
                tile.id = 'your_bill';
                StellaActions.addTile(tile);
            }
        );
    }

    readSeriesData() {
        fetch("/series.json")
            .then(resp => resp.json())
            .then((tiles) => {
                tiles.forEach( (tile) => {
                    tile.id  = hashCode(tile.name);
                });

                StellaActions.addTiles(tiles);
            }
        );
    }

    listenForResize() {
        window.onresize = () => {
            StellaActions.redrawPage();
        };
    }


}



export default alt.createStore(StellaStore);