function uj() {
  location.reload();
}
function megtalal() {
  var szamok = azonosit();
  var tb = szamok[0];
  kiiras(tb);
  var SZJA = szamok[1];
  kiiras1(SZJA);
  var SZJA0 = szamok[1];
  kiiras10(SZJA0);
  var netto = szamok[2];
  kiiras2(netto);
  var netto0 = szamok[2];
  kiiras20(netto0);
  var mk = szamok[3];
  kiiras3(mk);
}

function kiiras(szoveg) {
    var spanom = document.createElement("span");
    var tbErtek = document.createTextNode(szoveg);
    spanom.appendChild(tbErtek);
    document.getElementById("tbKiiras").innerHTML = "";
    var tb = document.getElementById("tbKiiras");
    tb.appendChild(spanom);
  }

  function kiiras1(szoveg) {
    var spanom = document.createElement("span");
    var szjaErtek = document.createTextNode(szoveg);
    spanom.appendChild(szjaErtek);
    document.getElementById("szjKiiras").innerHTML = "";
    var SZJA = document.getElementById("szjKiiras");
    SZJA.appendChild(spanom);
  }
  
  function kiiras10(szoveg) {
    var spanom = document.createElement("span");
    var szjErtek0 = document.createTextNode(szoveg);
    spanom.appendChild(szjErtek0);
    document.getElementById("szjKiiras").innerHTML = "";
    var SZJA0 = document.getElementById("szjKiiras");
    SZJA0.appendChild(spanom);
  }

  function kiiras2(szoveg) {
    var spanom = document.createElement("span");
    var nettoErtek = document.createTextNode(szoveg);
    spanom.appendChild(nettoErtek);
    document.getElementById("nettoKiiras").innerHTML = "";
    var netto = document.getElementById("nettoKiiras");
    netto.appendChild(spanom);
  }
  function kiiras20(szoveg) {
    var spanom = document.createElement("span");
    var nettoErtek0 = document.createTextNode(szoveg);
    spanom.appendChild(nettoErtek0);
    document.getElementById("nettoKiiras").innerHTML = "";
    var netto0 = document.getElementById("nettoKiiras");
    netto0.appendChild(spanom);
  }

  function kiiras3(szoveg) {
    var spanom = document.createElement("span");
    var mkErtek = document.createTextNode(szoveg);
    spanom.appendChild(mkErtek);
    document.getElementById("mkKiiras").innerHTML = "";
    var mk = document.getElementById("mkKiiras");
    mk.appendChild(spanom);
  }

function azonosit() {
  bruttoBer = parseFloat(document.getElementById("bruttoBer").value);
  kor = document.getElementById("kor").value;
  tb = (bruttoBer / 100) * 18.5;
  szj = (bruttoBer / 100) * 15;
  szj0 = 0;
  netto0 = bruttoBer - tb;
  netto = bruttoBer - szj - tb;
  mk = bruttoBer + (bruttoBer / 100) * 13;
  console.log(bruttoBer);
  console.log(kor);
  console.log(tb);
  console.log(szj);
  console.log(netto);
  console.log(szj0);
  console.log(netto0);
  console.log(mk);

  if (kor == 1) {
    return [tb, szj, netto, mk];
  } else if (kor == 2) {
    return [tb, szj0, netto0, mk];
  }
}

/*
A szükséges képletek:
TB = Bruttó bér 18.5% -a
SZJA = Bruttó bér 15% -a (HA 25 alatti akkor ez a z érték 0!)
Nettó bér = Bruttó bér-SZJA-TB
SZOCHO = Bruttó bér 13%-a
Munkáltató költsége: Bruttó bér+SZOCHO 

*/
