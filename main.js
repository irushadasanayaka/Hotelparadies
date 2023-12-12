//dom elements hotel
const rooms = document.getElementById("room-no");
const sizes = document.getElementById("roomsize");
const adults = document.getElementById("adults");
const children = document.getElementById("kids");
const durations = document.getElementById("checkduration");
const kidm = document.getElementById("kidsmeal");
const currentcost = document.getElementById("current");
const submitbtn = document.getElementById("submitbtn");
const outputtext = document.getElementById('output');
const extrabed = document.getElementById("extrabed");
const promotion = document.getElementById("promo");
const lobtn = document.getElementById("loyaltybtn");
const favourite = document.getElementById("favourite");
const showfavorite = document.getElementById("shfavourite");



// dom elements for adventure
const adults2 = document.getElementById("adults2");
const kids2 = document.getElementById("kids2");
const guideadults = document.getElementById("gadults");
const guidekids = document.getElementById("gkids");
const durations2 = document.getElementById("duration2");
const submitbtn1 = document.getElementById("submitbtn2");
const outputtext2 = document.getElementById('output2');
const type = document.getElementById("type");

// add eventlisteners
submitbtn.addEventListener("click", showhotel);
submitbtn1.addEventListener("click", showadven);
lobtn.addEventListener("click", showloyalty);
sizes.addEventListener("change", rsize)
rooms.addEventListener("change", roomnum);
extrabed.addEventListener("change", etxbed);
kidm.addEventListener("change", mealskid);
durations.addEventListener("change", time);
adults2.addEventListener("change", advadults);
kids2.addEventListener("change", advkids);
durations2.addEventListener("change", adduration);
guideadults.addEventListener("change", gadults);
guidekids.addEventListener("change", gakids);
favourite.addEventListener("click", addToFavorites);
showfavorite.addEventListener("click", showFavorites);



let roomnumber;
var total;
var total2;
let adultsnumber;
let kidsnumber;
let value;
let roomtype;
let add;
let bed;
let duration;
let loyalty;
let promocode;
let totalcost2;
let cost;
let rnum;

let type2;
let adultsnumber2;
let kidsnumber2;
let duration2;
let adprice;
let pricedue;
let pricedue1;
let gad;
let gkid;
let guide;
let adventure;
let adventure2;
let guidead;
let guidead2;





initialize();
//initialization
function initialize(){
    
    rnum = 0;
    value = 0;
    add = 0;
    kidsnumber = 0;
    duration = 0;
    kidsnumber2 = 0;
    adultsnumber2 = 0;
    adventure = 0;
    adventure2 = 0;
    duration2 = 0;
    guidead = 0;
    guidead2 = 0;


    


    cost = (((rnum * value) + (add + kidsnumber)) * duration) + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentcost.innerText = `Your current cost is ${cost} LKR`
}

// functions for current cost
function rsize(){
    roomtype = sizes.value;
    if(roomtype == "single"){
        value = 25000
        
    }else if(roomtype == "double"){
        value = 35000

    }else if(roomtype == "triple"){
        value = 40000 

    }else{
        value = 0
    }

    cost = (((rnum * value) + (add + kidsnumber)) * duration) + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentcost.innerText = `Your current cost is ${cost} LKR`

}

function roomnum(){
    rnum = parseInt(rooms.value)

    cost = (((rnum * value) + (add + kidsnumber)) * duration) + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentcost.innerText = `Your current cost is ${cost} LKR`

}

function etxbed(){
    bed = extrabed.value;
    
    
    if(bed == "yes"){
        add = 8000

    }else{
        add = 0
    }

    cost = (((rnum * value) + (add + kidsnumber)) * duration) + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentcost.innerText = `Your current cost is ${cost} LKR`

}

function mealskid(){
    kidsnumber = parseInt(kidm.value);
    kidsnumber = kidsnumber * 5000

    cost = (((rnum * value) + (add + kidsnumber)) * duration) + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentcost.innerText = `Your current cost is ${cost} LKR`

}

function time(){
    duration = parseInt(durations.value);

    cost = (((rnum * value) + (add + kidsnumber)) * duration) + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentcost.innerText = `Your current cost is ${cost} LKR`

}

