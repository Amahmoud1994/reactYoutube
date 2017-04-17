import React from 'react';

function VideoPreview(props){
	const DEFAULT_VIDEO = "https://www.youtube.com/embed/ES32UFlPOUA";
	let videoURL = DEFAULT_VIDEO;

	if (props.firstVideo) {
		let videoId = props.firstVideo.id.videoId;
		videoURL = `https://www.youtube.com/embed/${videoId}` ;
	}

	return(
		<div className="videoDisplay">
			<iframe width="560" height="315" src={videoURL} frameBorder="0" allowFullScreen></iframe>
		</div>
	)
}

export default VideoPreview;
