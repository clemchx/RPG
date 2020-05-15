var nbtour = 0;

var pvEnemy = 150;
var defEnemy = 100;

var leader, Thaek, Turdak, Fack, Gwindor, Niadamar, Edrahil, equipe, personnages, persoEquipe;

var PvTeam ;
var defTeam ;

var random;
var target;
var x;
var pointEnemy;
var pointLeader;



function cible (){
	x = Math.floor(Math.random()*4);
	attr();	
	if (target.pv < 0) {
		cible();
	
	}
}
	
function attr (){
	target = personnages[x];
}

	
function tour (){
	pvTeam = (equipe.leader.pv + equipe.fighter.pv + equipe.defenser.pv + equipe.destroyer.pv);
	defTeam = (equipe.leader.defense + equipe.fighter.defense + equipe.defenser.defense + equipe.destroyer.defense);
	if ((pvEnemy <= 0)||(pvTeam <= 0)){
		if (pvEnemy <= 0){
			$("#nbTour").text("Vous avez gagné !");
			$("#attaque").css("visibility","hidden");
			}
		if (pvTeam <= 0){
			$("#nbTour").text("Vous avez perdu ...");
			$("#attaque").css("visibility","hidden");
			}
		}
	else {
		nbtour++;
		$("#nbTour").text(nbtour + "/")		
		}	
	}


function attaqueEnemy (){
    pvTeam = (equipe.leader.pv + equipe.fighter.pv + equipe.defenser.pv + equipe.destroyer.pv);
    cible()
    if (pvTeam > 0){ 
        random = Math.floor(Math.random()*6)+1;
            if (target.pv > 0) {
            target.defense = target.defense - random;
                if (target.defense > 0){
				$("#pvLeader").append("Il reste " + target.defense + " défenses à " + target.nom + ". ");
                } 
                if (target.defense < 0 && target.pv > 0){
                pointtarget = Math.abs(target.defense);
                target.pv = target.pv - pointtarget;
                $("#pvLeader").append("Il reste " + target.pv + " pv à " + target.nom + ". ");
                } 
                else {
					if (random = 1) {
                $("#pvLeader").append(target.nom + "est mort.")
					}
					else{
				$("#pvAllie1").append(target.nom + "est mort.")		
                }
               }
            }
             
            else{
			cible()
				if (pvTeam > 0){ 
				random = Math.floor(Math.random()*6)+1;
					if (target.pv > 0) {
					target.defense = target.defense - random;
						if (target.defense > 0){
						$("#pvLeader").append("Il reste " + target.defense + " défenses à " + target.nom + ". ");
						} 
						if (target.defense < 0 && target.pv > 0){
						pointtarget = Math.abs(target.defense);
						target.pv = target.pv - pointtarget;
						$("#pvLeader").append("Il reste " + target.pv + " pv à " + target.nom + ". ");
						} 
						else {
						$("#pvLeader").append(target.nom + " est mort.")
						}
					}
				}
			}
		} 
    else {
        $("#attaque").css("visibility","hidden");
    }
}



function attaqueAllié (){
	 if (defEnemy > 0) {
		random = Math.floor(Math.random()*6)+1;
		defEnemy = defEnemy - ((random)*4);
			if (defEnemy > 0) {
				$("#pvEnemy").text("Il reste " + defEnemy + " défenses à l'ennemi. ");
				}
			else{
				pointEnemy = Math.abs(defEnemy);
				pvEnemy = pvEnemy - pointEnemy;
				$("#pvEnemy").text("Il lui reste " + pvEnemy + " pv à l'ennemi. ");
			}
	}
	else {
		random = Math.floor(Math.random()*6)+1;
		pvEnemy = pvEnemy - ((random)*4);
		$("#pvEnemy").text("il reste " + pvEnemy + "  pv à l'ennemi. ");
		}
	}

				
function attaque1 (){
	if (defEnemy > 0) {
		random = Math.floor(Math.random()*6)+1;
		defEnemy = defEnemy - (random + random);
			if (defEnemy > 0) {
				$("#pvEnemy").text("Il reste " + defEnemy + " défenses à l'ennemi. ");
				}
			else{
				pointEnemy = Math.abs(defEnemy);
				pvEnemy = pvEnemy - pointEnemy;
				$("#pvEnemy").text("Il reste " + pvEnemy + " pv à l'ennemi. ");
			}
	}
	else {
		random = Math.floor(Math.random()*6)+1;
		pvEnemy = pvEnemy - (random + random);
		
		$("#pvEnemy").text("Il reste " + pvEnemy + "  pv à l'ennemi. ");
	}
		attaqueAllié();
		attaqueEnemy();
		tour();
	}

	
$("#CommencerCombat").click(tour);
$("#Attaque1").click(attaque1);

var leader, Thaek, Turdak, Fack, Gwindor, Niadamar, Edrahil, equipe, personnages, persoEquipe;
var attrLeader, attrThaek, attrTurdak, attrFack, attrGwindor, attrNiadamar, attrEdrahil, attrEquipe;

function importer() {
    attrLeader = JSON.parse(localStorage.getItem("attrLeader"));
    leader = new Character(attrLeader.nom, attrLeader.pv, attrLeader.strength, attrLeader.defense, attrLeader.wisdom, attrLeader.money, 0, attrLeader.equipment, attrLeader.inventory);
    
    attrThaek = JSON.parse(localStorage.getItem("attrThaek"));
    Thaek = new Character(attrThaek.nom, attrThaek.pv, attrThaek.strength, attrThaek.defense, attrThaek.wisdom, attrThaek.money, 0, attrThaek.equipment, attrThaek.inventory);
    attrTurdak = JSON.parse(localStorage.getItem("attrTurdak"));
    Turdak = new Character(attrTurdak.nom, attrTurdak.pv, attrTurdak.strength, attrTurdak.defense, attrTurdak.wisdom, attrTurdak.money, 0, attrTurdak.equipment, attrTurdak.inventory);
    attrFack = JSON.parse(localStorage.getItem("attrTurdak"));
    Fack = new Character(attrFack.nom, attrFack.pv, attrFack.strength, attrFack.defense, attrFack.wisdom, attrFack.money, 0, attrFack.equipment, attrFack.inventory);

attrGwindor = JSON.parse(localStorage.getItem("attrTurdak"));
    Gwindor = new Character(attrGwindor.nom, attrGwindor.pv, attrGwindor.strength, attrGwindor.defense, attrGwindor.wisdom, attrGwindor.money, 0, attrGwindor.equipment, attrGwindor.inventory);
    attrNiadamar = JSON.parse(localStorage.getItem("attrTurdak"));
    Niadamar = new Character(attrNiadamar.nom, attrNiadamar.pv, attrNiadamar.strength, attrNiadamar.defense, attrNiadamar.wisdom, attrNiadamar.money, 0, attrNiadamar.equipment, attrNiadamar.inventory);
    attrEdrahil = JSON.parse(localStorage.getItem("attrTurdak"));
    Edrahil = new Character(attrEdrahil.nom, attrEdrahil.pv, attrEdrahil.strength, attrEdrahil.defense, attrEdrahil.wisdom, attrEdrahil.money, 0, attrEdrahil.equipment, attrEdrahil.inventory);
    
    attrEquipe = JSON.parse(localStorage.getItem("attrEquipe"));
    equipe = new Team(attrEquipe.leader, attrEquipe.fighter, attrEquipe.defenser, attrEquipe.destroyer);
    
    personnages = [leader, Thaek, Turdak, Fack, Gwindor, Niadamar, Edrahil];
}
importer();
