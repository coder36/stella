import alt from './alt'
import StellaActions from './stellaactions'

class StellaStore {

    constructor() {
        this.bindActions(StellaActions)
        this.state = { tiles: [] };
        this.startRefreshDaemon();
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

}



export default alt.createStore(StellaStore);