import Image from "next/image";

import "./loader.css";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-evenly p-2">
			<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
				<div className="circle">
					<Image
						className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
						src="/loader_logo.png"
						alt="LiSA Logo"
						width={200}
						height={200}
						priority
					/>
					<svg viewBox="0 0 100 100" className="loader-circle" xmlSpace="preserve">
						<circle cx="50" cy="50" r="40" />
					</svg>
				</div>
			</div>
			<p className={`my-4 text-sm opacity-50`}>Work in Progress...</p>

			<div className="text-center">
				<h2 className={`mb-3 text-3xl font-semibold`}>LiSA</h2>
				<p className={`m-0 opacity-50`}>
					A Native app for seamless Anime & Manga streaming, reading, and downloading.
					<br />
					<br />
					Enjoy your favorite series anytime, anywhere with ease.
				</p>
			</div>
			<a
				href="https://github.com/Cosmicoppai/LiSA"
				className="group rounded-lg border border-transparent p-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={28}
					height={29}
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-github"
				>
					<title>GitHub</title>
					<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
				</svg>
			</a>
		</main>
	);
}
