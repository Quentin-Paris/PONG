
// gestion du déplacement de la ball
let largeur=$("#ball").width();
let gauche=parseInt($("#ball").css("left"));
let haut=parseInt($("#ball").css("top"));
alert(gauche)

setInterval(function(){
    gauche=gauche+1;
    haut=haut+0.5;
    $("#ball").css("left",gauche);
    $("#ball").css("top",haut);
}, 10);