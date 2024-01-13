import Image from "next/image";
import { Card } from "flowbite-react";

import Link from "next/link";
import VideoComponent from "./VideoComponent";

type content = {
	src: string;
	text: string;
	link: string;
};
type SectionType = {
	title: string;
	content: [content, content, content];
};

type SectionProps = {
	section: SectionType;
};

const Section: React.FC<SectionProps> = ({ section }) => {
	return (
		<section className='flex flex-col items-center justify-center mt-5 mx-10 lg:text-left text-center'>
			<p className='lg:text-8xl text-5xl md:text-7xl font-extrabold'>
				{section.title}
			</p>

			<div className='flex lg:flex-row flex-col gap-[4rem] justify-center items-center'>
				{section.content.map((item, index) => (
					<ListItem
						key={index}
						src={item.src}
						text={item.text}
						link={item.link}
					/>
				))}
			</div>
		</section>
	);
};

export default Section;
type ListItemProps = {
	src: string;
	text: string;
	link: string;
};
const ListItem: React.FC<ListItemProps> = ({ src, text, link }) => {
	return (
		<Card
			className=' max-w-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-3xl hover:shadow-indigo-600/50 shadow-indigo-500/50 transition duration-500 ease-in-out	'
			renderImage={() => (
				<div className='relative rounded-t-2xl rounded-l-2xl w-full h-[25rem]'>
					{src.endsWith(".mp4") ? (
						<VideoComponent src={src} />
					) : (
						<Image
							className='absolute top-0 left-0 w-full h-full rounded-t-2xl rounded-l-2xl object-cover bg-center'
							width={500}
							height={500}
							src={src}
							alt={text}
						/>
					)}
				</div>
			)}
		>
			<p className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
				{text}
			</p>
		</Card>
	);
};
