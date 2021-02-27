const ids = 
[["Slowking",199]
,["Azurill",252]
,["Wynaut",253]
,["Ambipom",254]
,["Mismagius",255]
,["Honchkrow",256]
,["Bonsly",257]
,["Mime-jr",258]
,["Happiny",259]
,["Munchlax",260]
,["Mantyke",261]
,["Weavile",262]
,["Magnezone",263]
,["Lickilicky",264]
,["Rhyperior",265]
,["Tangrowth",266]
,["Electivire",267]
,["Magmortar",268]
,["Togekiss",269]
,["Yanmega",270]
,["Leafeon",271]
,["Glaceon",272]
,["Gliscor",273]
,["Mamoswine",274]
,["Porygon-z",275]
,["Treecko",276]
,["Grovyle",277]
,["Sceptile",278]
,["Torchic",279]
,["Combusken",280]
,["Blaziken",281]
,["Mudkip",282]
,["Marshtomp",283]
,["Swampert",284]
,["Ralts",285]
,["Kirlia",286]
,["Gardevoir",287]
,["Gallade",288]
,["Shedinja",289]
,["Kecleon",290]
,["Beldum",291]
,["Metang",292]
,["Metagross",293]
,["Bidoof",294]
,["Spiritomb",295]
,["Lucario",296]
,["Gible",297]
,["Gabite",298]
,["Garchomp",299]
,["Mawile",300]
,["Lileep",301]
,["Cradily",302]
,["Anorith",303]
,["Armaldo",304]
,["Cranidos",305]
,["Rampardos",306]
,["Shieldon",307]
,["Bastiodon",308]
,["Slaking",309]
,["Absol",310]
,["Duskull",311]
,["Dusclops",312]
,["Dusknoir",313]
,["Wailord",314]
,["Arceus",315]
,["Turtwig",316]
,["Grotle",317]
,["Torterra",318]
,["Chimchar",319]
,["Monferno",320]
,["Infernape",321]
,["Piplup",322]
,["Prinplup",323]
,["Empoleon",324]
,["Nosepass",325]
,["Probopass",326]
,["Honedge",327]
,["Doublade",328]
,["Aegislash-shield",329]
,["Pawniard",330]
,["Bisharp",331]
,["Luxray",332]
,["Aggron",333]
,["Flygon",334]
,["Milotic",335]
,["Salamence",336]
,["Klinklang",337]
,["Zoroark",338]
,["Sylveon",339]
,["Kyogre",340]
,["Groudon",341]
,["Rayquaza",342]
,["Dialga",343]
,["Palkia",344]
,["Giratina-altered",345]
,["Regigigas",346]
,["Darkrai",347]
,["Genesect",348]
,["Reshiram",349]
,["Zekrom",350]
,["Kyurem",351]
,["Roserade",352]
,["Drifblim",353]
,["Lopunny",354]
,["Breloom",355]
,["Ninjask",356]
,["Banette",357]
,["Rotom",358]
,["Reuniclus",359]
,["Whimsicott",360]
,["Krookodile",361]
,["Cofagrigus",362]
,["Galvantula",363]
,["Ferrothorn",364]
,["Litwick",365]
,["Lampent",366]
,["Chandelure",367]
,["Haxorus",368]
,["Golurk",369]
,["Pyukumuku",370]
,["Klefki",371]
,["Talonflame",372]
,["Mimikyu-disguised",373]
,["Volcarona",374]
,["Deino",375]
,["Zweilous",376]
,["Hydreigon",377]
,["Latias",378]
,["Latios",379]
,["Deoxys-normal",380]
,["Jirachi",381]
,["Nincada",382]
,["Bibarel",383]
,["Riolu",384]
,["Slakoth",385]
,["Vigoroth",386]
,["Wailmer",387]
,["Shinx",388]
,["Luxio",389]
,["Aron",390]
,["Lairon",391]
,["Trapinch",392]
,["Vibrava",393]
,["Feebas",394]
,["Bagon",395]
,["Shelgon",396]
,["Klink",397]
,["Klang",398]
,["Zorua",399]
,["Budew",400]
,["Roselia",401]
,["Drifloon",402]
,["Buneary",403]
,["Shroomish",404]
,["Shuppet",405]
,["Solosis",406]
,["Duosion",407]
,["Cottonee",408]
,["Sandile",409]
,["Krokorok",410]
,["Yamask",411]
,["Joltik",412]
,["Ferroseed",413]
,["Axew",414]
,["Fraxure",415]
,["Golett",416]
,["Fletchling",417]
,["Fletchinder",418]
,["Larvesta",419]
,["Stunfisk",420]
]

const nameException = [
    "deoxys",
    "giratina",
    "mimikyu",
    "aegislash",
    "mimejr",
    "mrmime",
    "nidoranm",
    "nidoranf",
    "porygonz"
]

const nameFix = [
    "deoxys-normal",
    "giratina-altered",
    "mimikyu-disguised",
    "aegislash-shield",
    "mime-jr",
    "mr-mime",
    "nidoran-m",
    "nidoran-f",
    "porygon-z"
]

const typeSwap =
[["steel","electric","Magnemite"]
,["steel","electric","Magneton"]
,["ice","water","Dewgong"]
,["water","rock","Omanyte"]
,["water","rock","Omastar"]
,["steel","bug","Scizor"]
,["steel","electric","Magnezone"]
,["steel","water","Empoleon"]
,["dark","ghost","Spiritomb"]
,["steel","grass","Ferrothorn"]
]

