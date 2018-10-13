// FUNCTIONS FOR LOADING AND CLEARING THE TOPBARS
function loadTheTopBars (title,id,armorSet,display) {
        const topDiv = document.getElementById('armorsDiv');
        const childDiv = document.createElement('div');
        topDiv.appendChild(childDiv);
        childDiv.classList = 'clickProof';
        
        const childDivDesc = createElement('a',title);
        childDiv.appendChild(childDivDesc);
        childDivDesc.classList = 'clickProof dropdown-item armorTitle';
 
        this.armorSet = armorSet;
        for(let i=0;i<armorSet.length;i++) {
                 let armorSet = createElement('a', this.armorSet[i][0], this.armorSet[i][1]);
                 childDiv.appendChild(armorSet);
                 armorSet.classList = 'clickProof dropdown-item';
        }
 }
function changeTopMenu(menuSet) {
        removeAllArmorPieces();
        if(menuSet === 'generiskRustning') {
                menuSet = ['Minimal','Lätt','Medeltung','Tung'];
        } else {
                menuSet = [menuSet];
        }
        for(let armor of menuSet) {
                armor = document.getElementById(armor);      
                armor.classList.remove('hiddenAtStart');
                armor.classList.add('showedAtStart');
                
}
}

function removeAllArmorPieces () {
        let gatherArmorPieces = document.getElementsByClassName('armorPieceItem');
        for (const armor of gatherArmorPieces) {
               if (armor.classList.contains('showedAtStart')) {
                       armor.classList.remove('showedAtStart');
                       armor.classList.add('hiddenAtStart');
               } 
}
};

function createElement (tag,text,click) {
        const el = document.createElement(tag);
        el.textContent = text;
        el.href = '#';
        if (click) {
        el.onclick = function () {writeArmorSet(click);};
        }
        return el
}
function startUpTopBars () {
        loadTheTopBars('Minimal rustning','Minimal',armorSetsMinimal,'showedAtStart');
        loadTheTopBars('Lätt rustning','Lätt',armorSetsLight,'showedAtStart');
        loadTheTopBars('Medeltung rustning','Medeltung',armorSetsMedium,'showedAtStart');
        loadTheTopBars('Tung rustning','Tung',armorSetsHeavy,'showedAtStart');
        loadTheTopBars('Lankansk rustning','Lankan',armorSetsLankan,'hiddenAtStart');
        loadTheDropdowns('linne');
        loadTheDropdowns('tyg');
        loadTheDropdowns('lader');
        loadTheDropdowns('vadderatLader');
        loadTheDropdowns('hardatLader');
        loadTheDropdowns('forstarktLader');
        loadTheDropdowns('brons');
        loadTheDropdowns('ringbrynja');
        loadTheDropdowns('fjallpansar');
        loadTheDropdowns('metall');
}