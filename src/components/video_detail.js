import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>;
    }
    /*Because the child tries to render before the parent is finished
    rendering, we need to put an if statement that catches and returns,
    otherwise the page won't load properly
    */

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`
    //Same as 'https://www.youtube.com/embed/' + videoId

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>
                    {video.snippet.title}
                </div>
                <div>
                    {video.snippet.description}
                </div>
            </div>
        </div>

    );
};

export default VideoDetail;