function advadults(){
    adultsnumber2 = parseInt(adults2.value);
    type2 = type.value
    
    if(type2 == "local"){
       adventure = adultsnumber2 * 5000
    }else{
       adventure = adultsnumber2 * 10000
    }

    cost = (((rnum * value) + (add + kidsnumber)) * duration) +(((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentcost.innerText = `Your current cost is ${cost} LKR`
}

function advkids(){
    kidsnumber2 = parseInt(kids2.value);
    type2 = type.value

    if(type2 == "local"){
        adventure2 = kidsnumber2 * 2000
    }else{
        adventure2 = kidsnumber2 * 5000
    }

    cost = (((rnum * value) + (add + kidsnumber)) * duration) + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentcost.innerText = `Your current cost is ${cost} LKR`
}

function adduration(){
    duration2 = parseInt(durations2.value);

    cost = (((rnum * value) + (add + kidsnumber)) * duration) + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentcost.innerText = `Your current cost is ${cost} LKR`
}

function gadults(){
    if(guideadults.checked){
        guidead = 1000
    }else{
        guidead = 0
    }
    
    

    cost = (((rnum * value) + (add + kidsnumber)) * duration) + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentcost.innerText = `Your current cost is ${cost} LKR`

}

function gakids(){
    if(guidekids.checked){
        guidead2 = 500
    }else{
        guidead2 = 0
    }

    cost = (((rnum * value) + (add + kidsnumber)) * duration) + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentcost.innerText = `Your current cost is ${cost} LKR`
}

//function for hotel booking    
function showhotel(){
    roomnumber = parseFloat(rooms.value);
    roomtype = sizes.value;
    bed = extrabed.value;
    duration = parseInt(durations.value);
    kidsnumber = parseInt(kidm.value);
    promocode = promotion.value;




    if(roomtype == "single"){
        value = 25000
        
    }else if(roomtype == "double"){
        value = 35000

    }else if(roomtype == "triple"){
        value = 40000 

    }else{
        value = 0
    }

    if(bed == "yes"){
        add = 8000

    }else{
        add = 0
    }

    


    var toatl3 = totalcost(); 

    

    total = (roomnumber * value) + add;
    total = (total * duration) + ( kidsnumber * 5000) + toatl3;
    

//promo code

    if(promocode == "Promo123"){
        totalcost2 = total * (95/100)
        alert(`Congratulations you got 5% discount`)

    }else if(promocode ==""){
        
        totalcost2 = total
    }else{
        alert(`Sorry, Invalid voucher number`)
        totalcost2 = total
        
    }

    ad = confirm(`Thank you for booking our hotel \nYour total cost is ${totalcost2}`)

//confirmation

    if(ad){
        outputtext.innerText = `Your total cost for booking is LKR ${totalcost2} `;
    }else{
        outputtext.innerText = `Please make your adjustments `;
    }
}

// function to add totalcost , called in showhotel()

function totalcost(){
    adultsnumber2 = parseInt(adults2.value);
    kidsnumber2 = parseInt(kids2.value);
    duration2 = parseInt(durations2.value);
    type2 = type.value

    if(guideadults.checked){
        gad = 1000
    }else{
        gad = 0
    }
    if(guidekids.checked){
        gkid = 500
    }else{
        gkid = 0
    }
    if(type2 == "local"){
        pricedue =  adultsnumber2 * 5000
        pricedue1 = kidsnumber2 * 2000
        
       
    }else{
        pricedue =  adultsnumber2 * 10000
        pricedue1 = kidsnumber2 * 5000
        
    }

    
    guide = (gad + gkid)
    adprice = (pricedue + pricedue1) * duration2;

   var total2 = adprice + guide;
   return total2;
}





// function for adventure

function showadven(){
    adultsnumber2 = parseInt(adults2.value);
    kidsnumber2 = parseInt(kids2.value);
    duration2 = parseInt(durations2.value);
    type2 = type.value

    if(type2 == "local"){
        pricedue =  adultsnumber2 * 5000
        pricedue1 = kidsnumber2 * 2000
        
       
    }else{
        pricedue =  adultsnumber2 * 10000
        pricedue1 = kidsnumber2 * 5000
        
    }

    if(guideadults.checked){
        gad = 1000
    }else{
        gad = 0
    }
    if(guidekids.checked){
        gkid = 500
    }else{
        gkid = 0
    }
    
    guide =  (gad + gkid)
    adprice = (pricedue + pricedue1) * duration2;

    total2 = adprice + guide;

   
    ans = confirm(`Thank you for booking the Diving adventure in our hotel \nYour selection cost is ${total2} LKR` );
    
    if(ans){
        outputtext2.innerHTML = ` The total cost for adventure is LKR ${total2}`;
    }else{
        outputtext2.innerHTML = ` Please make your adjustments in booking adventure`;
    }

}


//function for show loyaltypoints
function showloyalty(){
    roomnumber = parseInt(rooms.value);
    if(roomnumber > 3){
        loyalty = roomnumber * 20
    }else{
        loyalty = 0
    }

    alert(`You have ${loyalty} loyalty points`)
}

// function for add to favorite

function addToFavorites() {
    const fbooking = {
        roomNumber: roomnumber,
        roomType: roomtype,
        bed: bed,
        duration: duration,
        kidsNumber: kidsnumber,
        promoCode: promocode,
        totalCost: totalcost2,
        adventureDetails: {
            adultsNumber: adultsnumber2,
            kidsNumber: kidsnumber2,
            duration: duration2,
            guideAdults: gad,
            guideKids: gkid,
            type: type2,
            adventureCost: total2,
        },
    };

    
    localStorage.setItem("favoriteBooking", JSON.stringify(fbooking));

    confirm("Booking added to favorites!");
}


// Function to show saved favorites
function showFavorites() {
    const favoriteBooking = JSON.parse(localStorage.getItem("favoriteBooking"));

    if(favoriteBooking){

        const favoriteDetails = `Favorite Booking Details:\n\n
        Room Number: ${favoriteBooking.roomNumber}\n
        Room Type: ${favoriteBooking.roomType}\n
        Extra Bed: ${favoriteBooking.bed}\n
        Duration of staying:${favoriteBooking.duration}\n
        Kids Number: ${favoriteBooking.kidsNumber}\n
        Total Cost: ${favoriteBooking.totalCost} LKR\n
        Adventure Details:\n
         Adults: ${favoriteBooking.adventureDetails.adultsNumber}\n
         Kids : ${favoriteBooking.adventureDetails.kidsNumber}\n
         Duration: ${favoriteBooking.adventureDetails.duration}\n
         Guide Adults: ${favoriteBooking.adventureDetails.guideAdults}\n
         Guide Kids: ${favoriteBooking.adventureDetails.guideKids}\n
         Type: ${favoriteBooking.adventureDetails.type}\n
         Cost of Adventure: ${favoriteBooking.adventureDetails.adventureCost} LKR`;

        alert(favoriteDetails);
        
    }else{

        alert("No favorite booking found!");
    }
}
