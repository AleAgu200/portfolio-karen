import { CldImage } from "next-cloudinary";

const ImageGallery = ({ imagesIds }) => {
	return (
		<div className='grid grid-cols-3 grid-rows-16 gap-4 w-full h-auto px-20%'>
			<div className='bg-slate-500 row-span-2'>
				<CldImage
					width='300'
					height='300'
					src=''
					sizes='100vw'
					crop='thumb'
					alt=''
				/>
			</div>
			<div className='bg-red-500 row-span-2 col-start-1 row-start-3'>2</div>
			<div className='bg-blue-500 col-span-2 row-span-4 col-start-2 row-start-1'>
				3
			</div>
			<div className='bg-green-500 row-span-4 row-start-5'>4</div>
			<div className='bg-purple-500 row-span-2 row-start-5'>5</div>
			<div className='bg-violet-500 row-span-2 col-start-2 row-start-7'>6</div>
			<div className='bg-pink-500 row-span-2 col-start-3 row-start-5'>7</div>
			<div className='bg-yellow-500 row-span-4 col-start-3 row-start-7'>8</div>
			<div className='bg-orange-500 col-span-2 row-span-4 row-start-9'>9</div>
			<div className='bg-purple-500 row-span-2 col-start-3 row-start-11'>
				10
			</div>
		</div>
	);
};

export default ImageGallery;
