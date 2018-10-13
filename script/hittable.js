function hitmenuClick (id) {
    let typeOfHittable;
    if (id === "humanoidWhole") {     
        typeOfHittable = humanoidWhole();
    } else if (id === "humanoidHigh") {
        typeOfHittable = humanoidHigh();
    } else if (id === "humanoidLow") {
        typeOfHittable = humanoidLow();
    } else if (id === "humanoidAimHead") {
        typeOfHittable = humanoidHead();
    } else if (id === "humanoidAimRightArm") {
        typeOfHittable = humanoidRightArm();
    } else if (id === "humanoidAimCenter") {
        typeOfHittable = humanoidCenter();
    } else if (id === "humanoidAimLeftArm") {
        typeOfHittable = humanoidLeftArm();
    } else if (id === "humanoidAimRightLeg") {
        typeOfHittable = humanoidRightLeg();
    } else if (id === "humanoidAimLeftLeg") {
        typeOfHittable = humanoidLeftLeg();
    }
    document.getElementById("humanoidResult").innerHTML = typeOfHittable;
}

const dice = {
    sides : 100,
    roll() {
        return Math.floor(Math.random() * this.sides)+1;
    }
}

function whatSide (num) {
    let checkForOdd = num % 2;
    let returnResult = (checkForOdd === 0) ? "Höger": "Vänster"; 
    return returnResult;
}

function paintHitArea (area,damage) {
    clearTheResults();
    document.getElementById("hitResult").style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    paintPalette(area,damage);
};

function clearTheResults () {
    var canvas = document.getElementById("canvasHitTable");
    var ctx = canvas.getContext("2d");
    ctx.clearRect (0,0,332,727);
    document.getElementById("hitResult").style.backgroundColor = "";
    document.getElementById("humanoidResult").innerHTML = "";
}

function areaOfFace () {
    let diceThrowResult = dice.roll();
    if (diceThrowResult<17) {
        return `Käke`;
    } else if (diceThrowResult<31) {
        return `${whatSide(diceThrowResult)} öga`;
    } else if (diceThrowResult<64) {
        return `${whatSide(diceThrowResult)} kind`;
    } else if (diceThrowResult<81) {
        return `Näsa`;
    } else if (diceThrowResult<91) {
        return `${whatSide(diceThrowResult)} öra`;
    } else if (diceThrowResult<101) {
        return `Mun`;
    }
}

function areaOfHand () {
    let diceThrowResult = dice.roll();
    if (diceThrowResult<41) {
        return `Fingrar`;
    } else if (diceThrowResult<56) {
        return `Tumme`;
    } else if (diceThrowResult<71) {
        return `Handflata`;
    } else if (diceThrowResult<91) {
        return `Knogar`;
    } else if (diceThrowResult<101) {
        return `Handled`;
    }
}

function protectionValue (area) {
    let krossDamage = 0;
    let huggDamage = 0;
    let stickDamage = 0;
        for (let i=1;i<5;i++) { //j<5 equals numbers of layers you can write menues to.
            krossDamage += damageMan[area][i].kross;
            huggDamage += damageMan[area][i].hugg;
            stickDamage += damageMan[area][i].stick;
        }
            if (krossDamage === 0 && huggDamage === 0 && stickDamage === 0) {
                    return `Inget skydd`;
            } else {
                    return `Skydd: ${krossDamage}/${huggDamage}/${stickDamage}`;
            }
}

