String.prototype.toCamelCase = function() { //Camelcase strings
    return this.replace(/^([A-Z])|\s(\w)/g, function(match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();        
    });
};

const formArmorPiece = document.forms[0];
const formArmor = document.forms[1];

formArmorPiece.addEventListener ('submit',submitTheArmorPiece,false);
formArmor.addEventListener ('submit',submitTheArmor,false);


function submitTheArmorPiece () {
    event.preventDefault();
    const armorPiece = [];

    armorPiece[0] = formArmorPiece.nameOfArmorPiece.value.toCamelCase();
    armorPiece[1] = formArmorPiece.nameOfArmorPiece.value;
    armorPiece[2] = [...formArmorPiece.areas].filter( (x => x.checked) ).map( (x => x.value) );
    armorPiece[3] = [...formArmorPiece.layer].filter( (x => x.checked) ).map( (x => x.value) );
    armorPiece[4] = material[formArmorPiece.material.value];

    console.log(JSON.stringify(armorPiece)); // convert object to JSON string and display in console
    return armorPiece;
}

function submitTheArmor () {
    event.preventDefault();
    const armor = [];

    armor[0] = formArmor.nameOfArmor.value;
    armor[1] = plainTextArrayArmorId;

    console.log(JSON.stringify(armor));
    return armor;
}
