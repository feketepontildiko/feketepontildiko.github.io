//const { isNull } = require("lodash");

console.log("HEllo, this is a first console message");
//alert("hello te fasz" );

function calcAmount() {


    let price = 100;
    let amountInput = document.querySelector("input[name='amount-input']");
    if (parseInt(amountInput.value) > 0 && parseInt(amountInput.value) < 10) {
        let amount = parseInt(amountInput.value) * price;
        //alert("Fizetendő: " + amount + "Ft.")

        let showAmount = document.querySelector("span.show-amount");
        showAmount.innerHTML = amount;
    }
    else {
        alert("Ordered value could be between: 0-11");
    }

}

function customerDataISValid() {
    if ((document.querySelector("input[name='name']")).value == "") {
        alert("The name field can not be empty!");
    }
    if ((document.querySelector("input[name='address']")).value == "") {
        alert("The address field can not be empty!");
    }
    if ((document.querySelector("input[name='phone']")).value == "") {
        alert("The phone field can not be empty!");
    }
    if ((document.querySelector("input[name='amount-input']")).value == "") {
        alert("The volume field can not be empty!");
    }


    /* if ((document.querySelector("input[name='name']")).length === 0) {
         alert("The name field can not be empty!");
     }
     if ((document.querySelector("input[name='address']")).length === 0) {
         alert("The address field can not be empty!");
     }
     if ((document.querySelector("input[name='phone']")).length === 0) {
         alert("The phone field can not be empty!");
     }
     */
}

function showDegree() {


    let daysList = ["H", "K", "Sze", "Cs", "P", "Szo", "V"];
    let weeklyDegreeList = [-12, 35, 10, 20, 30, 7, 15];
    let weeklyGiftList = ["Hot tea", "Hot chocklet", "Pudding", "Choclet", "Cake", "Coke", "Ice cofee"];
    let degreeBorders = [-10, 0, 10, 15, 20, 30, 500];

    let selected = document.querySelector("select[name='days']").value;
    let match = false;
    let indexDegree;
    for (let i = 0; i < daysList.length && match == false; i++) {
        if (selected == daysList[i]) {
            match = true;
            indexDegree = i;
        }

    }
    let showDegree = document.querySelector("span.degree");
    showDegree.innerHTML = weeklyDegreeList[indexDegree];
    let indexBorder;
    let less=false;
    for (let i = 0; i < daysList.length && less == false; i++) {
        if (weeklyDegreeList[indexDegree]<= degreeBorders[i]) {
            less = true;
            indexBorder = i;
        }

    }
    let showGift= document.querySelector("span.gift");
    showGift.innerHTML = weeklyGiftList[indexBorder];
    
}






