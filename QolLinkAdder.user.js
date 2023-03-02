// ==UserScript==
// @name         QOL Link Adder
// @author       Flutterz
// @version      1.0
// @match        *://www.neopets.com/*
// ==/UserScript==

function AddQOL(){

    //Add Quick Stock to nav menu
    try{
    $("a[href*='/neohome/shed']").each(function (index, element) {
        if (index == 0){
            $(element).after(" | <a href=\"/quickstock.phtml\"><b>Quick Stock</b></a>");
        }
    });
    }catch(err){}

    //Change Beta NP link to inventory instead of bank
    try{
        var newNP = document.getElementsByClassName("navsub-right__2020");
        newNP[0].innerHTML = newNP[0].innerHTML.replace("/bank.phtml","/inventory.phtml");
    }catch(err){}

    //Add Neoboard Preferences to old Community dropdown
    try{
        var navMenu = document.getElementById("template_nav");
        navMenu.innerHTML = navMenu.innerHTML.replace("<li><a href=\"/guilds/index.phtml\">» Guilds</a></li>","<li><a href=\"/guilds/index.phtml\">» Guilds</a></li><li><a href=\"/neoboards/preferences.phtml\">» Neoboard Prefs</a></li>");
    }catch(err){}
}

AddQOL();
