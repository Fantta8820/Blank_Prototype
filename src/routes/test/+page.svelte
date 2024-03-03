<script lang="ts" src="../path/to/flowbite/dist/flowbite.min.js">
	import '../../app.css';
	let title = '';
	let content = '';
	loadContent('text');

	function loadContent(type: string) {
		switch (type) {
			case 'text':
				title = '<h1 class="text-4xl font-extrabold text-center">Título super foda (Texto)</h1>';
				content = `
						<p class="text-lg pt-12 pl-20 pr-20">Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

						<p class="text-lg pt-12 pl-20 pr-20">Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

						<p class="text-lg pt-12 pl-20 pr-20 pb-32">Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
							`;
				break;
			case 'video':
				title = '<h1 class="text-4xl font-extrabold text-center">Título super foda (Vídeo)</h1>';
				content = `
						<iframe class="mx-auto mt-12 text-center" width="761" height="428" src="https://www.youtube.com/embed/fOhJVGJwG9w" title="El Lobo siempre cuida a su loba..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
													
						<p class="text-lg pt-12 pl-20 pr-20 pb-12">Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
							`;
				break;
			case 'card':
				title = '<h1 class="text-4xl font-extrabold text-center">Título super foda (Card)</h1>';
				content = `<div class="card card-side bg-gray-300 shadow-xl mt-12 mx-20">
						<figure><img src="https://i.pinimg.com/474x/7d/78/5a/7d785ab2ddeb49f66484d0fe0b2e9886.jpg" alt="Movie"/></figure>
							<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<p>Lorem Ipsum</p>
							</div>
						</div>
						<div class="flex flex-wrap justify-center">
						<div class="card w-72 bg-gray-200 shadow-xl mt-16">
				<figure>
					<img
						src="https://pbs.twimg.com/media/F8p0t0yXoAEtYsk?format=jpg&name=small"
						alt="Shoes"
					/>
				</figure>
				<div class="flex flex-wrap justify-center space-x-4">
					<div class="card-body">
							<h2 class="card-title">
								Lorem Ipsum
								<div class="badge badge-secondary">Info</div>
							</h2>
							<p>Lorem Ipsum</p>
							<div class="card-actions justify-end">
								<div class="badge badge-outline">Lorem</div>
								<div class="badge badge-outline">Ipsum</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="card w-72 bg-gray-200 shadow-xl mt-16 ml-16">
				<figure>
					<img
						src="https://pbs.twimg.com/media/F8p0t0yXoAEtYsk?format=jpg&name=small"
						alt="Shoes"
					/>
				</figure>
				<div class="flex flex-wrap justify-center space-x-4">
					<div class="card-body">
							<h2 class="card-title">
								Lorem Ipsum
								<div class="badge badge-secondary">Info</div>
							</h2>
							<p>Lorem Ipsum</p>
							<div class="card-actions justify-end">
								<div class="badge badge-outline">Lorem</div>
								<div class="badge badge-outline">Ipsum</div>
							</div>
						</div>
					</div>
				</div>

				<div class="card w-72 bg-gray-200 shadow-xl mt-16 ml-16">
				<figure>
					<img
						src="https://pbs.twimg.com/media/F8p0t0yXoAEtYsk?format=jpg&name=small"
						alt="Shoes"
					/>
				</figure>
				<div class="flex flex-wrap justify-center space-x-4">
					<div class="card-body">
							<h2 class="card-title">
								Lorem Ipsum
								<div class="badge badge-secondary">Info</div>
							</h2>
							<p>Lorem Ipsum</p>
							<div class="card-actions justify-end">
								<div class="badge badge-outline">Lorem</div>
								<div class="badge badge-outline">Ipsum</div>
							</div>
						</div>
					</div>
				</div>
				</div>

				<div class="card card-side bg-gray-300 shadow-xl mt-12 mx-60">
						<figure><img src="https://i.pinimg.com/474x/7d/78/5a/7d785ab2ddeb49f66484d0fe0b2e9886.jpg" alt="Movie"/></figure>
							<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<p>Lorem Ipsum</p>
							</div>
						</div>

						<div class="card card-side bg-gray-300 shadow-xl mt-12 mx-60 mb-12">
						<figure><img src="https://i.pinimg.com/474x/7d/78/5a/7d785ab2ddeb49f66484d0fe0b2e9886.jpg" alt="Movie"/></figure>
							<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<p>Lorem Ipsum</p>
							</div>
						</div>
				`;
					break;
				default:
					title = '<h1 class="text-4xl font-extrabold text-center">Inválido</h1>';
			}
	}
</script>

<div class="flex justify-between">	
		<a href="../"><button class="btn btn-active btn-info mt-32 ml-32">Voltar</button></a>

	<div class="dropdown dropdown:left dropdown:end mt-32 mr-32 flex justify-end">
		<div tabindex="0" role="button" class="btn m-1">Modo</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				on:click={() => loadContent('text')}
			>
				Texto
			</button>
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				on:click={() => loadContent('video')}
			>
				Vídeo
			</button>
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				on:click={() => loadContent('card')}
			>
				Cards
			</button>
		</ul>
	</div>
</div>



<div class="mt-4">{@html [title, content]}</div>
