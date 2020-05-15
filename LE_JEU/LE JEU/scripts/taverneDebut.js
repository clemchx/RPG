var pvLeader, strengthLeader, defenseLeader, wisdomLeader, moneyLeader, leader, nameLeader;

var Thaek = new Character("Thaek", 15, 10, 4, 0, 0, [warHamer], []);
var Turdak = new Character("Turdak", 20, 8, 4, 0, 0, [dwarfShield], []);
var Fack = new Character("Fack", 15, 5, 8, 0, 0, [dwarfMagicStaff], []);

var Gwindor = new Character("Gwindor", 12, 5, 7, 0, 0, [elfishDagger]);
var Niadamar = new Character("Niadamar", 15, 7, 8, 0, 0, [elfishBow]);
var Edrahil = new Character ("Edrahil", 18, 3, 10, 0, 0, [elfishMagicStaff]);

var personnages = [leader, Thaek, Turdak, Fack, Gwindor, Niadamar, Edrahil]

var equipe;

function beginCreation() {
	$("#beginCreation").css("visibility", "hidden");
	$("#creation").css("visibility", "visible");
}

function statsGenerator() {
	pvLeader = Math.floor(Math.random()*20) + 1;
	$("#pv").append("<p>" + pvLeader + "</p>");
	
	strengthLeader = Math.floor(Math.random()*10) + 1;
	$("#strength").append("<p>" + strengthLeader + "</p>");
	
	defenseLeader = Math.floor(Math.random()*10) + 1;
	$("#defense").append("<p>" + defenseLeader + "</p>");
	
	wisdomLeader = Math.floor(Math.random()*10) + 1;
	$("#wisdom").append("<p>" + wisdomLeader + "</p>");
	
	moneyLeader = Math.floor(Math.random()*100) + 1;
	$("#money").append("<p>" + moneyLeader + "</p>");
	
	$("#generator").css("visibility", "hidden");
	leader = new Character(0, pvLeader, strengthLeader, defenseLeader, wisdomLeader, moneyLeader, 2, [], []);
	$("#validerPersonnage").css("visibility", "visible");
	$("#valider").css("visibility", "visible");
}

function chooseEquipment(){
	nameLeader = $("#name").val();
	leader.nom = nameLeader;
	$("#nom").append("<p>" + nameLeader + "</p>");
	$("#name").css("visibility", "hidden");
	$("#validerPersonnage").css("visibility", "hidden");
	$("#equipment").css("visibility", "visible");
}

function beginStory(){
	$("#equipment").css("visibility", "hidden");
	$("#validerEquipment").css("visibility", "hidden");
	$("#creation").css("visibility", "hidden");
	$("#valider").css("visibility", "hidden");
	$("#start").css("visibility", "visible");
}

function start() {
	$("#taverne").css("visibility", "visible");
	$("#start").css("visibility", "hidden");
	//texte narratif
}

function equipeBourrin() {
	equipe = new Team(leader, Thaek, Turdak, Fack);
	Village();
	//texte narratif
}

function equipeSneak() {
	equipe = new Team(leader, Gwindor, Niadamar, Edrahil);
	Village();
	//texte narratif
}

function equipeMixe() {
	//texte narratif
	
	Village();
}

function Village() {
	$("#taverne").css("visibility", "hidden");
	$("#getOutTaverne").css("visibility", "visible");
}

function sortieVillage() {
	localStorage.setItem("attrLeader", JSON.stringify(leader));
	localStorage.setItem("attrThaek", JSON.stringify(Thaek));
	localStorage.setItem("attrTurdak", JSON.stringify(Turdak));
	localStorage.setItem("attrFack", JSON.stringify(Fack));
	localStorage.setItem("attrGwindor", JSON.stringify(Gwindor));
	localStorage.setItem("attrNiadamar", JSON.stringify(Niadamar));
	localStorage.setItem("attrEdrahil", JSON.stringify(Edrahil));
	localStorage.setItem("attrEquipe", JSON.stringify(equipe));
}

$("#beginCreation").click(beginCreation);
$("#generator").click(statsGenerator);
$("#validerPersonnage").click(chooseEquipment);
$("#equipment button").click(function(){
	var index = $("#equipment button").index(this);
	var armeChoisie = armes[index];
	armeChoisie.check();
});
$("#validerEquipment").click(beginStory);
$("#start").click(start);
$("#equipeBourrin").click(equipeBourrin);
$("#equipeSneak").click(equipeSneak);
$("#equipeMixe").click(equipeMixe);
$("#getOutTaverne").click(sortieVillage);
