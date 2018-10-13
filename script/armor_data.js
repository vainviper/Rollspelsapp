//Material Objects
const material = {
        tyg: {kross:1,hugg:1,stick:1,thickness:"thin"},
        tjocktTyg: {kross:2,hugg:2,stick:2,thickness:"thin"},
        lader: {kross:2,hugg:4,stick:3,thickness:"thin"},
        vadderatTyg: {kross:5,hugg:3,stick:2,thickness:"thin"},
        hardatLader: {kross:4,hugg:5,stick:4,thickness:"thic"},
        forstarktLader: {kross:3,hugg:6,stick:4,thickness:"hard"},
        ringbrynja: {kross:2,hugg:8,stick:5,thickness:"thic"},
        fjallpansar: {kross:5,hugg:9,stick:4,thickness:"hard"},
        metall: {kross:6,hugg:10,stick:6,thickness:"hard"},
        linne: {kross:1,hugg:1,stick:1,thickness:"thin"},
        brons: {kross:4,hugg:8,stick:4,thickness:"hard"}
}

//Loads the menues when started - define the armor pieces here. There is a bug in here. Cant use same beginning of id eg. laderhatt and laderhatta or tygtunika and tygtunikaMedHuva
function loadTheDropdowns (material) {
        for (let i=0;i<armorObjectPieces[material].length;i++) {
        createArmorPiece(armorObjectPieces[material][i][0], armorObjectPieces[material][i][1], armorObjectPieces[material][i][2], armorObjectPieces[material][i][3], armorObjectPieces[material][i][4])
        }
}