function whatToDo (area,swedeArea, diceThrowResult) { 
    let returnString;
    let side = whatSide(diceThrowResult);
    let sideForPaint = (side === "Höger") ? "r": "l";
    
    switch (area) {
        case "face": returnString = `${swedeArea}: ${areaOfFace()} (${diceThrowResult})<br>${protectionValue(area)}`; paintHitArea(area,99); break;
        case "s": returnString = `${side} ${swedeArea} (${diceThrowResult})<br>${protectionValue(sideForPaint+area)}`; paintHitArea(sideForPaint+area,99); break;
        case "ua": returnString = `${side} ${swedeArea} (${diceThrowResult})<br>${protectionValue(sideForPaint+area)}`; paintHitArea(sideForPaint+area,99); break;
        case "e": returnString = `${side} ${swedeArea} (${diceThrowResult})<br>${protectionValue(sideForPaint+area)}`; paintHitArea(sideForPaint+area,99); break;
        case "la": returnString = `${side} ${swedeArea} (${diceThrowResult})<br>${protectionValue(sideForPaint+area)}`; paintHitArea(sideForPaint+area,99); break;
        case "h": returnString = `${side} ${swedeArea}: ${areaOfHand()} (${diceThrowResult})<br>${protectionValue(sideForPaint+area)}`; paintHitArea(sideForPaint+area,99); break;
        case "rh": returnString = `${swedeArea}: ${areaOfHand()} (${diceThrowResult})<br>${protectionValue(area)}`; paintHitArea(area,99); break;
        case "lh": returnString = `${swedeArea}: ${areaOfHand()} (${diceThrowResult})<br>${protectionValue(area)}`; paintHitArea(area,99); break;
        case "hip": returnString = `${side} ${swedeArea} (${diceThrowResult})<br>${protectionValue(sideForPaint+area)}`; paintHitArea(sideForPaint+area,99); break;
        case "t": returnString = `${side} ${swedeArea} (${diceThrowResult})<br>${protectionValue(sideForPaint+area)}`; paintHitArea(sideForPaint+area,99); break;
        case "k": returnString = `${side} ${swedeArea} (${diceThrowResult})<br>${protectionValue(sideForPaint+area)}`; paintHitArea(sideForPaint+area,99); break;
        case "c": returnString = `${side} ${swedeArea} (${diceThrowResult})<br>${protectionValue(sideForPaint+area)}`; paintHitArea(sideForPaint+area,99); break;
        case "f": returnString = `${side} ${swedeArea} (${diceThrowResult})<br>${protectionValue(sideForPaint+area)}`; paintHitArea(sideForPaint+area,99); break;
        default: returnString = `${swedeArea} (${diceThrowResult})<br>${protectionValue(area)}`; paintHitArea(area,99); break;
} return returnString;
}

function humanoidWhole () {
    let diceThrowResult = dice.roll();
    if (diceThrowResult<6) {
        return whatToDo("skull","Skalle",diceThrowResult);
    } else if (diceThrowResult<11) {
        return whatToDo("face","Ansikte",diceThrowResult);
    } else if (diceThrowResult<16) {
        return whatToDo("neck","Nacke",diceThrowResult);
    } else if (diceThrowResult<28) {
        return whatToDo("s","axel",diceThrowResult);
    } else if (diceThrowResult<34) {
        return whatToDo("ua","överarm",diceThrowResult);
    } else if (diceThrowResult<36) {
        return whatToDo("e","armbåge",diceThrowResult);
    } else if (diceThrowResult<40) {
        return whatToDo("la","underarm",diceThrowResult);
    } else if (diceThrowResult<44) {
        return whatToDo("h","hand",diceThrowResult);
    } else if (diceThrowResult<61) {
        return whatToDo("chest","Bröst",diceThrowResult);
    } else if (diceThrowResult<71) {
        return whatToDo("stomach","Mage",diceThrowResult);
    } else if (diceThrowResult<75) {
        return whatToDo("groin","Skrev",diceThrowResult);
    } else if (diceThrowResult<81) {
        return whatToDo("hip","höft",diceThrowResult);
    } else if (diceThrowResult<89) {
        return whatToDo("t","lår",diceThrowResult);
    } else if (diceThrowResult<91) {
        return whatToDo("k","knä",diceThrowResult);
    } else if (diceThrowResult<97) {
        return whatToDo("c","vad",diceThrowResult);
    } else if (diceThrowResult<101) {
        return whatToDo("f","fot",diceThrowResult);
    }
}

function humanoidHigh () {
    let diceThrowResult = dice.roll();
    if (diceThrowResult<16) {
        return whatToDo("skull","Skalle",diceThrowResult);
    } else if (diceThrowResult<31) {
        return whatToDo("face","Ansikte",diceThrowResult);
    } else if (diceThrowResult<46) {
        return whatToDo("neck","Nacke",diceThrowResult);
    } else if (diceThrowResult<58) {
        return whatToDo("s","axel",diceThrowResult);
    } else if (diceThrowResult<70) {
        return whatToDo("ua","överarm",diceThrowResult);
    } else if (diceThrowResult<74) {
        return whatToDo("e","armbåge",diceThrowResult);
    } else if (diceThrowResult<82) {
        return whatToDo("la","underarm",diceThrowResult);
    } else if (diceThrowResult<86) {
        return whatToDo("h","hand",diceThrowResult);
    } else if (diceThrowResult<96) {
        return whatToDo("chest","Bröst",diceThrowResult);
    } else if (diceThrowResult<101) {
        return whatToDo("stomach","Mage",diceThrowResult);
    }
}

