
// gestion du déplacement de la ball
let largeur=$("#ball").width();
let gauche=parsInt($("#ball").css("left"));
let haut=parsInt($("#ball").css("top"));
alert(gauche)

setsetInterval(function(){
    gauche=gauche+1;
    haut=haut+0.5;
    $("#ball").css("left",gauche)
    $("#ball").css("top",haut)
}, 10);