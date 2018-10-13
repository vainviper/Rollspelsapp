"use strict";
//THE VARIABLES
const nrOfBodyParts = 26;
let idNr = 1000;
const layerCheckId = {0:"skull",1:"face",2:"neck",3:"chest",4:"stomach",5:"ls",6:"lua",7:"le",8:"lla",9:"lh",10:"rs",11:"rua",12:"re",13:"rla",14:"rh",15:"groin",16:"lhip",17:"lt",18:"lk",19:"lc",20:"lf",21:"rhip",22:"rt",23:"rk",24:"rc",25:"rf"};

// THE CONSTRUCTORS
//Define the protection for the various materials
class Materials {
        constructor(kross, hugg, stick, thickness) {
                this.kross = kross;
                this.hugg = hugg;
                this.stick = stick;
                this.thickness = thickness;
        }
};

//Creates armor pieces
class ArmorConstruction {
        constructor(armor,name,areaCover,layer,material) {
                this.armorId = armor;
                this.originalArmorId = armor;
                this.name = name;
                this.areaCover = areaCover;
                this.layer = layer;
                this.kross = material.kross;
                this.hugg = material.hugg;
                this.stick = material.stick;   
                this.thick = material.thickness;
        }
};

//The Armorlist
let armorListArray = [];//Needed to take variables from constructor in to the rest of the code
let plainTextArrayName = [];//Needed to create the bottom div
let plainTextArrayLayer = [];
let plainTextArrayAreas = [];
let plainTextArrayWrite = [];
let plainTextArrayArmorId = [];
var damageMan = { 
    skull: {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    face:   {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    neck:   {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    chest: {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    stomach: {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    ls:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    lua:    {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    le:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    lla:    {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    lh:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    rs:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    rua:    {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    re:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    rla:    {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    rh:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    groin: {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    lhip:   {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    lt:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    lk:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    lc:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    lf:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    rhip:   {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    rt:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    rk:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    rc:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
    rf:     {1: {armorId: "", kross: 0, hugg: 0, stick: 0}, 
            2: {armorId: "", kross: 0, hugg: 0, stick: 0},
            3: {armorId: "", kross: 0, hugg: 0, stick: 0},
            4: {armorId: "", kross: 0, hugg: 0, stick: 0}},
};

// Add armor-piece links to the menues
ArmorConstruction.prototype.createDropdown = function () {
    for (let i=0;i<this.layer.length;i++) {  
        for(let j=0;j<this.areaCover.length;j++) {
            this.armorId = this.originalArmorId + idNr;
            this.listName = "";
            this.para = document.createElement("a");
            this.node = document.createTextNode(this.name);
            this.para.appendChild(this.node);
            this.para.id = this.armorId; //needed???
            this.para.href ="#";
            this.para.classList="clickProof " + "layer" + this.layer[i] + " armorPieceItem" + " hide" + " dropdown-item";
            let id = this.armorId;
            this.para.onclick = function (id) {writeMaterials(id);};
            this.location = this.areaCover[j] + "_drop_" + this.layer[i] + "_drop"; //skull_drop_1_drop
            this.element = document.getElementById(this.location);
            this.element.appendChild(this.para);
            this.armorVariables = {armorId:this.armorId, name:this.name, nameToAppearOnList: this.listName, kross:this.kross, hugg:this.hugg, stick:this.stick, isEquip:false, layer:this.layer[i], areas:this.areaCover};            
            armorListArray.push(this.armorVariables);
            idNr++;
        }
    }
};

//THE FUNCTIONS
function createArmorPiece (armor, name, areaCover, layer, material) {
        let tempArmorId = new ArmorConstruction (armor, name, areaCover, layer, material);
        tempArmorId.createDropdown(); 
};

function writeArmorSet (armorSets) {
        clearAllArmor();
        for (let i=0; i<armorSets.length;i+=2) {
                 let writeArmorLayer = armorSets[i+1];
                 let writeArmorId = armorSets[i];
                 let writeArmor = findArmor (writeArmorId, writeArmorLayer);
                 document.getElementById(writeArmor).click();   
        }       
 };

function findArmor (id, layer) {
        let layerSelect = `layer${layer}`;
        let armorSelect = document.getElementById("dropdownMenu").querySelectorAll(`a[id^=${id}]`);
        for (const value of armorSelect) {
                if (value.classList.contains(layerSelect)) {
                        return value.id;
                }
        }
};

//Function to pass the Id from the menu in to the rest of the program
function writeMaterials (id) {
        let armorInMenu = id.srcElement.id;
        for (const value of armorListArray) {
                if (armorInMenu == value.armorId) {
                        let armorIsSameAsArray = value;
                        isAlreadyThere(armorIsSameAsArray);
                }
        }
};

function isAlreadyThere (armorIsSameAsArray) { 
    if (armorIsSameAsArray.isEquip == true) { 
        toggleSelected (armorIsSameAsArray);
        removeFromDamageMan(armorIsSameAsArray); 
        removeFromBottomList(armorIsSameAsArray);
    } else {  
        toggleSelected (armorIsSameAsArray);
        checkForOtherArmor (armorIsSameAsArray);
        armorIsSameAsArray.isEquip = true;
        addToDamageMan(armorIsSameAsArray);
        addtoBottomList(armorIsSameAsArray);
    }
};

function addtoBottomList (armorIsSameAsArray) {
        let checkForArmorId = armorIsSameAsArray.armorId;
        let listName = armorIsSameAsArray.name;
        let layername = armorIsSameAsArray.layer;        
        let partToProcess = armorIsSameAsArray.areas; 
        let listArea = [];
        for (let i=0;i<partToProcess.length;i++) {
                let partToPush = partToProcess[i]
                switch (partToPush) {
                   case "skull": partToPush = partToPush.replace("skull","Sk")
                   case "face": partToPush = partToPush.replace("face","An")
                   case "neck": partToPush = partToPush.replace("neck","Na") 
                   case "chest": partToPush = partToPush.replace("chest","Br")
                   case "stomach": partToPush = partToPush.replace("stomach","Ma")
                   case "ls": partToPush = partToPush.replace("ls","")
                   case "lua": partToPush = partToPush.replace("lua","")
                   case "le": partToPush = partToPush.replace("le","")
                   case "lla": partToPush = partToPush.replace("lla","")
                   case "lh": partToPush = partToPush.replace("lh","")
                   case "rs": partToPush = partToPush.replace("rs","Ax")
                   case "rua": partToPush = partToPush.replace("rua","Öv")
                   case "re": partToPush = partToPush.replace("re","Ar")
                   case "rla": partToPush = partToPush.replace("rla","Un")
                   case "rh": partToPush = partToPush.replace("rh","Ha")
                   case "groin": partToPush = partToPush.replace("groin","Skr")
                   case "lhip": partToPush = partToPush.replace("lhip","")
                   case "lt": partToPush = partToPush.replace("lt","")
                   case "lk": partToPush = partToPush.replace("lk","")
                   case "lc": partToPush = partToPush.replace("lc","")
                   case "lf": partToPush = partToPush.replace("lf","")
                   case "rhip": partToPush = partToPush.replace("rhip","Hö")
                   case "rt": partToPush = partToPush.replace("rt","Lå")
                   case "rk": partToPush = partToPush.replace("rk","Kn")
                   case "rc": partToPush = partToPush.replace("rc","Va")
                   case "rf": partToPush = partToPush.replace("rf","Fo")
                }
        listArea.push(partToPush);
        partToPush = "";                 
        }
        listArea = listArea.join(" ");
        for (let i=0;i<listArea.length;i++) {
                listArea = listArea.replace(",,",",");
        }
        let idToSend = checkForArmorId;
        let nameToSend = listName;
        let layerToSend = layername;
        let areaToSend = listArea;
        for (let i=0; i<armorListArray.length;i++) {
                if (checkForArmorId == armorListArray[i].armorId) {
                        armorListArray[i].nameToAppearOnList = nameToSend;
                }
}
        plainTextArrayArmorId.push(idToSend.slice(0,-4));
        plainTextArrayArmorId.push(parseInt(layerToSend));
        plainTextArrayName.push (nameToSend);
        plainTextArrayLayer.push (layerToSend);
        plainTextArrayAreas.push (areaToSend);
        sortPlainTextArray (plainTextArrayName, plainTextArrayLayer, plainTextArrayAreas);          
};

function removeFromBottomList (armorIsSameAsArray) {
        let searchForName = armorIsSameAsArray.nameToAppearOnList;
        let searchForLayer = armorIsSameAsArray.layer
        for (let i=0;i<plainTextArrayName.length;i++) {  
                let searchInName = plainTextArrayName[i];  
                let searchInLayer = plainTextArrayLayer[i];           
                if (searchForName == searchInName && searchForLayer == searchInLayer) {
                        delete plainTextArrayArmorId[i];
                        delete plainTextArrayArmorId[i+1];
                        delete plainTextArrayName[i];
                        delete plainTextArrayLayer[i];
                        delete plainTextArrayAreas[i];
                }
        }  
        plainTextArrayArmorId = plainTextArrayArmorId.filter(function(string) {
                return string !== null || undefined || "";
        });                   
        plainTextArrayName = plainTextArrayName.filter(function(string) {
                return string !== null || undefined || "";
        });
        plainTextArrayLayer = plainTextArrayLayer.filter(function(string) {
                return string !== null || undefined || "";
        });
        plainTextArrayAreas = plainTextArrayAreas.filter(function(string) {
                return string !== null || undefined || "";
        });
        sortPlainTextArray (plainTextArrayName, plainTextArrayLayer, plainTextArrayAreas);
};

function sortPlainTextArray (plainTextArrayName,plainTextArrayLayer,plainTextArrayAreas) {
        let innerPlainTextArrayWrite = [];
        let middlePlainTextArrayWrite = [];
        let outerPlainTextArrayWrite = [];
        let extraPlainTextArrayWrite = [];
        for (let i=0; i<plainTextArrayLayer.length;i++) {
                if (plainTextArrayLayer[i] === "1") {
                innerPlainTextArrayWrite.push("<span class='plainTextText'>" + plainTextArrayName[i] + "</span>" + "<span class='plainTextLayer'>" 
                + plainTextArrayLayer + "</span>" + "<span class='plainTextArea'>" + " (" + plainTextArrayAreas[i] + ")" + "</span>")
                } else if (plainTextArrayLayer[i] === "2") {
                middlePlainTextArrayWrite.push("<span class='plainTextText'>" + plainTextArrayName[i] + "</span>" + "<span class='plainTextLayer'>" 
                + plainTextArrayLayer + "</span>" + "<span class='plainTextArea'>" + " (" + plainTextArrayAreas[i] + ")" + "</span>")
                } else if (plainTextArrayLayer[i] === "3") {
                outerPlainTextArrayWrite.push("<span class='plainTextText'>" + plainTextArrayName[i] + "</span>" + "<span class='plainTextLayer'>" 
                + plainTextArrayLayer + "</span>" + "<span class='plainTextArea'>" + " (" + plainTextArrayAreas[i] + ")" + "</span>")
                } else if (plainTextArrayLayer[i] === "4") {
                extraPlainTextArrayWrite.push("<span class='plainTextText'>" + plainTextArrayName[i] + "</span>" + "<span class='plainTextLayer'>" 
                + plainTextArrayLayer + "</span>" + "<span class='plainTextArea'>" + " (" + plainTextArrayAreas[i] + ")" + "</span>")
                }
        }
        document.getElementById("innerLayerArrayInsert").innerHTML = innerPlainTextArrayWrite.join(", ");
        document.getElementById("middleLayerArrayInsert").innerHTML = middlePlainTextArrayWrite.join(", ");      
        document.getElementById("outerLayerArrayInsert").innerHTML = outerPlainTextArrayWrite.join(", ");
        document.getElementById("extraLayerArrayInsert").innerHTML = extraPlainTextArrayWrite.join(", ");           
     };

function toggleSelected (armorIsSameAsArray) {
        let getLayer = parseInt(armorIsSameAsArray.layer);
        let clickedArmorId = armorIsSameAsArray.armorId.slice(0,-4); //Take away numbers from id
        let equippedElement = document.getElementById(armorIsSameAsArray.armorId);//
        let selectedArmor = document.getElementById("dropdownMenu").querySelectorAll('a[id^=' +clickedArmorId + ']');
        for (let i=0; i<selectedArmor.length;i++) {
                if (selectedArmor[i].classList.contains ("layer" + getLayer)) {        
                        selectedArmor[i].classList.toggle("greyedOut");
                        let selectParentMenu = selectedArmor[i].parentNode.parentNode.id;
                        document.getElementById(selectParentMenu + "_" + getLayer).classList.toggle("greyedOut");                                  
                }
        }
}

function checkForOtherArmor (armorIsSameAsArray) { //called from isAlreadyThere()
        let test = armorIsSameAsArray;
        let areasToCheck = armorIsSameAsArray.areas;
        let getLayer = parseInt(armorIsSameAsArray.layer);
        for (let i=0;i<areasToCheck.length;i++) {
                let otherArmor = damageMan[areasToCheck[i]][getLayer].armorId;    
                if (otherArmor !== "") {
                        let otherArmorToRemove = getOtherArmor(otherArmor); 
                        if (otherArmorToRemove !== null) {
                                toggleSelected (otherArmorToRemove);
                                removeFromDamageMan(otherArmorToRemove);
                                removeFromBottomList(otherArmorToRemove);                
                        }                     
                } 
        } 
}; 

function getOtherArmor (otherArmor) {
        let armorInMenu = otherArmor;
        for (let i=0;i<armorListArray.length;i++) {
                if (armorInMenu == armorListArray[i].armorId) {
                        let otherArmorToRemove = armorListArray[i]
                        return otherArmorToRemove;
                }
        } 
};

function addToDamageMan (armorIsSameAsArray) {
    let getLayer = parseInt(armorIsSameAsArray.layer);
    for (let i=0;i<armorIsSameAsArray.areas.length;i++) {
        let areaToAdd = armorIsSameAsArray.areas[i];
        damageMan[areaToAdd][getLayer].armorId = armorIsSameAsArray.armorId;
        damageMan[areaToAdd][getLayer].kross = armorIsSameAsArray.kross;
        damageMan[areaToAdd][getLayer].hugg = armorIsSameAsArray.hugg;
        damageMan[areaToAdd][getLayer].stick = armorIsSameAsArray.stick;
    }
    clearCanvas();
    writeToTheTable ();
};

function removeFromDamageMan (armorToRemove) {
        let getLayer = parseInt(armorToRemove.layer);
        armorToRemove.isEquip = false;
        for (let i=0;i<armorToRemove.areas.length;i++) {
                let areaToAdd = armorToRemove.areas[i]
                damageMan[areaToAdd][getLayer].armorId = "";
                damageMan[areaToAdd][getLayer].kross -= armorToRemove.kross;
                damageMan[areaToAdd][getLayer].hugg -= armorToRemove.hugg;
                damageMan[areaToAdd][getLayer].stick -= armorToRemove.stick;
            }
            clearCanvas();
            writeToTheTable ();
        };

function writeToTheTable (type=0) {
    for (let i=0;i<nrOfBodyParts;i++) {
        let chooseBodyPartId = layerCheckId[i]; //skull
        let tablePosition = chooseBodyPartId + "_input"; //skull_input
        let krossDamage = 0;
        let huggDamage = 0;
        let stickDamage = 0;
            for (let j=1;j<5;j++) { //j<5 equals numbers of layers you can write menues to.
                krossDamage += damageMan[chooseBodyPartId][j].kross;
                huggDamage += damageMan[chooseBodyPartId][j].hugg;
                stickDamage += damageMan[chooseBodyPartId][j].stick; 
                if (krossDamage === 0 && huggDamage === 0 && stickDamage === 0) {
                        document.getElementById(tablePosition).innerHTML = "";
                } else {              
                        document.getElementById(tablePosition).innerHTML = krossDamage + "/" + huggDamage + "/" + stickDamage;
                        let damage = huggDamage;
                        switch (type) {
                                case 0: damage = huggDamage; break;
                                case 1: damage = krossDamage; break;
                                case 2: damage = stickDamage; break;
                        }
                        paintPalette(chooseBodyPartId,damage);
                }
            }        
        }
};
function paintPalette(chooseBodyPartId,damage) {
        switch(damage) {
                                case 1: paintArea(chooseBodyPartId,"#ffdede"); break;
                                case 2: paintArea(chooseBodyPartId,"#ffd9d9"); break;
                                case 3: paintArea(chooseBodyPartId,"#ffd3d3"); break;
                                case 4: paintArea(chooseBodyPartId,"#ffc7c7"); break;
                                case 5: paintArea(chooseBodyPartId,"#ffbbbb"); break;
                                case 6: paintArea(chooseBodyPartId,"#ffa6a6"); break;
                                case 7: paintArea(chooseBodyPartId,"#ff9595"); break;
                                case 8: paintArea(chooseBodyPartId,"#ff8080"); break;
                                case 9: paintArea(chooseBodyPartId,"#ff7070"); break;
                                case 10: paintArea(chooseBodyPartId,"#ff5b5b"); break;
                                case 11: paintArea(chooseBodyPartId,"#c40000"); break;
                                case 12: paintArea(chooseBodyPartId,"#9d0000"); break;
                                case 13: paintArea(chooseBodyPartId,"#890000"); break;
                                case 14: paintArea(chooseBodyPartId,"#860000"); break;
                                case 15: paintArea(chooseBodyPartId,"#730000"); break;
                                case 16: paintArea(chooseBodyPartId,"#5d0000"); break;
                                case 99: paintArea(chooseBodyPartId,"green","canvasHitTable");break;
                                default: paintArea(chooseBodyPartId,"#470000"); break;
                        }
                };


function toggleTheTable (hoveredArea) {
        if (hoveredArea.id !== null) {
        for (let i=0;i<armorListArray.length;i++) {
                if (hoveredArea == armorListArray[i].armorId) {
                    let armorIsSameAsArray = armorListArray[i].areas;
                        for (let j=0;j<armorIsSameAsArray.length;j++) {
                                let gettingTableElement = document.getElementById("table_" + armorIsSameAsArray[j] + "_title");
                                gettingTableElement.classList.toggle('table_title_select');
                        }  
                }
        }
        }
};

function clearAllArmor () {
        for (let i=0;i<armorListArray.length;i++) {
                let armorIsSameAsArray = armorListArray[i];
                if (armorIsSameAsArray.isEquip == true) { 
                        toggleSelected (armorIsSameAsArray);
                        removeFromDamageMan(armorIsSameAsArray); 
                        removeFromBottomList(armorIsSameAsArray);
                    }
        }
};
function testCanvas(area,color) {
        paintArea(area,color);
}
function paintArea (area,color,canvas) {
        if (canvas === "canvasHitTable") {
                var canvas = document.getElementById("canvasHitTable");
        } else {
                var canvas = document.getElementById("canvas");
        }
                var ctx = canvas.getContext("2d");
                let coordArray = document.getElementById(area).coords.split(",");
                ctx.fillStyle = color;
                ctx.beginPath();
                for (let i=0;i<coordArray.length;i+=2) {
                        if (i===0) {
                                ctx.moveTo(coordArray[i],coordArray[i+1])
                        } else {
                                ctx.lineTo(coordArray[i],coordArray[i+1]);
                        }
                } ctx.fill();
};
function clearCanvas () {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect (0,0,332,727);
};