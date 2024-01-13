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
			<div className='absolute inset-0 w-full h-full'>
				<div className='flex flex-col justify-center items-center w-full h-full'>
					<a
						className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
						href='#'
					>
						<svg
							className='flex-shrink-0 w-4 h-4'
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<polygon points='5 3 19 12 5 21 5 3' />
						</svg>
						Play the overview
					</a>
				</div>
			</div>
		</div>
	);
};

export default VideoComponent;