const typeUni =
[["grass","Bulbasaur"]
,["grass","Ivysaur"]
,["grass","Venusaur"]
,["fire","Charizard"]
,["rock","Geodude"]
,["rock","Graveler"]
,["rock","Golem"]
,["ghost","Gastly"]
,["ghost","Haunter"]
,["ghost","Gengar"]
,["rock","Onix"]
,["bug","Scyther"]
,["water","Gyarados"]
,["ice","Articuno"]
,["electric","Zapdos"]
,["fire","Moltres"]
,["dragon","Dragonite"]
,["steel","Steelix"]
]

const abilitySwap =
["pidgey",
"pidgeotto",
"pidgeot",
"ekans",
"arbok",
"diglett",
"dugtrio",
"growlithe",
"arcanine",
"machop",
"machoke",
"machamp",
"geodude",
"graveler",
"golem",
"farfetchd",
"onix",
"steelix",
"krabby",
"kingler",
"voltorb",
"electrode",
"cubone",
"marowak",
"hitmonchan",
"lapras",
"snorlax",
"aerodactyl",
"chinchou",
"lanturn",
"marill",
"azumarill",
"dunsparce",
"murkrow",
"honchkrow",
"snubbull",
"granbull",
"teddiursa",
"ursaring",
"absol"
]

const types = new Array(
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1, 1],              // Normal
[1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1, 1],          // Fire
[1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1],            // Water
[1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1],            // Electric
[1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1, 1],    // Grass
[1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1, 1],          // Ice
[2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5, 1],        // Fighting
[1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2, 1],          // Poison
[1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1, 1],              // Ground
[1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1, 1],            // Flying
[1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1, 1],              // Psychic
[1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5, 1],    // Bug
[1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1],            // Rock
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1, 1],                // Ghost
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0, 1],                // Dragon
[1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5, 1],            // Dark
[1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2, 1],          // Steel
[1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1, 1],            // Fairy
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);                 // None
    
const typeName = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];
var result1 = new Array();
var result2 = new Array();

var typeComp = 0;

//Press ENTER on text area 1
var pkmn1 = document.getElementById('fname1');
pkmn1.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});

//Press ENTER on text area 2
var pkmn2 = document.getElementById('fname2');
pkmn2.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});

//Empty pokemon text area
function resetPoke() {
    document.getElementById("fname1").value = null;
    document.getElementById("fname2").value = null;
}

//Random pokemon
function randomPoke() {
    document.getElementById("random").disabled = true; 
    var randList = [];
    for (var i = 0; i < 2; i++) {
        randList.push(Math.floor(Math.random() * Math.floor(2)));
    }
    if (randList[0] == 0) {
        var rand1 = Math.floor(Math.random() * Math.floor(251));
        if (rand1 == 0) {
            rand1 += 1;
        }
        var mode1 = 0;
    } else {
        var rand1 = Math.floor(Math.random() * Math.floor(170));
        var mode1 = 1;
    }
    if (randList[1] == 0) {
        var rand2 = Math.floor(Math.random() * Math.floor(251));
        if (rand2 == 0) {
            rand2 += 1;
        }
        var mode2 = 0;
    } else {
        var rand2 = Math.floor(Math.random() * Math.floor(170));
        var mode2 = 1;
    }

    if (mode1 == 0) {
        var zxhr = new XMLHttpRequest();
        var poke1 = 'https://pokeapi.co/api/v2/pokemon/' + rand1;
        zxhr.open('GET', poke1, true);
        zxhr.send();
        zxhr.onload = function() {
            var jsonBody = zxhr.responseText;
            var jsonString = JSON.parse(jsonBody);
            var name = jsonString.name;
            if (nameFix.includes(name)) {
                name = nameException[nameFix.indexOf(name)];
            }
            setTimeout(() => {document.getElementById("fname1").value = name}, 450);
        }
    } else {
        var name = ids[rand1][0].toLowerCase();
        if (nameFix.includes(name)) {
            name = nameException[nameFix.indexOf(name)];
        }
        setTimeout(() => {document.getElementById("fname1").value = name}, 450);
    }

    if (mode2 == 0) {
        var vxhr = new XMLHttpRequest();  
        var poke2 = 'https://pokeapi.co/api/v2/pokemon/' + rand2;
        vxhr.open('GET', poke2, true);
        vxhr.send();
        vxhr.onload = function() {
            var jsonBody = vxhr.responseText;
            var jsonString = JSON.parse(jsonBody);
            var name1 = jsonString.name;
            if (nameFix.includes(name1)) {
                name1 = nameException[nameFix.indexOf(name1)];
            }
            setTimeout(() => {document.getElementById("fname2").value = name1}, 500);
        }
    } else {
        var name2 = ids[rand2][0].toLowerCase();
        if (name2 == document.getElementById("fname1").value) {
            var rand2 = Math.floor(Math.random() * Math.floor(251));
            name2 = ids[rand2][0].toLowerCase();
        }
        if (nameFix.includes(name2)) {
            name2 = nameException[nameFix.indexOf(name2)];
        }
        setTimeout(() => {document.getElementById("fname2").value = name2}, 500);
    }
    setTimeout(() => { fusePoke() }, 600);
}

function getPokemonName(htmlId){
    var pokemonName = (document.getElementById(htmlId)).value.toLowerCase();
    pokemonName = pokemonName.replace(/\W/g, '');
    return pokemonName;
}

