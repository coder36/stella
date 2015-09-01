import React from 'react'
import StellaActions from './stellaactions'

export default class InfoTile extends React.Component {

    onClick() {
    }

    render() {
        return (
            <a onClick={this.onClick} className="tile-skyOne-medium" href="#">
                <div className="full-container">
                    <div className="title">
                        Welcome Back
                    </div>

                    <div className="info">
                        manage your account and discover all you can get as a Sky customer
                    </div>
                </div>
            </a>
        )
    }

}