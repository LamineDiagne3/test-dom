// RECUPERATION DES  ELEMENT
var article = document.querySelectorAll('.item');
var ParentArticle = document.querySelector('.parent')
var prixtotal = document.getElementById('total-price');

//ORGANISATION DES ARTICLES

for (var i = 0 ; i < article.length ; i++){

    //CREATION DES BOUTONS ET GESTIONS DES PRIX
    var btnajout = article[i].children[3];
    var btnsupprimer = article[i].children[4];
    var btnFav = article[i].children[5];
    var btndiminue = article[i].children[1];
    var articleNum = article[i].children[2];
    var quantités = parseInt(articleNum.innertext);
    var prixunitaire = article[i].children[6];
    var prixarticle = parseInt(prixunitaire.innertext);
    var prixTotal = article[i].children[7].children[0];



    // AUGMENTATION,DIMINUTION,SUPRESSION,ET MISES EN FAVORIS DES ARTICLES

    btnajout.addEventListener('click', function(){

        quantités++;
        articleNum.innertext=quantités;
        prix.innertext= quantités*prixarticle;
        calSum ();
        console.log(article)
    });

    btndiminue.addEventListener('click', function(){
        if(quantités>0){
            quantités--;
            articleNum.innertext=quantités;
            prix.innertext = quantités*prixarticle;
            calSum();
        }
    });


    btnsupprimer.addEventListener('click', function(e){
        e.target.parentElement.remove();
        calSum();
    });


    const colors = ['pink' , 'white'];
    let currentIndex = 0;
    btnFav.addEventListener('click', function(){
        btnFav.style.backgroungcolors = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    })
}

//PRIX TOTAL DES ARTICLES

function calSum() {
    let total = 0;

    for (var i = 0; i < article.length; i++) {
        total += parseInt(article[i].querySelector('.price').innerText.replace('$', '')) * parseInt(article[i].querySelector('.quantity').innerText);
    }

}
