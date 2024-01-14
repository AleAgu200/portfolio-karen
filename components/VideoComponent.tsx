"use client";
import React, { useEffect, useRef } from "react";
interface VideoComponentProps {
	src: string;
}

const VideoComponent = ({ src }: VideoComponentProps) => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (videoRef.current) {
							videoRef.current.play();
						}
					} else {
						if (videoRef.current) {
							videoRef.current.pause();
							videoRef.current.currentTime = 0;
						}
					}
				});
			},
			{
				threshold: 0.5, // The video will start playing when 50% of it is visible
			}
		);

		if (videoRef.current) {
			observer.observe(videoRef.current);
		}

		return () => {
			if (videoRef.current) {
				observer.unobserve(videoRef.current);
			}
		};
	}, []);
	let videoRef = useRef<HTMLVideoElement | null>(null);

	const handleMouseOver = () => {
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.play();
		}
	};

	const handleMouseOut = () => {
		if (videoRef.current) {
			videoRef.current.pause();
			videoRef.current.currentTime = 3;
		}
	};
	const handleMetadataLoad = () => {
		if (videoRef.current) {
			videoRef.current.currentTime = 3;
		}
	};
	return (
		<div>
			<video
				ref={videoRef}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				onLoadedMetadata={handleMetadataLoad}
				className='absolute top-0 left-0 w-full h-full rounded-t-2xl rounded-l-2xl object-cover bg-center'
				src={src}
				loop
				muted
			/>
		</div>
	);
};

export default VideoComponent;
