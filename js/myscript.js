/* User info */
let kmUser = parseFloat(document.getElementById("my-km").value);
let ageUser = document.getElementById("user-age").value;
let calcoloPrice = 0;
const kmPrice = 0.21;

/* event listener calcolo */
const userButton = document.getElementById("my-submit");

userButton.addEventListener("click", function(){
    
    

    if ( (isNaN(kmUser)) || ((kmUser < 0) || (kmUser > 1000)) ){
        document.getElementById("my-ticket-price").innerHTML = ("I Dati inserti non sono corretti. Non posso calcolare il prezzo.");
    } else if (ageUser == "under"){
        calcoloPrice = (((kmUser * kmPrice) - (((kmUser * kmPrice) * (20)) / 100))).toFixed(2);
        document.getElementById("my-ticket-price").innerHTML = ("UNDER 18 PRICE ") + calcoloPrice + (" euro");
        
    } else if(ageUser == "65"){
        calcoloPrice = (((kmUser * kmPrice) - (((kmUser * kmPrice) * (40)) / 100))).toFixed(2);
        document.getElementById("my-ticket-price").innerHTML = ("OVER 65 PRICE ") + calcoloPrice + (" euro");
        
    } else if(ageUser == "18") {
        calcoloPrice = (kmUser * kmPrice).toFixed(2);
        document.getElementById("my-ticket-price").innerHTML = calcoloPrice + (" euro");
    }
    
    let nameUser = document.getElementById("name-user").value;
    document.getElementById("print-user-name").innerHTML = nameUser;
    
    
    let surnameUser = document.getElementById("surname-user").value;
    document.getElementById("print-user-surname").innerHTML = surnameUser;
    
    document.getElementById("display-click").classList.remove("d-none");
});

/* reset evenListener */
const userButtonReset = document.getElementById("my-reset");

userButtonReset.addEventListener("click", function(){
    document.getElementById("name-user").value = "";
    document.getElementById("surname-user").value = "";
    document.getElementById("my-km").value = "";
    document.getElementById("display-click").classList.add("d-none");
});
