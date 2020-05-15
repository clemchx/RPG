var longSword = new Weapon("Epée longue", 7, 2, 13, 40, "pas d'autres armes, attaques lentes, 1 tour d'inactivité après attaque", 2);
var sword = new Weapon("Epée", 4, 1, 7, 10, "pas d'inconvénients", 1);
var dagger = new Weapon("Dague", 2, 4, 13, 2, "13 points d'attaque quand attaque discrète mais plus que 3 points lors d'attaques de front", 1);
var shield = new Weapon("Bouclier", 4, 3, 5, 90, "ne peut pas être combiné avec l'arc ni le bâton de magicien mais marche très bien avec dague et épée", 1);
var bow = new Weapon("Arc", 5, 5, 15, 5, "peut être utilisé en attaques discrète comme de front", 1);
var wizardStaff = new Weapon("Bâton de magicien", 1, 7, 18, 5, "peut être utilisé en attaques discrète comme de front", 2);

var warHamer = new Weapon("Marteau de guerre", 10, 4, 15, 50, "compliqué à manier mais fait beaucoup de dégats", 2);
var dwarfShield = new Weapon("Bouclier nain", 10, 3, 8, 100, "gros bouclier, ne peut pas être combiné avec une autre arme", 2);
var dwarfMagicStaff = new Weapon("Bâton de mage nain", 4, 8, 20, 20, "bâton magique très puissant mais qui ne peut être contrôlé que par un nain", 2);

var elfishDagger = new Weapon("Dagues elfiques", 3, 6, 15, 10, "Dagues très efficace en attaque discrète mais aussi efficace en attaques de front", 2);
var elfishBow = new Weapon("Arc elfique", 6, 8, 17, 15, "Arc très puissant mais ne pouvant être utilisé que par un elfe", 2);
var elfishMagicStaff = new Weapon("Bâton de magie elfique", 2, 10, 20, 10, "Puissante magie elfique mais très dure à maitîser", 2);

var armes = [longSword, sword, dagger, shield, bow, wizardStaff, warHamer, dwarfShield, dwarfMagicStaff, elfishDagger, elfishBow, elfishMagicStaff];
