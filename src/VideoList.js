import React from 'react';

function VideoList(props){
	console.log(props);
	return(
		<div>
			<ul>
				{props.videos.map((video, i) => <li key={i}>{video.snippet.title}</li>)}
			</ul>
		</div>
	)
}

export default VideoList;