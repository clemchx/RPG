var leader, Thaek, Turdak, Fack, Gwindor, Niadamar, Edrahil, equipe, personnages;

function importer() {
	attrLeader = JSON.parse(localStorage.getItem("attrLeader"));
	leader = new Character(attrLeader.nom, attrLeader.pv, attrLeader.strength, attrLeader.defense, attrLeader.wisdom, attrLeader.money, attrLeader.equipment, attrLeader.inventory);
	attrThaek = JSON.parse(localStorage.getItem("attrThaek"));
	Thaek = new Character(attrThaek.nom, attrThaek.pv, attrThaek.strength, attrThaek.defense, attrThaek.wisdom, attrThaek.money, attrThaek.equipment, attrThaek.inventory);
	attrTurdak = JSON.parse(localStorage.getItem("attrTurdak"));
	Thaek = new Character(attrTurdak.nom, attrTurdak.pv, attrTurdak.strength, attrTurdak.defense, attrTurdak.wisdom, attrTurdak.money, attrTurdak.equipment, attrTurdak.inventory);
	attrFack = JSON.parse(localStorage.getItem("attrTurdak"));
	Fack = new Character(attrFack.nom, attrFack.pv, attrFack.strength, attrFack.defense, attrFack.wisdom, attrFack.money, attrFack.equipment, attrFack.inventory);
	
	attrGwindor = JSON.parse(localStorage.getItem("attrTurdak"));
	Gwindor = new Character(attrGwindor.nom, attrGwindor.pv, attrGwindor.strength, attrGwindor.defense, attrGwindor.wisdom, attrGwindor.money, attrGwindor.equipment, attrGwindor.inventory);
	attrNiadamar = JSON.parse(localStorage.getItem("attrTurdak"));
	Niadamar = new Character(attrNiadamar.nom, attrNiadamar.pv, attrNiadamar.strength, attrNiadamar.defense, attrNiadamar.wisdom, attrNiadamar.money, attrNiadamar.equipment, attrNiadamar.inventory);
	attrEdrahil = JSON.parse(localStorage.getItem("attrTurdak"));
	Edrahil = new Character(attrEdrahil.nom, attrEdrahil.pv, attrEdrahil.strength, attrEdrahil.defense, attrEdrahil.wisdom, attrEdrahil.money, attrEdrahil.equipment, attrEdrahil.inventory);
	
	attrEquipe = JSON.parse(localStorage.getItem("attrEquipe"));
	equipe = new Team(attrEquipe.leader, attrEquipe.fighter, attrEquipe.defenser, attrEquipe.destroyer);
	
	personnages = [leader, Thaek, Turdak, Fack, Gwindor, Niadamar, Edrahil];
}

importer();
