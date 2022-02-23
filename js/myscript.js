/* User info const */
let kmUser = document.getElementById("my-km").value;
let ageUser = document.getElementById("user-age").value;
let calcoloPrice = 0;
const kmPrice = 0.21;






const userButton = document.getElementById("my-submit");

userButton.addEventListener("click", function(){
    
    if ( (isNaN(kmUser)) || ((kmUser < 0) || (kmUser > 1000)) ){
        document.getElementById("my-ticket-price").innerHTML = ("I Dati inserti non sono corretti. Non posso calcolare il prezzo.");
    } else if (ageUser.value == "under"){
        calcoloPrice = (((kmUser * kmPrice) - (((kmUser * kmPrice) * (20)) / 100))).toFixed(2);
        document.getElementById("my-ticket-price").innerHTML = ("UNDER 18 PRICE ") + calcoloPrice + (" euro");

    } else if(ageUser.value == "65"){
        calcoloPrice = (((kmUser * kmPrice) - (((kmUser * kmPrice) * (40)) / 100))).toFixed(2);
        document.getElementById("my-ticket-price").innerHTML = ("OVER 65 PRICE ") + calcoloPrice + (" euro");

    } else {
        calcoloPrice = (kmUser * kmPrice).toFixed(2);
        document.getElementById("my-ticket-price").innerHTML = calcoloPrice + (" euro");
    }

    const nameUser = document.getElementById("name-user").value;
    document.getElementById("print-user-name").innerHTML = nameUser;
    
});


/* CONVALIDA E NON CALCOLA IL PREZZO */
/* if ( (isNaN(kmUser) || isNaN(ageUser)) || ((kmUser < 0) || (kmUser > 1000)) || ((ageUser < 0) ||(ageUser > 130)) ){
    document.getElementById("my-ticket-price").innerHTML = ("I Dati inserti non sono corretti. Non posso calcolare il prezzo.");
} else if (ageUser < adultAge){
    calcoloPrice = (((kmUser * kmPrice) - (((kmUser * kmPrice) * (20)) / 100))).toFixed(2);
    document.getElementById("my-ticket-price").innerHTML = ("UNDER 18 PRICE ") + calcoloPrice + (" euro");
} else if(ageUser > elderlyAge){
    calcoloPrice = (((kmUser * kmPrice) - (((kmUser * kmPrice) * (40)) / 100))).toFixed(2);
    document.getElementById("my-ticket-price").innerHTML = ("OVER 65 PRICE ") + calcoloPrice + (" euro");
} else{
    calcoloPrice = (kmUser * kmPrice).toFixed(2);
    document.getElementById("my-ticket-price").innerHTML = calcoloPrice + (" euro");
} */