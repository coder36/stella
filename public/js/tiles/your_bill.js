import React from 'react'
import moment from 'moment'
import Tile from './tile'
import StellaActions from './../store/stellaactions'
import {currency} from '../utils'

@Tile
export default class YourBill extends React.Component {

    content() {
        let bill = this.props.tile;

        let total = bill.total ? currency(bill.total) : "...";
        let dueDate = bill.total ? moment(bill.statement.due).format("MMMM Do") : "...";
        return (
            <a id="your_bill" href="#fulltile" onClick={(e) => this.open(e) } className="tile-skyAtlantic-medium" >
                <div className="full-container">
                    <div className="title">
                        Your bill
                    </div>

                    <div className="info">
                        See a break down of your bill
                        <br/><br/>
                        Your next bill is <strong>{total}</strong>.
                        <br/>
                        <br/>
                        This will be collected from your bank on <strong>{ dueDate }</strong>
                    </div>
                </div>
            </a>
        )
    }

}