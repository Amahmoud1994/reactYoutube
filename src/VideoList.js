import React from 'react';

function VideoList(props){
	return(
		<div className="sidebar">
			<ul className="videoList">
			<div>
				{props.videos.map((video, i) => <li onClick={() => props.onVideoSelect(video)} key={i}><img src={video.snippet.thumbnails.default.url}/> <p>{video.snippet.title}</p></li>)}

			</div>

			</ul>
		</div>
	)
}

export default VideoList;
