let article = `<section class="section article">
<h1 class="article__title text-center mb-5" id="title"></h1>
<div class="article__content">
<div class="article__author d-flex align-items-center column-gap-2 mb-5">
    <img class="article__author-img" id="img">
    <div class="article__author-content">
        <span class="article__authors-name" id="name"></span>
        <div class="article__date-time d-flex align-items-center">
            <span class="article__date" id="date"></span>
            <img class="" src="./assets/img/record-button.png" alt="Ponto preto" style="width: 10px; height: auto; margin: auto 10px;">
            <span class="article__time" id="time"></span>
        </div>
    </div>
</div>
<p class="article__text" id="text"></p>
</div>
</section>`

document.write(article)