//Fusion calculation function
function fusePoke() {

    //Pokemon from both text area
    var mon1 = getPokemonName("fname1");
    var mon2 = getPokemonName("fname2");
    if ((mon1 == "" || mon1.length == 0 || mon1 == null) || (mon2 == "" || mon2.length == 0 || mon2 == null)) {
	document.getElementById("random").disabled = false
        alert("Please fill the two text inputs!");
    } else {
        //Special mon selector: Giratina, Deoxys
        if (nameException.includes(mon1)) {
            mon1 = nameFix[nameException.indexOf(mon1)];
        }
        if (nameException.includes(mon2)) {
            mon2 = nameFix[nameException.indexOf(mon2)];
         }

        //First request
        var txhr = new XMLHttpRequest();  
        var poke1 = "https://pokeapi.co/api/v2/pokemon/" + mon1 + "/";
        txhr.open('GET', poke1, true);
        txhr.send();
        txhr.onload = function() {
        var jsonBody = txhr.responseText;
        if(jsonBody) {
            try {
                a = JSON.parse(jsonBody);
            } catch(e) {
                alert("The first pokemon was misspelled!"); // error in the above string (in this case, yes)!
            }
        }
        var jsonString = JSON.parse(jsonBody);

        //ID selector for sprite showcase of the 1st mon/ Validator for 1st mon
        var num1 = jsonString.id;
        var id1 = num1;
        var idCheck1 = false;
        for (var i = 0; i < ids.length; i++){
            if (ids[i][0] == mon1.charAt(0).toUpperCase() + mon1.slice(1)) {
                idCheck1 = true;
                num1 = ids[i][1];
            }
        }
        if (idCheck1 == false && id1 >= 252) {
            alert("The first pokemon isn't in the fangame!")
        } else {
            //Type selector for fusion type knowledge of the 1st mon
            var type1 = jsonString.types;
            var poke1 = 'https://pokeapi.co/api/v2/pokemon/' + type1[0].type.name;
            var mon1types = [];
            var compt = 0;

            //Exception mon selected for swapped types
            for (var i = 0; i < typeSwap.length; i++) {
                if (typeSwap[i][2] == mon1.charAt(0).toUpperCase() + mon1.slice(1)) {
                    mon1types.push(typeSwap[i][0]);
                    mon1types.push(typeSwap[i][1]);
                    var compt = 1;
                }
            }

            //Exception mon selected for one type
            for (var i = 0; i < typeUni.length; i++) {
                if (typeUni[i][1] == mon1.charAt(0).toUpperCase() + mon1.slice(1)) {
                    mon1types.push(typeUni[i][0]);
                    var compt = 2;
                }
            }

            //Type of 1st mon
            if (compt == 0) {
                mon1types.push(type1[0].type.name);
                if (type1.length == 2 && compt != 2) {
                    if (type1[0].type.name == "normal" && type1[1].type.name == "flying") {
                        mon1types[0] = "flying";
                    } else {
                        mon1types.push(type1[1].type.name);
                    }
                }
            }
            
            //Stats of 1st mon
            var stats1;
            if (statsException.includes(mon1)) {
                stats1 = statsFix[statsException.indexOf(mon1)];
            } else {
                stats1 = jsonString.stats;
            }

            var mon1stats = [];
            for (var i = 0; i < stats1.length; i++) {
                mon1stats.push(stats1[i].base_stat);
            }

            //Ability of 1st mon
            var ab1;
            if (abilitiesException.includes(mon1)) {
                ab1 = abilitiesFix[abilitiesException.indexOf(mon1)];
            } else {
                ab1 = jsonString.abilities;
            }

            var mon1abilities = [];
            for (var i = 0; i < ab1.length; i++) {
                mon1abilities.push([ab1[i].ability, ab1[i].is_hidden]);
            }  

            //2nd request
            var pxhr = new XMLHttpRequest();
            var poke2 = "https://pokeapi.co/api/v2/pokemon/" + mon2 + "/";
            pxhr.open('GET', poke2, true);
            pxhr.send();
            pxhr.onload = function() {
                
                var jsonBody = pxhr.responseText;
                if(jsonBody) {
                    try {
                        a = JSON.parse(jsonBody);
                    } catch(e) {
                        alert("The second pokemon was misspelled!"); // error in the above string (in this case, yes)!
                    }
                }
                var jsonString = JSON.parse(jsonBody);

                //Name of fusion
                if (!nameFix.includes(mon1) && !nameFix.includes(mon2)) {
                    var fmon1 = mon1.charAt(0).toUpperCase() + mon1.slice(1);
                    var fmon2 = mon2.charAt(0).toUpperCase() + mon2.slice(1);
                } else if (nameFix.includes(mon1) && !nameFix.includes(mon2)) {
                    var fmon1 = nameException[nameFix.indexOf(mon1)].charAt(0).toUpperCase() + nameException[nameFix.indexOf(mon1)].slice(1);
                    var fmon2 = mon2.charAt(0).toUpperCase() + mon2.slice(1);
                } else if (!nameFix.includes(mon1) && nameFix.includes(mon2)) {
                    var fmon1 = mon1.charAt(0).toUpperCase() + mon1.slice(1);
                    var fmon2 = nameException[nameFix.indexOf(mon2)].charAt(0).toUpperCase() + nameException[nameFix.indexOf(mon2)].slice(1);
                } else if (nameFix.includes(mon1) && nameFix.includes(mon2)) {
                    var fmon1 = nameException[nameFix.indexOf(mon1)].charAt(0).toUpperCase() + nameException[nameFix.indexOf(mon1)].slice(1);
                    var fmon2 = nameException[nameFix.indexOf(mon2)].charAt(0).toUpperCase() + nameException[nameFix.indexOf(mon2)].slice(1);
                }

                //ID selector for sprite showcase of the 2st mon
                var num2 = jsonString.id;
                var id2 = num2;
                var idCheck2 = false;
                for (var i = 0; i < ids.length; i++){
                    if (ids[i][0] == mon2.charAt(0).toUpperCase() + mon2.slice(1)) {
                        idCheck2 = true;
                        num2 = ids[i][1];
                    }
                }
                if (idCheck2 == false && id2 >= 252) {
                    alert("The second pokemon isn't in the fangame!")
                } else {

                    //Name of fusions
                    document.getElementById("FP1").innerHTML = fmon1+ "/" + fmon2;
                    document.getElementById("FP2").innerHTML = fmon2 + "/" + fmon1;

                    //Name of pictures
                    var pic1 = num1 + "." + num2 + ".png";
                    var pic2 = num2 + "." + num1 + ".png";

                    //Type selector for fusion type knowledge of the 2nd mon
                    var type2 = jsonString.types;
                    var mon2types = [];
                    var compt = 0;

                    //Exception mon selected for swapped types
                    for (var i = 0; i < typeSwap.length; i++) {
                        if (typeSwap[i][2] == mon2.charAt(0).toUpperCase() + mon2.slice(1)) {
                            mon2types.push(typeSwap[i][0]);
                            mon2types.push(typeSwap[i][1]);
                            var compt = 1;
                        }
                    }
            
                    //Exception mon selected for one type
                    for (var i = 0; i < typeUni.length; i++) {
                        if (typeUni[i][1] == mon2.charAt(0).toUpperCase() + mon2.slice(1)) {
                            mon2types.push(typeUni[i][0]);
                            var compt = 2;
                        }
                    }
            
                    //Type of 2nd mon
                    if (compt == 0) {
                        mon2types.push(type2[0].type.name);
                        if (type2.length == 2 && compt != 2) {
                            if (type2[0].type.name == "normal" && type2[1].type.name == "flying") {
                                mon2types[0] = "flying";
                            } else {
                                mon2types.push(type2[1].type.name);
                            }
                        }
                    }
                    
                    //Stats of 2nd mon
                    var stats2;
                    if (statsException.includes(mon2)) {
                        stats2 = statsFix[statsException.indexOf(mon2)];
                    } else {
                        stats2 = jsonString.stats;
                    }
                    var mon2stats = [];
                    for (var i = 0; i < stats2.length; i++) {
                        mon2stats.push(stats2[i].base_stat);
                    }

                    //Abilities of 2nd mon
                    var ab2;
                    if (abilitiesException.includes(mon2)) {
                        ab2 = abilitiesFix[abilitiesException.indexOf(mon2)];
                    } else {
                        ab2 = jsonString.abilities;
                    }

                    var mon2abilities = [];
                    for (var i = 0; i < ab2.length; i++) {
                        mon2abilities.push([ab2[i].ability, ab2[i].is_hidden]);
                    }                     

                    //Stats calculation
                    var hp1 = (mon2stats[0]/3) + 2*(mon1stats[0]/3);
                    var atk1 = 2*(mon2stats[1]/3) + (mon1stats[1]/3);
                    var def1 = 2*(mon2stats[2]/3) + (mon1stats[2]/3);
                    var spatk1 = (mon2stats[3]/3) + 2*(mon1stats[3]/3);
                    var spdef1 = (mon2stats[4]/3) + 2*(mon1stats[4]/3);
                    var spe1 = 2*(mon2stats[5]/3) + (mon1stats[5]/3);
                    var bs1 = Math.floor(hp1) + Math.floor(atk1) + Math.floor(def1) + Math.floor(spatk1) + Math.floor(spdef1) + Math.floor(spe1);

                    var hp2 = (mon1stats[0]/3) + 2*(mon2stats[0]/3);
                    var atk2 = 2*(mon1stats[1]/3) + (mon2stats[1]/3);
                    var def2= 2*(mon1stats[2]/3) + (mon2stats[2]/3);
                    var spatk2 = (mon1stats[3]/3) + 2*(mon2stats[3]/3);
                    var spdef2 = (mon1stats[4]/3) + 2*(mon2stats[4]/3);
                    var spe2 = 2*(mon1stats[5]/3) + (mon2stats[5]/3);
                    var bs2 = Math.floor(hp2) + Math.floor(atk2) + Math.floor(def2) + Math.floor(spatk2) + Math.floor(spdef2) + Math.floor(spe2);

                    var L0 = ["hp1","atk1","def1","spatk1","spdef1","spe1","bs1"];
                    var L1 = ["hp2","atk2","def2","spatk2","spdef2","spe2","bs2"];
                    var L2 = [Math.floor(hp1), Math.floor(atk1), Math.floor(def1), Math.floor(spatk1), Math.floor(spdef1), Math.floor(spe1), Math.floor(bs1)];
                    var L3 = [Math.floor(hp2), Math.floor(atk2), Math.floor(def2), Math.floor(spatk2), Math.floor(spdef2), Math.floor(spe2), Math.floor(bs2)];
                    var L4 = [];
                    var L5 = [];
                    for (var i = 0; i < L0.length; i++) {
                        L4.push(Math.max(L2[i], L3[i])-Math.min(L2[i], L3[i]));
                    }
                    //Color of stats
                    for (var i = 0; i < L1.length; i++) {
                        if (L2[i] < L3[i]) {
                            document.getElementById(L0[i]).style.color = "red";
                            document.getElementById(L1[i]).style.color = "green";
                            L5.push(" (+" + L4[i] + ")");
                            L4[i] = " (-" + L4[i] + ")";
                        } else if (L2[i] > L3[i]) {
                            document.getElementById(L1[i]).style.color = "red";
                            document.getElementById(L0[i]).style.color = "green";
                            L5.push(" (-" + L4[i] + ")");
                            L4[i] = " (+" + L4[i] + ")";
                        } else {
                            document.getElementById(L1[i]).style.color = "orange";
                            document.getElementById(L0[i]).style.color = "orange";
                            L4[i] = " (0)";
                            L5.push(" (0)");
                        }
                        document.getElementById(L0[i]).innerHTML = L0[i].slice(-1) + ": " + L2[i];
                        document.getElementById(L1[i]).innerHTML = L1[i].slice(-1) + ": " + L3[i];
                    }

                    //Writting stat in HTML
                    if (mon1 == "shedinja" || mon2 == "shedinja") {
                        document.getElementById("hp1").innerHTML = "HP: 1 (0)";
                        document.getElementById("hp1").style.color = "orange";
                    } else {
                        document.getElementById("hp1").innerHTML = "HP: " + Math.floor(hp1) + L4[0];
                    }
                    document.getElementById("atk1").innerHTML = "ATK: " + Math.floor(atk1) + L4[1];
                    document.getElementById("def1").innerHTML = "DEF: " + Math.floor(def1) + L4[2];
                    document.getElementById("spatk1").innerHTML = "SPE.ATK: " + Math.floor(spatk1) + L4[3];
                    document.getElementById("spdef1").innerHTML = "SPE.DEF: " + Math.floor(spdef1) + L4[4];
                    document.getElementById("spe1").innerHTML = "SPEED: " + Math.floor(spe1) + L4[5];
                    document.getElementById("bs1").innerHTML = "TOTAL: " + Math.floor(bs1) + L4[6];

                    if (mon1 == "shedinja" || mon2 == "shedinja") {
                        document.getElementById("hp2").innerHTML = "HP: 1 (0)";
                        document.getElementById("hp2").style.color = "orange";
                    } else {
                        document.getElementById("hp2").innerHTML = "HP: " + Math.floor(hp2) + L5[0];
                    }
                    document.getElementById("atk2").innerHTML = "ATK: " + Math.floor(atk2) + L5[1];
                    document.getElementById("def2").innerHTML = "DEF: " + Math.floor(def2) + L5[2];
                    document.getElementById("spatk2").innerHTML = "SPE.ATK: " + Math.floor(spatk2) + L5[3];
                    document.getElementById("spdef2").innerHTML = "SPE.DEF: " + Math.floor(spdef2) + L5[4];
                    document.getElementById("spe2").innerHTML = "SPEED: " + Math.floor(spe2) + L5[5];
                    document.getElementById("bs2").innerHTML = "TOTAL: " + Math.floor(bs2) + L5[6];

                    //Abilities of fused mons
                    if (abilitySwap.includes(mon1)) {
                        [mon1abilities[0], mon1abilities[1]] = [mon1abilities[1], mon1abilities[0]];
                    }
                    if (abilitySwap.includes(mon2)) {
                        [mon2abilities[0], mon2abilities[1]] = [mon2abilities[1], mon2abilities[0]];
                    }

                    //Type of fused mons
                    var fmonres1 = fusType(mon1types, mon2types);
                    var fmonres2 = fusType(mon2types, mon1types);

                    //Types effectiveness
                    if (typeComp>0) {
                        c = document.getElementsByClassName('monweak');
                        for( b=0; b < c.length; b++ )
                        { 
                            defaultValue = c[b].getAttribute('data-default');
                            if (defaultValue) {
                                c[b].innerText = defaultValue;
                            }
                        }
                    }

                    tyeffid1 = typeId(fmonres1);
                    tyeffid2 = typeId(fmonres1);

                    for (var i = 0; i < typeName.length; i++) {
                        result1[i] = (types[i][tyeffid1[0]] * types[i][tyeffid1[1]]);
                    }

                    for (var i = 0; i < typeName.length; i++) {
                        var image = new Image()
                        image.src = 'Types/' + typeName[i] + ".png";
                        
                        if (result1[i] == 4) {
                            document.getElementById("weak14").appendChild(image);
                        }
                        if (result1[i] == 2) {
                            document.getElementById("weak12").appendChild(image);
                        }
                        if (result1[i] == 1) {
                            document.getElementById("weak11").appendChild(image);
                        }
                        if (result1[i] == 0.5) {
                            document.getElementById("weak105").appendChild(image);
                        }
                        if (result1[i] == 0.25) {
                            document.getElementById("weak1025").appendChild(image);
                        }
                        if (result1[i] == 0) {
                            document.getElementById("weak100").appendChild(image);
                        }
                    }

                    tyeffid1 = typeId(fmonres2);
                    tyeffid2 = typeId(fmonres2);

                    for (var i = 0; i < typeName.length; i++) {
                        result2[i] = (types[i][tyeffid1[0]] * types[i][tyeffid1[1]]);
                    }

                    for (var i = 0; i < typeName.length; i++) {
                        var image = new Image();
                        image.src = 'Types/' + typeName[i] + ".png";

                        if (result2[i] == 4) {
                            document.getElementById("weak24").appendChild(image);
                        }
                        if (result2[i] == 2) {
                            document.getElementById("weak22").appendChild(image);
                        }
                        if (result2[i] == 1) {
                            document.getElementById("weak21").appendChild(image);
                        }
                        if (result2[i] == 0.5) {
                            document.getElementById("weak205").appendChild(image);
                        }
                        if (result2[i] == 0.25) {
                            document.getElementById("weak2025").appendChild(image);
                        }
                        if (result2[i] == 0) {
                            document.getElementById("weak200").appendChild(image);
                        }
                    }

                    typeComp += 1;

                    document.getElementById("p1").src = "Types/" + fmonres1[0] + ".png";
                    if (fmonres1.length!=1 && (fmonres1.length == 2 && fmonres1[0] != fmonres1[1])) {
                        document.getElementById("p2").style.display = "inline-block";
                        document.getElementById("p2").src = "Types/" + fmonres1[1] + ".png";
                    } else {
                        document.getElementById("p2").style.display = "none";
                    }

                    document.getElementById("p3").src = "Types/" + fmonres2[0] + ".png";

                    if (fmonres2.length!=1 && (fmonres2.length == 2 && fmonres2[0] != fmonres2[1])) {
                        document.getElementById("p4").style.display = "inline-block";
                        document.getElementById("p4").src = "Types/" + fmonres2[1] + ".png";
                    } else {
                        document.getElementById("p4").style.display = "none";
                    }

                    //Picture of fusions (if inside CustomBattlers)
                    showFusion("pic1", pic1);
                    showFusion("pic2", pic2);

                    //NEW
                    //Abilities 1
                    var abilities1 = fusionAbilities(mon1abilities, mon2abilities);
                    var hiddenAbilities1 = fusionHiddenAbilities(mon1abilities, mon2abilities, abilities1);
                    var abilitiesText1 = "ABILITY: " + sanitizeAbilityList(abilities1);
                    var hiddenAbilitiesText1 = sanitizeAbilityList(hiddenAbilities1);

                    document.getElementById("ab1").innerHTML = abilitiesText1;
                    document.getElementById("hab1").innerHTML = hiddenAbilitiesText1;

                    //NEW
                    //Abilities 2
                    var abilties2 = fusionAbilities(mon2abilities, mon1abilities);
                    var hiddenAbilities2 = fusionHiddenAbilities(mon2abilities, mon1abilities, abilties2);
                    var abilitiesText2 = "ABILITY: " + sanitizeAbilityList(abilties2);
                    var hiddenAbilitiesText2 = sanitizeAbilityList(hiddenAbilities2);

                    document.getElementById("ab2").innerHTML = abilitiesText2;
                    document.getElementById("hab2").innerHTML = hiddenAbilitiesText2;

                    //Fusion done
                    document.getElementById("random").disabled = false;
                    }
                }
            }
        }
    }
}

