import React from 'react'

export default class Tile extends React.Component {

    render() {
        return (
            <div className={`tile-${this.props.channel}-${this.props.size}`}>
                <div className="container">
                    <div className="img_container">
                        <img className="tile_img" src={this.props.imgUrl}/>
                    </div>


                    <div className="header_container">
                        <div className="header">
                            <h1>{this.props.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}