let armorObjectPieces = {
linne:[                 //LINNE
        ["linneHuva","Linnehuva",["skull","neck"],["1","2","3"],material.linne],
        ["linneskjortaUtanArmar","Linneskjorta utan armar",["ls","rs","rua","lua","chest","stomach","lhip","rhip","groin"],["1","2","3"],material.linne],
        ["kortaLinneHosor","Korta linnehosor",["lhip","rhip","groin","lt","rt"],["1","2","3"],material.linne]
],
tyg:[                   //TYG
        ["axelmantelMHuvaAvTyg","Axelmantel med tyghuva",["skull","neck","ls","rs","lua","rua","chest"],["1","2","3"],material.tyg],
        ["fotlindaAvTyg","Fotlinda av tyg",["lc","rc","lf","rf"],["1","2","3"],material.tyg],
        ["knabyxorAvTyg","Knäbyxor av tyg",["lhip","rhip","groin","lt","rt","lk","rk"],["1","2","3"],material.tyg],                            
        ["kortTyghuva","Kort tyghuva",["skull","neck"],["1","2","3"],material.tyg],                            
        ["langarmadTygskjorta","Långärmad tygskjorta",["ls","rs","lua","rua","le","re","lla","rla","chest","stomach","lhip","rhip","groin"],["1","2","3"],material.tyg],    
        ["langtunikaMHuvaAvTyg","Långtunika m. huva av tyg",["skull","neck","ls","rs","lua","rua","le","re","lla","rla","chest","stomach","lhip","rhip","groin","lt","rt"],["1","2","3"],material.tyg], 
        ["langTygtunika","Lång tygtunika",["ls","rs","lua","rua","le","re","lla","rla","chest","stomach","lhip","rhip","groin","lt","rt"],["1","2","3"],material.tyg],                            
        ["overrockAvTyg","Överrock av tyg",["ls","rs","chest","stomach","lhip","rhip","groin","lt","rt","lk","rk"],["1","2","3"],material.tyg],                           
        ["rockMedHuvaAvTyg","Rock m. huva av tyg ",["skull","neck","ls","rs","lua","rua","le","re","lla","rla","chest","stomach","lhip","rhip","groin","lt","rt","lk","rk","lc","rc"],["1","2","3"],material.tyg], 
        ["sandaler","Sandaler",["lf","rf"],["1","2","3"],material.tyg],    
        ["tjockLangtunikaAvTyg","Tjock långtunika av tyg",["ls","rs","lua","rua","le","re","lla","rla","chest","stomach","lhip","rhip","groin","lt","rt"],["1","2","3"],material.tjocktTyg], 
        ["tygbyxor","Tygbyxor",["lhip","rhip","groin","lt","rt","lk","rk","lc","rc"],["1","2","3"],material.tyg],                           
        ["tyghosa","Tyghosa",["lhip","rhip","groin","lt","rt","lk","rk","lc","rc"],["1","2","3","4"],material.tyg],
        ["tyghuva","Tyghuva",["skull","neck"],["1","2","3"],material.tyg],                           
        ["tygkalott","Tygkalott",["skull"],["1","2","3"],material.tyg],                           
        ["tygskjorta","Tygskjorta",["ls","rs","lua","rua","chest","stomach","lhip","rhip","groin"],["1","2","3"],material.tyg], 
        ["tygtunika","Tygtunika",["ls","rs","lua","rua","chest","stomach","lhip","rhip","groin","lt","rt"],["1","2","3"],material.tyg],
        ["tygtunikMedHuva","Tygtunika med huva",["skull","neck","ls","rs","lua","rua","chest","stomach","lhip","rhip","groin","lt","rt"],["1","2","3"],material.tyg],
        ["vadlindorAvTyg","Vadlindor av tyg",["lc","rc"],["1","2","3"],material.tyg]
],
lader:[                 //LÄDER
        ["benkladerAvLader","Benkläder av läder",["lt","rt","lk","rk","lc","rc","lf","rf"],["1","2","3"],material.lader], 
        ["hoftlosaBenkladerAvLader","Höftlösa benkläder av läder",["lt","rt","lk","rk","lc","rc"],["1","2","3"],material.lader],                           
        ["hoftlosaFotBenkladerAvLader","Höftlösa fot/benkläder av läder",["lt","rt","lk","rk","lc","rc","lf","rf"],["1","2","3","4"],material.lader],                            
        ["hogaLaderstovlar","Höga läderstövlar",["lk","rk","lc","rc","lf","rf"],["2","3"],material.lader],                           
        ["knabyxorAvLader","Knäbyxor av läder",["lhip","rhip","groin","lt","rt","lk","rk"],["1","2","3"],material.lader],                           
        ["laderbyxor","Läderbyxor",["lhip","rhip","groin","lt","rt","lk","rk","lc","rc"],["1","2","3"],material.lader],                           
        ["laderbyxaMedFot","Läderbyxor med fot",["lhip","rhip","groin","lt","rt","lk","rk","lc","rc","lf","rf"],["1","2","3"],material.lader],                           
        ["laderhandskar","Läderhandskar",["lh","rh"],["1","2","3"],material.lader],                           
        ["laderhatt","Läderhatt",["skull"],["1","2","3"],material.lader],                           
        ["ladehatta","Läderhätta",["skull","neck"],["1","2","3"],material.lader],                           
        ["laderhuva","Läderhuva",["skull","neck","ls","rs"],["1","2","3"],material.lader],                           
        ["laderskor","Läderskor",["lf","rf"],["1","2","3"],material.lader],    
        ["laderstovlar","Läderstövlar",["lc","rc","lf","rf"],["1","2","3"],material.lader],                           
        ["ladertunika","Lädertunika",["ls","rs","chest","stomach","lhip","rhip","groin","lt","rt"],["1","2","3"],material.lader],                           
        ["ladervast","Läderväst",["ls","rs","chest","stomach"],["1","2","3"],material.lader],                           
        ["langarmadLaderskjorta","Långärmad läderskjorta",["ls","rs","lua","rua","le","re","lla","rla","chest","stomach","lhip","rhip","groin"],["1","2","3"],material.lader],                           
        ["underarmsskenorAvLader","Underarmsskenor av läder",["lla","rla"],["3","4"],material.lader]
],                        
vadderatLader:[         //VADDERAT LÄDER
    ["vadderadArmlosSkjorta","Vadderad ärmlös skjorta",["ls","rs","lua","rua","chest","stomach"],["1","2","3"],material.vadderatTyg],                           
    ["vadderadBrynja","Vadderad brynja",["ls","rs","lua","rua","chest","stomach","lhip","rhip","groin","lt","rt"],["1","2","3"],material.vadderatTyg],                           
    ["vadderadeByxor","Vadderade byxor",["lhip","rhip","groin","lt","rt","lk","rk","lc","rc"],["1","2","3","4"],material.vadderatTyg],    
    ["vadderadGambeson","Vadderad gambeson",["ls","rs","lua","rua","chest","stomach","lhip","rhip","groin","lt","rt"],["1","2","3"],material.vadderatTyg],                           
    ["vadderaHatta","Vadderad hätta",["skull","neck"],["1","2","3"],material.vadderatTyg],                           
    ["vadderadHuva","Vadderad huva",["skull","neck","ls","rs"],["1","2","3"],material.vadderatTyg],                           
    ["vadderadLangarmadSkjorta","Vadderad långärmad skjorta",["ls","rs","lua","rua","le","re","lla","rla","chest","stomach","lhip","rhip","groin"],["1","2","3"],material.vadderatTyg],    
    ["vadderadLangtunika","Vadderad långtunika",["ls","rs","lua","rua","le","re","lla","rla","chest","stomach","lhip","rhip","groin","lt","rt"],["1","2","3"],material.vadderatTyg],                           
    ["vadderadSkjorta","Vadderad skjorta",["ls","rs","lua","rua","chest","stomach"],["1","2","3"],material.vadderatTyg],                           
    ["vadderadTunika","Vadderad tunika",["ls","rs","lua","rua","chest","stomach","lhip","rhip","groin","lt","rt"],["1","2","3"],material.vadderatTyg],                           
    ["vadderadVast","Vadderad väst",["ls","rs","chest","stomach"],["1","2","3"],material.vadderatTyg]                           
],
hardatLader:[           //HÄRDAT LÄDER
    ["armbagsskyddAvHardatLader","Armbågsskydd av härdat läder",["le","re"],["3","4"],material.hardatLader],                           
    ["axelskyddAvHardatLader","Axelskydd av härdat läder",["ls","rs"],["3","4"],material.hardatLader],                           
    ["benskenorAvHardatLader","Benskenor av härdat läder",["lc","rc"],["2","3","4"],material.hardatLader],                           
    ["brostplatAvHardatLader","Bröstplåt av härdat läder",["ls","rs","chest","stomach"],["1","2","3","4"],material.hardatLader],                           
    ["harneskAvHardatLader","Harnesk av härdat läder",["chest","stomach"],["1","2","3","4"],material.hardatLader],                           
    ["overarmsskenorAvHardatLader","Överarmsskenor av härdat läder",["lua","rua"],["3","4"],material.hardatLader],                           
    ["underarmsskenorAvHardatLader","Underarmsskenor av härdat läder",["lla","rla"],["3","4"],material.hardatLader]                        
],
forstarktLader:[        //FÖRSTÄRKT LÄDER
    ["brynjaAvForstarktLader","Brynja av förstärkt läder",["ls","rs","lua","rua","chest","stomach","lhip","rhip","groin","lt","rt","lk","rk"],["2","3"],material.forstarktLader],                            
    ["handskarAvForstarktLader","Handskar av förstärkt läder",["lh","rh"],["3"],material.forstarktLader],                            
    ["hjalmAvForstarktLader","Hjälm av förstärkt läder",["skull"],["3"],material.forstarktLader],                           
    ["hoftlosaFotBenkladerAvForstarktLader","Höftlösa fot/benkläder av förstärkt läder",["lt","rt","lk","rk","lc","rc","lf","rf"],["1","2","3"],material.forstarktLader],                            
    ["huvaAvForstarktLader","Huva av förstärkt läder",["skull","neck"],["2","3"],material.forstarktLader],                           
    ["kortHuvaAvForstarktLader","Kort huva av förstärkt läder",["skull","neck"],["2","3"],material.forstarktLader],                            
    ["skjortaAvForstarktLader","Skjorta av förstärkt läder",["ls","rs","lua","rua","chest","stomach","lhip","rhip","groin"],["2","3"],material.forstarktLader]                            
],  
brons:[                 //BRONS
    ["bronshjalm","Bronshjälm",["skull","neck"],["1","2","3"],material.brons], 
    ["bronsharneskMLaderinlagg","Bronsharnesk med läderinlägg",["ls","rs","rua","lua","chest","stomach","lhip","rhip","groin"],["1","2","3"],material.brons] 
],
ringbrynja:[            //RINGBRYNJA
    ["armlosRingbrynja","Ärmlös ringbrynja",["ls","rs","lua","rua","chest","stomach","lhip","rhip","groin"],["2","3"],material.ringbrynja],                        
    ["hoftlosaRingbrynjebyxor","Höftlösa ringbrynjebyxor",["lt","rt","lk","rk","lc","rc","lf","rf"],["2","3"],material.ringbrynja],                        
    ["ringbrynjehuva","Ringbrynjehuva",["skull","neck"],["2","3"],material.ringbrynja]                        
],
fjallpansar:[           //FJÄLLPANSAR
    ["armlosFjallpansarbrynja","Ärmlös fjällpansarbrynja",["ls","rs","lua","rua","chest","stomach","lhip","rhip","groin"],["2","3"],material.fjallpansar],                            
    ["brynjaAvFjallpansar","Brynja av fjällpansar",["ls","rs","lua","rua","chest","stomach","lhip","rhip","groin","lt","rt"],["2","3","4"],material.fjallpansar],                            
    ["fjallpansarhuva","Fjällpansarhuva",["skull","neck","ls","rs"],["2","3"],material.fjallpansar],                            
    ["hoftlosaFotBenkladerAvFjallpansar","Höftlösa fot/benkläder av fjällpansar",["lt","rt","lk","rk","lc","rc","lf","rf"],["1","2","3"],material.fjallpansar],                            
    ["huvaAvFjallpansar","Huva av fjällpansar",["skull","neck","ls","rs"],["2","3"],material.fjallpansar],                           
    ["langFjallpansarbrynja","Lång fjällpansarbrynja",["ls","rs","lua","rua","chest","stomach","lhip","rhip","groin","lt","rt","lk","rk"],["3","4"],material.fjallpansar]                           
],
metall:[                //METALL
    ["armbagsskyddAvStal","Armbågsskydd av stål",["le","re"],["3","4"],material.metall],                           
    ["axelskyddAvStal","Axelskydd av stål",["ls","rs"],["3","4"],material.metall],                           
    ["benskenorAvStal","Benskenor av stål",["lc","rc"],["2","3","4"],material.metall],                           
    ["brostplatAvStal","Bröstplåt av stål",["chest"],["3"],material.metall],                           
    ["fotbekladnadAvStal","Fotbeklädnad av stål",["lf","rf"],["3","4"],material.metall],                           
    ["handskarAvStal","Handskar av stål",["lh","rh"],["3"],material.metall],                           
    ["helhjalmAvStal","Helhjälm av stål",["skull","face","neck"],["3"],material.metall],                           
    ["halvhjalmAvStal","Halvhjälm av stål",["skull"],["3"],material.metall],                           
    ["knaskyddAvStal","Knäskydd av stål",["lk","rk"],["3","4"],material.metall],                           
    ["overarmsskenorAvStal","Överarmsskenor av stål",["lua","rua"],["3","4"],material.metall],                           
    ["stalharnesk","Stålharnesk",["chest","stomach"],["3"],material.metall],                           
    ["underarmsskenaAvStal","Underarmsskenor av stål",["lla","rla"],["3","4"],material.metall]
]
};