function typeId(ftype) {
    var ty1 = typeName.indexOf(ftype[0]);
    if (ftype.length == 2) {
        var ty2 = typeName.indexOf(ftype[1]);
    } else {
        var ty2 = 18;
    }
    return [ty1, ty2];
}

//Custom sprite fusion function
function showFusion(elementId, fusionId){
    
    fusionUrl = "https://aegide.github.io/CustomBattlers/" + fusionId;

    if(doesImageExists(fusionUrl)){
        document.getElementById(elementId).src = fusionUrl;
    }
    else{//Screenshot of autogen pokemon
        fallbackFusionRepository = "https://raw.githubusercontent.com/Aegide/FusionSprites/master/Japeal/"
        headId = fusionId.split(".")[0];
        fallbackFusionUrl = fallbackFusionRepository + headId + "/" + fusionId;
        
        document.getElementById(elementId).src = fallbackFusionUrl;
    }
}

//Error detection
function doesImageExists(imageUrl){
    var http = new XMLHttpRequest();
    http.open('HEAD', imageUrl, false);
    http.send();
    return http.status != 404;
}

//NEW
function fusionAbilities(headAbilities, bodyAbilities) {
    var B0 = bodyAbilities[0][0].name;
    var H1;
    
    //If there is only ability, pick that one
    if(headAbilities.length == 1){
        H1 = headAbilities[0][0].name;
    }

    //If the second ability is a hidden ability, pick the first ability
    else if(headAbilities[1][1] == true){
        H1 = headAbilities[0][0].name;
    }
    //Otherwise, actually take the second ability
    else{
        H1 = headAbilities[1][0].name;
    }

    return [B0, H1];
}

