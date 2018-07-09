
let Store = function(storeName, cookie1, cookie2, cookie3, cookie4, cookie5, cookie6, cookie7, cookie8, cookie9) {
    this.storeName = storeName
    this.cok1 = cookie1;
    this.cok2 = cookie2;
    this.cok3 = cookie3;
    this.cok4 = cookie4;
    this.cok5 = cookie5;
    this.cok6 = cookie6;
    this.cok7 = cookie7;
    this.cok8 = cookie8;
    this.cok9 = cookie9;
};

// let storeTime = new Store('Store Name/Store Time', '6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM');
// let storeOne = new Store('Silver Spring Cookie Stand', 120, 150, 250, 300, 330, 450, 280, 205, 330 );
// let storeTwo = new Store('Rockville Cookie Stand', 85, 140, 235, 285, 306, 405, 270, 185, 308);
// let storeThree = new Store('White Oak Cookie Stand', 90, 165, 245, 295, 310, 415, 290, 165, 340);
// let storeFour = new Store('Takoma Park Cookie Stand', 95, 175, 255, 308, 318, 422, 295, 168, 370);

// let storeArray = [storeTime, storeOne, storeTwo, storeThree, storeFour]


//creating a constructor function, (template, blueprint)


let storeArray = []

let form = document.getElementById('cookie-stores')

let userSelect = form.cookieStand
let cookieSold = form.cookieSale

// let userRadio = form.wizardPet

form.addEventListener('submit', function(event) {
    event.preventDefault()
    let newStore = new Store(cookieStand.value, cookieSale.type)
    storeArray.push(newStore)
    
    console.log(storeArray)
})



// let elBody = document.getElementById('table-container')

// let elTable = document.createElement('table')

// elTable.setAttribute('id', 'cookie-table')
// elBody.appendChild(elTable)

// for(let i=0; i<storeArray.length; i++) {

//     let elRow = document.createElement('tr')
//     elTable.appendChild(elRow)

//     let elTh = document.createElement('th')
//     elTh.innerText = storeArray[i].storeName

//     elRow.appendChild(elTh)

//     let cookie1 = document.createElement('td')
//     cookie1.innerText = storeArray[i].cok1
//     elRow.appendChild(cookie1)

//     let cookie2 = document.createElement('td')
//     cookie2.innerText = storeArray[i].cok2
//     elRow.appendChild(cookie2)

//     let cookie3 = document.createElement('td')
//     cookie3.innerText = storeArray[i].cok3
//     elRow.appendChild(cookie3)

//     let cookie4 = document.createElement('td')
//     cookie4.innerText = storeArray[i].cok4
//     elRow.appendChild(cookie4)

//     let cookie5 = document.createElement('td')
//     cookie5.innerText = storeArray[i].cok5
//     elRow.appendChild(cookie5)

//     let cookie6 = document.createElement('td')
//     cookie6.innerText = storeArray[i].cok6
//     elRow.appendChild(cookie6)

//     let cookie7 = document.createElement('td')
//     cookie7.innerText = storeArray[i].cok7
//     elRow.appendChild(cookie7)

//     let cookie8 = document.createElement('td')
//     cookie8.innerText = storeArray[i].cok8
//     elRow.appendChild(cookie8)

//     let cookie9 = document.createElement('td')
//     cookie9.innerText = storeArray[i].cok9
//     elRow.appendChild(cookie9)
// };

// let storeTime = new Store('Store Locations', 6 + ':00AM', 7 + ':00AM', 8 + ':00AM', 9 + ':00AM', 10 + ':00AM', 11 + ':00AM', 12 + ':00PM', 1 + ':00PM', 2 + ':00PM')

// storeTimeArray = ['Store Name/Store Time', '6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM']

// for (let i=0; i<storeTimeArray.length; i++){

//     let header = elTable.createTHead('thead');
//     elTable.appendChild(header);
//     let elHeaderRow = header.insertRow(0);
//     let cell = elHeaderRow.insertCell(0);
//     cell.innerText = storeTimeArray[i]
   
// };

// or (let i=0; i<storeTimeArray.length; i++){

    // let footer = elTable.createFoot();
    // elTable.appendChild(footer);
    // let elFooterRow = footer.insertRow(0);
    // let cell = elFooterRow.insertCell(0);
    // cell.innerText = storeTimeArray[i]


// };


// Math.floor(this.minCustomersPerHour + (Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)));