"use client";
import "./style.css";
const BackgroundBlur = ({ children }: { children: React.ReactNode }) => {
	return <div className='backgroundBlur mx-10 rounded-lg'>{children}</div>;
};

export default BackgroundBlur;