//CREATE ARMOR SETS ARRAYS
const armorSetsMinimal = [    
        ['Utan rustning A',["tygtunika",1,"fotlindaAvTyg",1]],
        ['Utan rustning B',["tygtunika",1,"tyghosa",2,"fotlindaAvTyg",1]],
        ['Utan rustning C',["langtunikaMHuvaAvTyg",1,"vadlindorAvTyg",1,"laderskor",1]],
        ['Utan rustning D',["rockMedHuvaAvTyg",1,"laderskor",1]],
        ['Utan rustning E',["langarmadTygskjorta",1,"tyghosa",2,"laderskor",1]],
        ['Utan rustning F',["tygskjorta",1,"tyghosa",2,"laderstovlar",1]],
        ['Utan rustning G',["langarmadTygskjorta",1,"ladertunika",2,"tyghosa",3,"laderskor",1]],
        ['Utan rustning H',["tygskjorta",1,"tjockLangtunikaAvTyg",3,"tyghosa",2,"laderskor",1]],
        ['Utan rustning I',["langarmadTygskjorta",1,"ladervast",2,"tyghosa",2,"laderskor",1]]
        ];
const armorSetsLight = [
        ['Lätt rustning A',["laderhatt",1,"vadderadSkjorta",1,"ladervast",2,"knabyxorAvTyg",1,"laderstovlar",1]],
        ['Lätt rustning B',["laderhatt",1,"kortTyghuva",2,"tygskjorta",1,"ladertunika",3,"tygbyxor",2,"benkladerAvLader",1]],
        ['Lätt rustning C',["tyghuva",2,"ladehatta",3,"langarmadTygskjorta",1,"vadderadVast",3,"laderhandskar",1,"tyghosa",2,"laderbyxor",3,"laderskor",1]],
        ['Lätt rustning D',["laderhatt",1,"vadderadSkjorta",1,"vadderadVast",2,"vadderadeByxor",1,"laderskor",1]],
        ['Lätt rustning E',["tygkalott",1,"langarmadTygskjorta",1,"vadderadBrynja",2,"tyghosa",3,"laderskor",1]],
        ['Lätt rustning F',["vadderadHuva",1,"vadderadLangarmadSkjorta",2,"vadderadeByxor",1,"laderskor",1]],
        ['Lätt rustning G',["axelmantelMHuvaAvTyg",1,"vadderadLangtunika",3,"langarmadTygskjorta",2,"tyghosa",1,"laderstovlar",2]],
        ['Lätt rustning H',["vadderaHatta",1,"halvhjalmAvStal",3,"vadderadSkjorta",1,"tygskjorta",2,"underarmsskenorAvHardatLader",3,"laderhandskar",3,"tyghosa",1
                ,"laderbyxor",3,"laderskor",1]],
        ['Lätt rustning I',["tyghuva",1,"hjalmAvForstarktLader",3,"overrockAvTyg",1,"overrockAvTyg",2,"axelskyddAvHardatLader",4,"benkladerAvLader",3
                ,"benskenorAvHardatLader",4,"laderskor",1]],
        ['Lätt rustning J',["tyghuva",1,"hjalmAvForstarktLader",3,"vadderadTunika",1,"vadderadGambeson",2,"underarmsskenorAvHardatLader",4,"laderhandskar",3
                ,"tyghosa",4,"knabyxorAvLader",3,"hogaLaderstovlar",2]],
        ['Lätt rustning K',["laderhuva",3,"langarmadTygskjorta",1,"langarmadLaderskjorta",2,"armbagsskyddAvHardatLader",4,"underarmsskenorAvHardatLader",4,"laderhandskar",3
                ,"tyghosa",3,"hoftlosaBenkladerAvLader",1,"benskenorAvStal",4,"laderskor",3]],
        ['Lätt rustning L',["vadderadHuva",1,"halvhjalmAvStal",3,"vadderadSkjorta",2,"overrockAvTyg",3,"harneskAvHardatLader",4,"underarmsskenorAvHardatLader",4
                ,"laderhandskar",3,"tyghosa",1,"vadderadeByxor",2,"laderskor",3]]
        ];

