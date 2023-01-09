
// let Dscore1 = 44;
// let Dscore2 = 23;
// let Dscore3 = 71;

// let Kscore1 = 65;
// let Kscore2 = 54;
// let Kscore3 = 49;

const DAverage = (Dscore1,Dscore2,Dscore3) =>
{
    const Davg = (Dscore1 + Dscore2 + Dscore3)/3;
    return Davg;
}

const KAverage = (Kscore1,Kscore2, Kscore3) =>
{
    const Kavg = (Kscore1 + Kscore2 + Kscore3)/3;
    return Kavg;
}


const CheckWinner = (Davg , Kavg) =>
{
    if (Davg > Kavg) {
        console.log(`Dolphins has won the match BY ${Davg}-${Kavg}`);
    }
    else{
        console.log(`Koalas has won the match BY ${Kavg}-${Davg}`);
    }
}


  let value1 = DAverage(44,23,71);
  let value2 = KAverage(65,54,49);

  CheckWinner(value1 , value2);