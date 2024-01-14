import BackgroundBlur from "@/components/BackgroundBlur";
import Section from "@/components/Section";
import Image from "next/image";
import { Alert } from "flowbite-react";
import Footer from "@/components/Footer";
import { cloudinaryV2 } from "@/lib/utils";

export default function Home() {
	type content = {
		src: string;
		text: string;
		link: string;
	};
	type SectionType = {
		title: string;
		contentArray: [content, content, content];
	};

	let sections: SectionType[] = [
		{
			title: "Campaña",
			content: [
				{
					src: "https://res.cloudinary.com/db83h8roo/image/upload/v1705169743/1/campa%C3%B1as/conecta/Carrusel_1_wadoro.png",
					text: "¡Explora la creatividad en cada diseño! Ofrezco campañas visuales únicas que destacan.",
					link: "/campaings",
				},
				{
					src: "https://res.cloudinary.com/db83h8roo/image/upload/v1705169757/1/campa%C3%B1as/gen%20SMART/KV_Devices_amigas_1200x1200_2_lw7r8i.png",
					text: "¡Explora la creatividad en cada diseño! Ofrezco campañas visuales únicas que destacan.",
					link: "/campaings",
				},
				{
					src: "https://res.cloudinary.com/db83h8roo/image/upload/v1705169747/1/campa%C3%B1as/EMPRENDE/bowls_wip56v.png",
					text: "¡Explora la creatividad en cada diseño! Ofrezco campañas visuales únicas que destacan.",
					link: "/campaings",
				},
			],
		},
		{
			title: "Ilustración",
			content: [
				{
					src: "https://res.cloudinary.com/db83h8roo/image/upload/v1705169686/3/Mesa_de_trabajo_9Zendaya_dbsxuf.jpg",
					text: "creación de ilustración vectorial personalizada a partir de una fotografía",
					link: "",
				},
				{
					src: "https://res.cloudinary.com/db83h8roo/image/upload/v1705169732/3/arte_hawexn.png",
					text: "creación de ilustración vectorial personalizada a partir de una fotografía",
					link: "",
				},
				{
					src: "https://res.cloudinary.com/db83h8roo/image/upload/v1705169732/3/Ilustracion_tipografica_lvm2iv.jpg",
					text: "creación de ilustración vectorial y creación de tipografía ",
					link: "",
				},
			],
		},
		{
			title: "posters",
			content: [
				{
					src: "/imagenes/5/19119935.png",
					text: "creación de ilustración vectorial y creación de tipografía",
					link: "",
				},
				{
					src: "/imagenes/5/panel-publicitario-parque.png",
					text: "creación de ilustración vectorial y creación de tipografía",
					link: "",
				},
				{
					src: "/imagenes/5/poster-23-2149852294.png",
					text: "creación de ilustración vectorial y creación de tipografía",
					link: "",
				},
			],
		},
		{
			title: "Multimedia",
			content: [
				{
					src: "https://res.cloudinary.com/db83h8roo/video/upload/v1705018536/b5hbl05qnqt4cdyeuae7.mp4",
					text: "Creacion de video multimedia",
					link: "",
				},
				{
					src: "https://res.cloudinary.com/db83h8roo/video/upload/v1705018532/e5neqsvhhunsqfi7bhmp.mp4",
					text: "Creacion de video multimedia",
					link: "",
				},
				{
					src: "https://res.cloudinary.com/db83h8roo/video/upload/v1705018530/h63ihdptdtnnhbwyvij3.mp4",
					text: "Creacion de video multimedia",
					link: "",
				},
			],
		},
		{
			title: "Editorial",
			content: [
				{
					src: "/imagenes/3/Mesa de trabajo 7Ale.jpg",
					text: "creación de ilustración vectorial y de portada de revista personalizada",
					link: "",
				},
				{
					src: "/imagenes/3/Michelle Juarez Vogue.jpg",
					text: "creación de ilustración vectorial y de portada de revista personalizada",
					link: "",
				},
				{
					src: "/imagenes/3/Mesa de trabajo 1Invitacion.jpg",
					text: "creación de ilustración vectorial y de portada de revista personalizada",
					link: "",
				},
			],
		},
	];
	return (
		<div className=''>
			<div
				className='flex flex-col bg-[url(/fondo_colores.png)] bg-cover bg-center bg-no-repeat bg-blend-multiply
							 md:bg-cover md:bg-center justify-center min-h-screen
							 lg:bg-cover lg:bg-center lg:bg-no-repeat '
			>
				<div className='flex flex-col md:flex-row items-center justify-center'>
					<div className=''>
						<Image
							src={"/perfil_karen.png"}
							alt='Picture of the author'
							width={2000}
							height={2000}
							priority
						/>
					</div>
					<div className=''>
						<h1
							className=' leading-none font-extrabold text-8xl text-center
										md:text-9xl md:leading md:text-left 
										lg:text-10xl
						'
						>
							PORT <br /> FOLIO{" "}
						</h1>
						<p
							className='lg:text-3xl lg:w-[30ch] pr-5 lg:text-left 
									   md:text-left
									   text-md w-[40ch] text-center
									   mt-5
						
						'
						>
							Hola, mi nombre es Karen Daniela Andino, una diseñadora gráfica,
							apasionada por la ilustración digital, los proyectos visuales y
							las soluciones creativas, en busca de aprender y crecer probando
							cosas nuevas.
						</p>
					</div>
				</div>
			</div>

			{sections.map((section, indx) => (
				<Section key={indx} section={section} />
			))}

			<Footer />
		</div>
	);
}
