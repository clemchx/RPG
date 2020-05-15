//classes

function Character(nom, pv, strength, defense, wisdom, money, slot, equipment, inventory){
	this.nom = nom;
	this.pv = pv;
	this.strength = strength;
	this.defense = defense;
	this.wisdom = wisdom;
	this.money = money;
	this.slot = slot;
	this.equipment = equipment;
	this.inventory = inventory;
}

function Weapon(nom, minimalStrength, minimalWisdom, Damage, Parry, disadvantages, size){
	this.nom = nom;
	this.minimalStrength = minimalStrength;
	this.minimalWisdom = minimalWisdom;
	this.Damage = Damage;
	this.Parry = Parry;
	this.disadvantages = disadvantages;
	this.size = size;
	
	// méthodes
	this.check = function(){
		if (leader.strength >= this.minimalStrength && leader.wisdom >= this.minimalWisdom && leader.slot>=this.size){
			leader.equipment.push(this);
			leader.slot = leader.slot - this.size;
		}
		else {
			alert("Vous ne pouvez pas prendre cette arme");
		}
		if (leader.slot == 0) {
			$("#validerEquipment").css("visibility", "visible");
		}
	}

}

function Team(leader, fighter, defenser, destroyer){
	this.leader = leader;
	this.fighter = fighter;
	this.defenser = defenser;
	this.destroyer = destroyer;
}