//NEW
function fusionHiddenAbilities(headAbilities, bodyAbilities, fusionAbilities){

    var headAbility, bodyAbility;
    var allAbilities = [];

    var maxAbilities = 3;//Pokémons can't have more than 3 abilities
    for(var a = 0; a < maxAbilities; a++){
        if( a < headAbilities.length){
            headAbility = ability = headAbilities[a][0].name;
            allAbilities.push(headAbility);
        }
        if( a < bodyAbilities.length){
            bodyAbility = bodyAbilities[a][0].name;
            allAbilities.push(bodyAbility);
        }
    }

    hiddenAbilities = allAbilities.filter(n => !fusionAbilities.includes(n));

    return hiddenAbilities;
}

//NEW
function removeDuplicates(list){
    return Array.from(new Set(list));
}

//NEW
function sanitizeAbilityList(abilityList){

    if(abilityList.length == 0){
        return abilityList;
    }

    abilityList = removeDuplicates(abilityList);

    var listAb1 = "";
    for (var i = 0; i < abilityList.length; i++) {
        listAb1 = listAb1 + abilityList[i].charAt(0).toUpperCase() + abilityList[i].slice(1) + " / ";
    }
    listAb1 = listAb1.slice(0, listAb1.length - 1);
    listAb1 = listAb1.split("-").join(" ")
    listAb1 = listAb1.split(" ")
    for (var i = 0, x = listAb1.length; i < x; i++) {
        listAb1[i] = listAb1[i][0].toUpperCase() + listAb1[i].substr(1);
    }
    listAb1 = listAb1.join(" ").slice(0, -2);

    return listAb1;
}


