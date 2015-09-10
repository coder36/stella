import React from 'react'
import moment from 'moment'
import Tile from './tile'
import StellaActions from './../store/stellaactions'

@Tile
export default class YourBill extends React.Component {

    content() {
        let bill = this.props.tile;
        return (
            <a id={bill.id} href="#fulltile" onClick={(e) => this.open(e) } className="tile-skyAtlantic-medium" >
                <div className="full-container">
                    <div className="title">
                        Your bill
                    </div>

                    <div className="info">
                        See a break down of your bill
                        <br/><br/>
                        Your next bill is <strong>{currency(bill.total)}</strong>.
                        <br/>
                        <br/>
                        This will be collected from your bank on <strong>{ moment(bill.statement.due).format("MMMM Do")}</strong>
                    </div>
                </div>
            </a>
        )
    }

}