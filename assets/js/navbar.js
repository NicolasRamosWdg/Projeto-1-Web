let navbar = `<nav class="navbar navbar-expand-lg rounded p-2 mt-3 mx-4 mt-lg-0 mx-lg-0">
    <a class="navbar-brand blog-name" href="./index.html"><img src="./assets/img/favicon.png" alt="Planeta Saturno">AstroGuias</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="nav navbar-nav align-items-lg-center">
            <li class="nav-item categories">
                <ul class="nav navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sistema Solar
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item text-wrap" href="./article1.html">O Mistério das Luas de Júpiter: Descobertas e Surpresas</a></li>
                          <li><a class="dropdown-item text-wrap" href="./article2.html">Mercúrio: O Planeta Mais Próximo do Sol</a></li>
                          <li><a class="dropdown-item text-wrap" href="./article7.html">Titã: A Lua Enigmática de Saturno</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Astros Distantes
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item text-wrap" href="./article3.html">Galáxias Distantes: Viagens pelo Universo Profundo</a></li>
                          <li><a class="dropdown-item text-wrap" href="./article4.html">Em Busca de Mundos Alienígenas: A Fascinação dos Exoplanetas</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Fenômenos Cósmicos
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item text-wrap" href="./article5.html">Supernovas: Explosões Estelares Além da Imaginação</a></li>
                          <li><a class="dropdown-item text-wrap" href="./article6.html">Buracos Negros: Os Devoradores de Luz do Universo</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link talk-to-us" href="./talk-to-us.html" role="button">
                    Fale Conosco
                </a>
            </li>
        </ul>
    </div>
</nav>`

document.write(navbar)