const armorSetsMedium = [                                
        ['Medeltung rustning A',["tyghuva",1,"kortHuvaAvForstarktLader",2,"tygskjorta",2,"skjortaAvForstarktLader",3,"handskarAvForstarktLader",3,"tyghosa",1
                ,"hoftlosaFotBenkladerAvForstarktLader",2]],
        ['Medeltung rustning B',["ladehatta",1,"fjallpansarhuva",3,"langTygtunika",1,"armlosFjallpansarbrynja",2,"underarmsskenorAvLader",4,"tyghosa",3
                ,"hogaLaderstovlar",2]],
        ['Medeltung rustning C',["vadderaHatta",1,"halvhjalmAvStal",3,"vadderadSkjorta",1,"armlosRingbrynja",2,"overrockAvTyg",3,"tyghosa",4
                ,"benkladerAvLader",2]],
        ['Medeltung rustning D',["ladehatta",1,"hjalmAvForstarktLader",3,"tygskjorta",1,"armlosFjallpansarbrynja",2,"overarmsskenorAvHardatLader",4
                ,"underarmsskenorAvHardatLader",4,"handskarAvForstarktLader",3,"tyghosa",3,"vadderadeByxor",4,"laderskor",1]],
        ['Medeltung rustning E',["vadderaHatta",1,"halvhjalmAvStal",3,"vadderadGambeson",1,"stalharnesk",3,"overrockAvTyg",2
                ,"overarmsskenorAvStal",4,"handskarAvForstarktLader",3,"tyghosa",4,"laderbyxor",3,"benskenorAvStal",2,"laderskor",1]],
        ['Medeltung rustning F',["ladehatta",1,"huvaAvFjallpansar",2,"tygskjorta",1,"vadderadGambeson",3,"langFjallpansarbrynja",4
                ,"tyghosa",2,"hoftlosaFotBenkladerAvFjallpansar",1]]
        ];
                
