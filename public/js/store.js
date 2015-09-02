import alt from './alt'
import StellaActions from './stellaactions'

class StellaStore {

    constructor() {
        this.bindActions(StellaActions)
        this.state = { tiles: [], redraw_page: 0 };
        this.startRefreshDaemon();
        this.listenForResize();
    }

    updateTiles(tiles) {
        this.setState( { tiles } );
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

    refreshTiles() {
        fetch("/tiles.json")
            .then(resp => resp.json())
            .then((tiles) => {
                StellaActions.updateTiles(tiles);
            });
    }

    startRefreshDaemon() {
        this.refreshTiles();
        //setInterval(this.refreshTiles, 1000 );
    }

    listenForResize() {
        window.onresize = () => {
            StellaActions.redrawPage();
        };
    }


}



export default alt.createStore(StellaStore);