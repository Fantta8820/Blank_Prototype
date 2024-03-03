<script lang="ts">
	import '../app.css';
</script>

<div class="navbar bg-gray-300">
    <div class="flex-1">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="btn btn-ghost text-xl">Blank</a>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Pesquisar" class="input input-bordered w-24 md:w-auto" />
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://i.pinimg.com/474x/77/5c/80/775c80b639d64ba0214705f5f59c8f44.jpg" />
          </div>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="justify-between">
              Perfil
              <span class="badge">Novo</span>
            </a>
          </li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a>Configurações</a></li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>

  <h1 class="text-6xl font-extrabold text-center mt-20">Bem Vindo ao Blank</h1>
  <h2 class="text-4xl font-bold text-center mt-8">Veja algumas das melhores aulas do dia</h2>

  <div class="flex flex-wrap justify-center">
    <div class="collapse collapse-arrow bg-gray-100 w-3/5 mx-2 mt-8">
        <input type="radio" name="my-accordion-2" /> 
        <div class="collapse-title text-xl font-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <div class="collapse-content"> 
            <a href="/test"><button class="btn btn-active btn-primary">Visualizar</button></a>
        </div>
    </div>
    <div class="collapse collapse-arrow bg-gray-100 w-3/5 mx-2 mt-8">
        <input type="radio" name="my-accordion-2" /> 
        <div class="collapse-title text-xl font-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <div class="collapse-content"> 
            <button class="btn btn-active btn-primary">Visualizar</button>
        </div>
    </div>
    <div class="collapse collapse-arrow bg-gray-100 w-3/5 mx-2 mt-8">
        <input type="radio" name="my-accordion-2" /> 
        <div class="collapse-title text-xl font-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <div class="collapse-content"> 
            <button class="btn btn-active btn-primary">Visualizar</button>
        </div>
    </div>
</div>
