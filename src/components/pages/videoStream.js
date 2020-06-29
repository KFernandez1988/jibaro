import React from 'react';

//video streaming service 
const videoStream = (props) => {
    const { videos } = props.location.state.movie
    console.log(videos.url)
    return (
        <div>
            <video style={{ width: '100%', height: '100%'}} controls >
              <source src={videos.url} type="video/mp4"/>
            </video>   
        </div>
    );
}

export default videoStream;
