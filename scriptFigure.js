// ------------ SCRIPT QUADRATO ------------
function calcolaQ(){
    
    var latoQ = document.getElementById("latoQ").value;
    var latoQ1 = parseFloat(latoQ);

    var perimetroQ = latoQ1 * 4;
    var areaQ = Math.pow(latoQ1, 2);

    document.getElementById("perimetroQ").innerHTML = "Il perimetro è " + parseFloat(perimetroQ);
    document.getElementById("areaQ").innerHTML = "L'area è " + parseFloat(areaQ);

}

// ------------ SCRIPT RETTANGOLO ------------
function calcolaRett(){

    var baseRETT = document.getElementById("baseR").value;
    var baseRETT1 = parseFloat(baseRETT);
    var altezzaRETT = document.getElementById("altezzaR").value;
    var altezzaRETT1 = parseFloat(altezzaRETT);

    var perimetroRETT = (baseRETT1 + altezzaRETT1) * 2;
    var areaRETT = baseRETT1 * altezzaRETT1;

    document.getElementById("perimetroR").innerHTML ="Il perimetro è " + parseFloat(perimetroRETT);
    document.getElementById("areaR").innerHTML ="L'area è " + parseFloat(areaRETT);
}

// ------------ SCRIPT TRIANGOLO ------------
function calcolaTR(){

    var latoTR = document.getElementById("latoTR").value;
    var latoTR1 = parseFloat(latoTR);
    var baseTR = document.getElementById("baseTR").value;
    var baseTR1 = parseFloat(baseTR);
    var altezzaTR = document.getElementById("altezzaTR").value;
    var altezzaTR1 = parseFloat(altezzaTR);

    var perimetroTR = (latoTR1 * 2) + baseTR1;
    var areaTR = (baseTR1 * altezzaTR1) / 2;

    document.getElementById("perimetroTR").innerHTML = "Il perimetro è " + parseFloat(perimetroTR);
    document.getElementById("areaTR").innerHTML = "L'area è " + parseFloat(areaTR);
}

// ------------ SCRIPT TRAPEZIO ------------
function calcolaTRAP(){

    var latoTRAP = document.getElementById("latoTrap").value;
    var latoTRAP1 = parseFloat(latoTRAP);
    var altezzaTRAP = document.getElementById("altezzaTrap").value;
    var altezzaTRAP1 = parseFloat(altezzaTRAP);
    var b1TRAP = document.getElementById("b1Trap").value;
    var b1TRAP1 = parseFloat(b1TRAP);
    var b2TRAP = document.getElementById("b2Trap").value;
    var b2TRAP1 = parseFloat(b2TRAP);

    var perimetroTRAP = (b1TRAP1 + b2TRAP1) + (latoTRAP1 + latoTRAP1);
    var areaTRAP = (b1TRAP1 + b2TRAP1)* altezzaTRAP1 / 2;

    document.getElementById("perimetroTRAP").innerHTML = "Il perimetro è " + parseFloat(perimetroTRAP);
    document.getElementById("areaTRAP").innerHTML = "L'area è " + parseFloat(areaTRAP);
}

// ------------ SCRIPT PARALLELOGRAMMA ------------
function calcolaParall(){

    var latoP = document.getElementById("latoP").value;
    var latoP1 = parseFloat(latoP);
    var baseP = document.getElementById("baseP").value;
    var baseP1 = parseFloat(baseP);
    var altezzaP = document.getElementById("altezzaP").value;
    var altezzaP1 = parseFloat(altezzaP);

    var perimetroP = (baseP1 * 2) + (latoP1 * 2);
    var areaP = baseP1 * altezzaP1 ;

    document.getElementById("perimetroP").innerHTML = "Il perimetro è " + parseFloat(perimetroP);
    document.getElementById("areaP").innerHTML = "Il perimetro è " + parseFloat(areaP);
}

// ------------ SCRIPT PARALLELOGRAMMA ------------
function calcolaRombo(){
    
    var lRombo = document.getElementById("latoRombo").value;
    var lRombo1 = parseFloat(lRombo);
    var dRombo = document.getElementById("dRombo").value;
    var dRombo1 = parseFloat(dRombo);
    var DRombo = document.getElementById("DRombo").value;
    var DRombo1 = parseFloat(DRombo);

    var perimetroRombo = lRombo * 4;
    var areaRombo = (dRombo1 * DRombo1) / 2;

    document.getElementById("perimetroRombo").innerHTML = "Il perimetro è " + parseFloat(perimetroRombo);
    document.getElementById("areaRombo").innerHTML = "L'area è " + parseFloat(areaRombo);
}