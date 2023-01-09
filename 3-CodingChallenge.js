let Dscore1 = 96;
let Dscore2 = 108;
let Dscore3 = 89;

let Kscore1 = 88;
let Kscore2 = 91;
let Kscore3 = 110;

let Davg = Dscore1 + Dscore2 + Dscore3 / 3;
let Kavg = Kscore1 + Kscore2 + Kscore3 / 3;

if (Davg > Kavg && Davg >= 100) {
    console.log(`And The Winner of this championship is TEAM DOLPHINS`);
}
else if (Kavg > Davg && Kavg >= 100) {
    console.log(`And The Winner of this championship is TEAM DOLPHINS`);
}

else if (Davg == Kavg) {
    console.log(`The ChampionShip has Been Drawn`);
}
else if (Davg < 100 && Kavg < 100) {
    console.log(`And Hence, There is No Winner in this Championship`);
}