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
