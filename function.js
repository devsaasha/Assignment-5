// Create a currency converter function 
// from taka to USD, CAD, POUND, EURO etc
const currencyCon=(amount, currencyname)=>{

      let rate ='';

      switch(currencyname){

         case 'USD' :
             rate = 86;
             break;

         case 'CAD' :
             rate = 68;
             break;

         case 'POUND' :
             rate = 112;
             break;

         case 'EURO' :
             rate = 93;
             break;


      }
      console.log(`
           ${amount}  ${currencyname} = ${amount * rate} BDT.
      `);
}