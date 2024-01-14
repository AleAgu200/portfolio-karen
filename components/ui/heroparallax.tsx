"use client";
import React, { useEffect, useState } from "react";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "./GridImages";

export const HeroParallax = () => {
	type product = {
		id: string;
		title: string;
		link: string;
		thumbnail: string;
	};
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("/api/hello")
			.then((response) => response.json())
			.then((data) => setProducts(data))
			.catch((error) => console.error(error));
	}, []);
	const firstRow = products.slice(0, 6);
	const secondRow = products.slice(6, 13);
	const thirdRow = products.slice(1, 16);

	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
		springConfig
	);
	return (
		<div className='w-full h-full'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				ref={ref}
				className='h-[255vh] py-10 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]'
			>
				<Header />
				<motion.div
					style={{
						rotateX,
						rotateZ,
						translateY,
						opacity,
					}}
					className=''
				>
					<motion.div className='flex flex-row-reverse space-x-reverse space-x-20 mb-20'>
						{firstRow.map((product: product) => (
							<ProductCard
								product={product}
								translate={translateX}
								key={product.id}
							/>
						))}
					</motion.div>
					<motion.div className='flex flex-row mb-20 space-x-20 '>
						{secondRow.map((product: product) => (
							<ProductCard
								product={product}
								translate={translateXReverse}
								key={product.id}
							/>
						))}
					</motion.div>
					<motion.div className='flex flex-row-reverse space-x-reverse space-x-20'>
						{thirdRow.map((product: product) => (
							<ProductCard
								product={product}
								translate={translateX}
								key={product.id}
							/>
						))}
					</motion.div>
				</motion.div>
			</motion.div>
			{/* 			<ImageGallery />
			 */}{" "}
		</div>
	);
};

export const Header = () => {
	return (
		<div className='max-w-7xl relative mx-auto px-4 w-full  left-0 top-0'>
			<h1 className='text-2xl md:text-7xl font-bold dark:text-white'>
				Campañas realizadas por la diseñadora gráfica{" "}
				<span className='text-primary-500'>Karen Andino</span>
			</h1>
			<p className='max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200'>
				We build beautiful products with the latest technologies and frameworks.
				We are a team of passionate developers and designers that love to build
				amazing products.
			</p>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		link: string;
		thumbnail: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className='group/product h-64 sm:h-96 w-[20rem] sm:w-[30rem] relative flex-shrink-0'
		>
			<Link
				href={product.link}
				className='block group-hover/product:shadow-2xl '
			>
				<Image
					src={product.thumbnail}
					height='600'
					width='600'
					className='object-cover object-left-top absolute h-full w-full inset-0  '
					alt={product.title}
				/>
			</Link>
		</motion.div>
	);
};

export default HeroParallax;