const armorSetsHeavy = [
        ['Tung rustning A',["vadderaHatta",1,"halvhjalmAvStal",3,"vadderadSkjorta",1,"armlosRingbrynja",2,"handskarAvForstarktLader",3,"laderbyxor",1
                        ,"hoftlosaRingbrynjebyxor",2,"laderskor",1]],
        ['Tung rustning B',["laderhuva",1,"ringbrynjehuva",2,"vadderadGambeson",3,"brynjaAvFjallpansar",4,"handskarAvForstarktLader",3,"vadderadeByxor",1
                        ,"laderstovlar",2]],
        ['Tung rustning C',["vadderaHatta",1,"kortHuvaAvForstarktLader",2,"halvhjalmAvStal",3,"vadderadGambeson",1,"brynjaAvForstarktLader",2,"axelskyddAvStal",4
                        ,"laderhandskar",3,"laderbyxor",3,"hoftlosaFotBenkladerAvLader",4]],
        ['Tung rustning D',["vadderaHatta",1,"ringbrynjehuva",2,"helhjalmAvStal",3,"vadderadArmlosSkjorta",1,"armlosRingbrynja",2,"overrockAvTyg",3
                        ,"axelskyddAvStal",4,"underarmsskenaAvStal",4,"handskarAvForstarktLader",3,"vadderadeByxor",1,"knaskyddAvStal",4,"hoftlosaRingbrynjebyxor",2]],
        ['Tung rustning E',["vadderaHatta",1,"ringbrynjehuva",2,"helhjalmAvStal",3,"axelskyddAvStal",4,"overarmsskenorAvStal",4,"armbagsskyddAvStal",4
                        ,"underarmsskenaAvStal",4,"vadderadSkjorta",1,"armlosRingbrynja",2,"brostplatAvStal",3,"laderbyxaMedFot",1,"hoftlosaRingbrynjebyxor",2]],
        ['Tung rustning F',["vadderaHatta",1,"ringbrynjehuva",2,"helhjalmAvStal",3,"axelskyddAvStal",3,"overarmsskenorAvStal",3,"armbagsskyddAvStal",3,"underarmsskenaAvStal",3
                        ,"handskarAvStal",3,"vadderadSkjorta",1,"armlosRingbrynja",2,"stalharnesk",3,"knaskyddAvStal",3,"benskenorAvStal",3,"vadderadeByxor",1,"hoftlosaRingbrynjebyxor",2
                        ,"fotbekladnadAvStal",3]]
        ];

armorSetsLankan = [
        ['Lankansk fotsoldat',["linneHuva",1,"linneskjortaUtanArmar",1,"kortaLinneHosor",3,"brostplatAvHardatLader",2,"sandaler",1]],
        ['Lankansk Elitsoldat',["linneHuva",1,"bronshjalm",2,"linneskjortaUtanArmar",1,"bronsharneskMLaderinlagg",2,"underarmsskenorAvHardatLader",3,"kortaLinneHosor",3,"sandaler",1]],
        ['Ardanian Order of the Silver eye',["kortTyghuva",1,"overrockAvTyg",1,"laderstovlar",1,"ringbrynjehuva",2,"armlosRingbrynja",2,"hoftlosaFotBenkladerAvForstarktLader",2,
                        "helhjalmAvStal",3,"stalharnesk",3,"tygbyxor",3,"handskarAvForstarktLader",3,"axelskyddAvStal",4,"underarmsskenorAvHardatLader",4,"benskenorAvStal",4]]
        ];