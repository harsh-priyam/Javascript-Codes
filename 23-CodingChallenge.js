

const checkDogs = function (dogsJulia , dogsKate) {

   const  dogsJuliaCorrected = dogsJulia.slice();
   dogsJuliaCorrected.splice(0,1);
   dogsJuliaCorrected.splice(-2);

   console.log(dogsJuliaCorrected);

   const dogs = dogsJuliaCorrected.concat(dogsKate);
   console.log(dogs);


    dogs.forEach(function (dogs,index) {
        if (dogs <= 3) {
            console.log(`For Dog ${index} : Puppies!!!`);
        }
        else{
            console.log(`For Dog ${index} : Big Dogs!!!`);
        }
    })



}

checkDogs([3,5,2,12,7],[4,1,15,8,3]);