import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
	type SectionType = {
		title: string;
		content: {
			src: string;
			text: string;
			link: string;
		};
	};
	let sections: SectionType[] = [
		{
			title: "Ilustración",
			content: {
				src: "",
				text: "",
				link: "",
			},
		},
		{
			title: "Ilustración",
			content: {
				src: "",
				text: "",
				link: "",
			},
		},
		{
			title: "Ilustración",
			content: {
				src: "",
				text: "",
				link: "",
			},
		},
		{
			title: "Ilustración",
			content: {
				src: "",
				text: "",
				link: "",
			},
		},
	];

	return (
		<div className='px-1'>
			<div
				className='flex flex-col bg-[url(/fondo_colores.png)] bg-cover bg-center bg-no-repeat
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
						<p className='lg:text-2xl lg:ml-[2%] lg:w-[35ch] pr-5'>
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
		</div>
	);
}
