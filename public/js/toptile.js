import React from 'react'

export default class TopTile extends React.Component {

    render() {
        return(
            <div className="topTile">
                <video loop autoPlay>
                    <source src="//static.video.sky.com/skyatlantic/2015/06/131841/131841-576p_2000K_H264.mp4" type="video/mp4"/>
                </video>
            </div>
        );
    }
};