import React from 'react'
import Tile from './tile_full'
import StellaActions from './../store/stellaactions'
import moment from 'moment'
import {currency} from '../utils'


@Tile
export default class YourBillFull extends React.Component {

    section( title, total, lineItems ) {
        return(
            <section>
                <div className="header">{title}</div>
                <ul>
                    {
                        lineItems.map((sub) => {
                            return(
                                <li>
                                    <div>{sub.text}</div>
                                    <div>{currency(sub.cost)}</div>
                                </li>
                            )
                        })
                    }
                    <li>
                        <div>Total</div>
                        <div>{currency(total)}</div>
                    </li>
                </ul>

            </section>

        );
    }

    content() {
        let bill = this.props.tile;
        let pkage = bill.package;
        let store = bill.skyStore;


        return(
            <div className="description_container">
                <div className="title">
                    {moment(bill.statement.period.from).format( 'DD MMM')} - {moment(bill.statement.period.to).format( 'DD MMM')}
                </div>

                <div className="description">
                    <section>
                        <div className="header">My Subscriptions</div>
                        <ul>
                            {
                                pkage.subscriptions.map((sub) => {
                                    return(
                                        <li>
                                            <div>{sub.name} ({sub.type})</div>
                                            <div>{currency(sub.cost)}</div>
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <div>Total</div>
                                <div>{currency(pkage.total)}</div>
                            </li>
                        </ul>

                    </section>

                    {
                        this.section(
                            'Sky Store',
                            store.total,
                            store.rentals.map( r => { return ( {text: r.title + '(rental)', cost: r.cost})})
                            .concat( store.buyAndKeep.map( r => { return ( {text: r.title + '(buy and keep)', cost: r.cost})}) )
                        )
                    }


                </div>
            </div>
        )
    }

}