//Ability fusion function
function fusAb(mon1, mon2) {
    var fabs = [];
    var H0 = mon1[0][0].name;
    if (mon1.length == 3 && mon1[2][1] == true) {
        var H1 = mon1[1][0].name;
        var HH = mon1[2][0].name;
    }else if (mon1.length == 2 && mon1[1][1] == true) {
        var HH = mon1[1][0].name;
    } else if (mon1.length == 2 && mon1[1][1] == false){
        var H1 = mon1[1][0].name;
    }
    var B0 = mon2[0][0].name;
    if (mon2.length == 3 && mon2[2][1] == true) {
        var B1 = mon2[1][0].name;
        var BH = mon2[2][0].name;  
    }else if (mon2.length == 2 && mon2[1][1] == true) {
        var BH = mon2[1][0].name;
    } else if (mon1.length == 2 && mon1[1][1] == false){
        var B1 = mon2[1][0].name;
    }
    //cas H0/null/null + B0/null/null [H0=B0] -> H0/null/null
    if (mon1.length == 1 && mon2.length == 1 && mon1[0][1] == false && mon2[0][1] == false) {
        if (H0 == B0) {
            fabs.push(H0);
    //cas H0/null/null + B0/null/null [H0#B0] -> H0/B0/null
        } else if (H0 != B0) {
            fabs.push(H0);
            fabs.push(B0);
        }
    //cas H0/H1/null + B0/null/null [H0=B0] -> H0/H1/null
    } else if (mon1.length == 2 && mon2.length == 1 && mon1[0][1] == false && mon1[1][1] == false && mon2[0][1] == false) {
        if (H0 == B0) {
            fabs.push(H0);
            fabs.push(H1);
    //cas H0/H1/null + B0/null/null [H0#B0] -> H0/B0/H1
        } else if (H0 != B0) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(H1);
        }
    //cas H0/null/HH + B0/null/null [H0=B0 | HH=B0] -> H0/null/HH
    } else if (mon1.length == 2 && mon2.length == 1 && mon1[0][1] == false && mon1[1][1] == true && mon2[0][1] == false) {
        if (H0 == B0 || HH == B0) {
            fabs.push(H0);
            fabs.push(HH);
    //cas H0/null/HH + B0/null/null [H0#B0 & HH#B0] -> H0/B0/HH
        } else if (H0 != B0 && HH != B0) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
        }
    //cas H0/H1/HH + B0/null/null [H0=B0 | B0=HH] -> H0/H1/HH
    } else if (mon1.length == 3 && mon2.length == 1 && mon1[0][1] == false && mon1[1][1] == false && mon1[2][1] == true && mon2[0][1] == false) {
        if (H0 == B0 || B0 == HH) {
            fabs.push(H0);
            fabs.push(H1);
            fabs.push(HH);
    //cas H0/H1/HH + B0/null/null [H0#B0 & HH#B0] -> H0/B0/HH
        } else if (H0 != B0 && HH != B0) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
        }
    //cas H0/null/null + B0/B1/null [H0=B1] -> H0/B0/null
    } else if (mon1.length == 1 && mon2.length == 2 && mon1[0][1] == false && mon2[0][1] == false && mon2[1][1] == false) {
        if (H0 == B1) {
            fabs.push(H0);
            fabs.push(B0);
    //cas H0/null/null + B0/B1/null [H0=B0] -> H0/B1/null
        } else if (H0 == B0) {
            fabs.push(H0);
            fabs.punch(B1);
    //cas H0/null/null + B0/B1/null [H0#B0 & H0#B1] -> H0/B1/B0
        } else if (H0 != B0 && H0 != B1) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(B0);
        }
    //cas H0/H1/null + B0/B1/null [H0=B1] -> H0/B0/H1
    } else if (mon1.length == 2 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == false && mon2[0][1] == false && mon2[1][1] == false) {
        if (H0 == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(H1);
    //cas H0/H1/null + B0/B1/null [H0=B0] -> H0/B1/H1
        } else if (H0 == B0) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(H1);
    //cas H0/H1/null + B0/B1/null [H1#B0 & H1#B1] -> H0/B1/H1
        } else if (H1 != B0 && H1 != B1) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(H1);
        }
    //cas H0/null/HH + B0/B01/null [H0=B1 | HH=B1] -> H0/B0/HH
    } else if (mon1.length == 2 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == true && mon2[0][1] == false && mon2[1][1] == false) {
        if (H0 == B1 || HH == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
    //cas H0/null/HH + B0/B1/null [H0#B1 & HH#B1] -> H0/B1/HH
        } else if (H0 != B1 && HH != B1) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(H1);
        }
    //cas H0/H1/HH + B0/B1/null [H0=B1 | HH=B1] -> H0/B0/HH
    } else if (mon1.length == 3 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == false && mon1[2][1] == true && mon2[0][1]==false && mon2[1][1] == false) {
        if (H0 == B1 || HH == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
    //cas H0/H1/HH + B0/B1/null [H0#B1 & HH#B1] -> H0/B1/HH
        } else if (H0 != B1 && HH != B1) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(HH);
        }
    //cas H0/null/null + B0/null/BH [H0=BH] -> H0/null/B0
    } else if (mon1.length == 1 && mon2.length == 2 && mon1[0][1] == false && mon2[0][1] == false && mon2[1][1] == true) {
        if (H0 == BH) {
            fabs.push(H0);
            fabs.push(B0);
    //cas H0/null/null + B0/null/BH [H0=B0] -> H0/null/BH
        } else if (H0 == B0) {
            fabs.push(H0);
            fabs.push(BH);
    //cas H0/null/null + B0/null/BH [H0#B0 & H0#BH] -> H0/B0/BH
        } else if (H0 != B0 && H0 != BH) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(BH);
        }
    //cas H0/H1/null + B0/null/BH [H0=BH] -> H0/B0/H1
    } else if (mon1.length == 2 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == false && mon2[0][1] == false && mon2[1][1] == true) {
        if (H0 == BH) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(H1);
    //cas H0/H1/null + B0/null/BH [H0=B0] -> H0/BH/H1
        } else if (H0 == B0) {
            fabs.push(H0);
            fabs.push(BH);
            fabs.push(H1);
    //cas H0/H1/null + B0/null/BH [H0#BH & H1#BH] -> H0/H1/BH
        } else if (H0 != BH && H1 != BH) {
            fabs.push(H0);
            fabs.push(H1);
            fabs.push(BH);
        }
    //cas H0/null/HH + B0/null/BH [H0=BH | HH=BH] -> H0/B0/HH
    } else if (mon1.length == 2 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == true && mon2[0][1] == false && mon2[1][1]==true) {
        if (H0 == BH || HH == BH) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
    //cas H0/null/HH + B0/null/BH [H0#BH & HH#BH] -> H0/BH/HH
        } else if (H0 != BH && HH != BH) {
            fabs.push(H0);
            fabs.push(BH);
            fabs.push(HH);
        }
    //cas H0/H1/HH + B0/null/BH [H0=BH | HH=BH] -> H0/B0/HH
    } else if (mon1.length == 3 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == false && mon1[2][1] == true && mon2[0][1] == false && mon2[1][1] == true) {
        if (H0 == BH || HH == BH) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
    //cas H0/H1/HH + B0/null/BH [H0#BH & HH#BH] -> H0/BH/HH
        } else if (H0 != BH && HH != BH) {
            fabs.push(H0);
            fabs.push(BH);
            fabs.push(HH);
        }
    //cas H0/null/null + B0/B1/BH [H0#B1 & H0#BH] -> H0/B1/BH
    } else if (mon1.length == 1 && mon2.length == 3 && mon1[0][1] == false  && mon2[0][1] == false && mon2[1][1] == false && mon2[2][1] == true) {
        if (H0 != B1 && H0 != BH) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(BH);
    //cas H0/null/null + B0/B1/BH [H0=B1] -> H0/B0/BH
        } else if (H0 == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(BH);
    //cas H0/null/null + B0/B1/BH [H0=BH] -> H0/B1/B0
        } else if (H0 == BH) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(B0);
        }
    //cas H0/H1/null + B0/B1/BH [H0#B1 & H0#BH] -> H0/B1/BH
    } else if (mon1.length == 2 && mon2.length == 3 && mon1[0][1] == false && mon1[1][1] == false && mon2[0][1] == false && mon2[1][1] == false && mon2[2][1] == true) {
        if (H0 == B1 || H0 == BH) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(BH);
    //cas H0/H1/null + B0/B1/BH [H0=B1] -> H0/B0/BH
        } else if (H0 == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(BH);
    //cas H0/H1/null + B0/B1/BH [H0=BH] -> H0/B1/B0
        } else if (H0 == BH) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(B0);
        }
    //cas H0/null/HH + B0/B1/BH [H0#B1 & HH#B1] -> H0/B1/HH
    } else if (mon1.length == 2 && mon2.length == 3 && mon1[0][1]==false && mon1[1][1] == true && mon2[0][1] == false && mon2[1][1] == false && mon2[2][1] == true) {
        if (H0!=B1 && HH!=B1) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(HH);
    //cas H0/null/HH + B0/B1/BH [H0=B1 | HH=B1] -> H0/B0/HH
        } else if (H0 == B1 || HH == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
    //cas H0/null/HH + B0/B1/BH [H0=B0 | HH=B0] -> H0/B1/HH
        } else if (H0 == B0 || HH == B0) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(HH);
        }
    //cas H0/H1/HH + B0/B1/BH [H0#B1 & HH#B1] -> H0/B1/HH
    } else if (mon1.length == 3 && mon2.length == 3 && mon1[0][1] == false && mon1[1][1] == false && mon1[2][1] == true && mon2[0][1] == false && mon2[1][1] == false && mon2[2][1] == true) {
        if (H0 != B1 && HH != B1) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(HH);
    //cas H0/H1/HH + B0/B1/BH [H0=B1 | HH=B1] -> H0/B0/HH
        } else if (H0 == B1 || HH == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
    //cas H0/H1/HH + B0/B1/BH [H0=B0 | HH=B0] -> H0/B1/HH
        } else if (H0 == B0 || HH == B0) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(HH);
        }
    }
	return fabs
}