function humanoidLow () {
    let diceThrowResult = dice.roll();
    if (diceThrowResult<07) {
        return whatToDo("la","underarm",diceThrowResult);
    } else if (diceThrowResult<13) {
        return whatToDo("h","hand",diceThrowResult);
    } else if (diceThrowResult<20) {
        return whatToDo("chest","Bröst",diceThrowResult);
    } else if (diceThrowResult<30) {
        return whatToDo("stomach","Mage",diceThrowResult);
    } else if (diceThrowResult<37) {
        return whatToDo("groin","Skrev",diceThrowResult);
    } else if (diceThrowResult<51) {
        return whatToDo("hip","höft",diceThrowResult);
    } else if (diceThrowResult<71) {
        return whatToDo("t","lår",diceThrowResult);
    } else if (diceThrowResult<79) {
        return whatToDo("k","knä",diceThrowResult);
    } else if (diceThrowResult<93) {
        return whatToDo("c","vad",diceThrowResult);
    } else if (diceThrowResult<101) {
        return whatToDo("f","fot",diceThrowResult);
    }
}

function humanoidHead () {
    let diceThrowResult = dice.roll();
    if (diceThrowResult<34) {
        return whatToDo("skull","Skalle",diceThrowResult);
    } else if (diceThrowResult<68) {
        return whatToDo("face","Ansikte",diceThrowResult);
    } else if (diceThrowResult<101) {
        return whatToDo("neck","Nacke",diceThrowResult);
    }
}


function humanoidRightArm () {
    let diceThrowResult = dice.roll();
    if (diceThrowResult<43) {
        return whatToDo("rs","Höger axel",diceThrowResult);
    } else if (diceThrowResult<65) {
        return whatToDo("rua","Höger överarm",diceThrowResult);
    } else if (diceThrowResult<73) {
        return whatToDo("re","Höger armbåge",diceThrowResult);
    } else if (diceThrowResult<87) {
        return whatToDo("rla","Höger underarm",diceThrowResult);
    } else if (diceThrowResult<101) {
        return whatToDo("rh","Höger hand",diceThrowResult);
    }
}

function humanoidLeftArm () {
    let diceThrowResult = dice.roll();
    if (diceThrowResult<43) {
        return whatToDo("ls","Vänster axel",diceThrowResult);
    } else if (diceThrowResult<65) {
        return whatToDo("lua","Vänster överarm",diceThrowResult);
    } else if (diceThrowResult<73) {
        return whatToDo("le","Vänster armbåge",diceThrowResult);
    } else if (diceThrowResult<87) {
        return whatToDo("lla","Vänster underarm",diceThrowResult);
    } else if (diceThrowResult<101) {
        return whatToDo("lh","Vänster hand",diceThrowResult);
    }
}

function humanoidCenter () {
    let diceThrowResult = dice.roll();
    if (diceThrowResult<34) {
        return whatToDo("chest","Bröst",diceThrowResult);
    } else if (diceThrowResult<68) {
        return whatToDo("stomach","Mage",diceThrowResult);
    } else if (diceThrowResult<101) {
        return whatToDo("groin","Skrev",diceThrowResult);
    }
}

function humanoidRightLeg () {
    let diceThrowResult = dice.roll();
    if (diceThrowResult<23) {
        return whatToDo("rhip","Höger höft",diceThrowResult);
    } else if (diceThrowResult<55) {
        return whatToDo("rt","Höger lår",diceThrowResult);
    } else if (diceThrowResult<67) {
        return whatToDo("rk","Höger knä",diceThrowResult);
    } else if (diceThrowResult<89) {
        return whatToDo("rc","Höger vad",diceThrowResult);
    } else if (diceThrowResult<101) {
        return whatToDo("rf","Höger fot",diceThrowResult);
    }
}

function humanoidLeftLeg () {
    let diceThrowResult = dice.roll();
    if (diceThrowResult<23) {
        return whatToDo("lhip","Vänster höft",diceThrowResult);
    } else if (diceThrowResult<55) {
        return whatToDo("lt","Vänster lår",diceThrowResult);
    } else if (diceThrowResult<67) {
        return whatToDo("lk","Vänster knä",diceThrowResult);
    } else if (diceThrowResult<89) {
        return whatToDo("lc","Vänster vad",diceThrowResult);
    } else if (diceThrowResult<101) {
        return whatToDo("lf","Vänster fot",diceThrowResult);
    }
}