//Type fusion function
function fusType(mon1, mon2) {
    //cas H0/null + B0/null [H0#B0] -> H0/B0
    var fmon = []
    if (mon1.length == 1 && mon2.length == 1) {
        if (mon1[0] != mon2[0]) {
            fmon.push(mon1[0]);
            fmon.push(mon2[0])
    //cas H0/null + B0/null [H0=B0] -> H0/null
        } else {
            fmon.push(mon1[0]);
        }
    } else if (mon1.length == 2 && mon2.length == 1) {
    //cas H0/H1 + B0/null [H0#B0] -> H0/B0
        if (mon1[0] != mon2[0]) {
            fmon.push(mon1[0]);
            fmon.push(mon2[0]);
    //cas H0/H1 + B0/null [H0=B0] -> H0/H1
        } else {
            fmon.push(mon1[0]);
            fmon.push(mon1[1]);
        }
    } else if (mon1.length == 1 && mon2.length == 2) {
    //cas H0/null + B0/B1 [H0#B1] -> H0/B1
        if (mon1[0] != mon2[1]) {
            fmon.push(mon1[0]);
            fmon.push(mon2[1]);
    //cas H0/null + B0/B1 [H0=B1] -> H0/B0
        } else {
            fmon.push(mon1[0])
            fmon.push(mon2[0]);
        }
    //cas H0/H1 + B0/B1 [H0=B1] -> H0/B0
    } else if (mon1.length == 2 && mon2.length == 2) {
        if (mon1[0] == mon2[1]) {
            fmon.push(mon1[0]);
            fmon.push(mon2[0]);
    //cas H0/H1 + B0/B1 [H0#B1] -> H0/B1
        } else {
            fmon.push(mon1[0]);
            fmon.push(mon2[1]);
        }
    }
    return fmon
}