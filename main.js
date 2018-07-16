let Store = function (name, cookieSalesArray) {
    this.name = name;
    this.cookieSalesArray = cookieSalesArray;
   
};

let storeOne = new Store('Silver Spring Cookie Stand', [8, 22, 3, 4, 5, 5, 7, 8, 3]);	
let storeTwo = new Store('Rockville Cookie Stand', [1, 12, 2, 9, 5, 5, 10, 11, 3]);
let storeThree = new Store('White Oak Cookie Stand', [4, 18, 16, 12, 1, 3, 3, 9, 5]);
let storeFour = new Store('Takoma Park Cookie Stand', [34, 27, 9, 9, 13, 14, 7, 2, 1]);


let storeArray = [storeOne, storeTwo, storeThree, storeFour];

let elBody = document.getElementById('table-container');

let elTable = document.createElement('table');

elTable.setAttribute('id', 'cookie-table')
elBody.appendChild(elTable);

let hoursArray = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"];

// header one -- top/hour
let elRowHead = document.createElement('tr')
elTable.appendChild(elRowHead);

let elHourHeader = document.createElement('th');			// applied css to first row for center text-alignment
elHourHeader.innerText = "STORES/HOURS";					// added this new line for stores and hours title
elRowHead.appendChild(elHourHeader);

for (let h = 0; h < hoursArray.length; h++) {
    let headText = document.createElement('th');
    headText.innerText = hoursArray[h];
    elRowHead.appendChild(headText);
}

// header 2 - Left

for (let i = 0; i < storeArray.length; i++) {

    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);

    let elTh = document.createElement('th')
    elTh.innerText = '';

    let name = document.createElement('td');
    name.innerText = storeArray[i].name;
    elRow.appendChild(name);

    // Body Row
    for (let m = 0; m < storeArray[i].cookieSalesArray.length; m++) {		
        let cookieSales = document.createElement('td');
        cookieSales.innerText = storeArray[i].cookieSalesArray[m];			
        elRow.appendChild(cookieSales);
        
    
    };

};


// Footer

let elRow = document.createElement('tr');
elRow.id = "totalRow"
elTable.appendChild(elRow);

// elRow = document.createElement('tr');
// elTable.appendChild(elRow);

let total = document.createElement('td');			// changed th to td and applied bold style and text-center via css
total.innerText = 'Total';
elRow.appendChild(total);


//totalling

for (let m = 0; m < hoursArray.length; m++) {
    let total = 0;

    for (let i = 0; i < storeArray.length; i++) {
        total += storeArray[i].cookieSalesArray[m];			// m is index for cookieSalesArray from hoursArray, since hours array and cookieSalesArray are of the same length
    }

    // add to Document Object Model (DOM) [The Table]
    let totalSales = document.createElement('td');
    totalSales.innerText = total;
    elRow.appendChild(totalSales);
}
// 


let form = document.getElementById('cookie-stores')

let addNewStore = form.cookieStand
let time1 = form.rev1
let time2 = form.rev2
let time3 = form.rev3
let time4 = form.rev4
let time5 = form.rev4
let time6 = form.rev4
let time7 = form.rev4
let time8 = form.rev4
let time9 = form.rev4


form.addEventListener('submit', function(event) {
    event.preventDefault()

    let cookieSales = [parseInt(time1.value),parseInt(time2.value),parseInt(time3.value),parseInt(time4.value),parseInt(time5.value),parseInt(time6.value), parseInt(time7.value),parseInt(time8.value),parseInt(time9.value)];
    let newStore = new Store(addNewStore.value,cookieSales)
    
    storeArray.push(newStore)

    console.log(newStore)

    // adding new row to the table by
    // first removing the last total row from the total, then appending the new row with new store
    // and finally re-adding and calculate the total row as the last one, here

    // first, removing the last row from the table
    let totalRow = document.getElementById('totalRow');
    elTable.removeChild(totalRow);

    // second, add new row for the new store, with tds for each hour and store name
    elRow = document.createElement('tr');
    elTable.appendChild(elRow);

    let name = document.createElement('td');
    name.innerText = addNewStore.value;
    elRow.appendChild(name);

    // loop throw cookieSales array and add td  each time, then add each one to the row (will form cells)
    for(let t=0; t < cookieSales.length; t++) {
        let time = document.createElement('td');
        time.innerText = cookieSales[t];
        elRow.appendChild(time);
    }

    // lastly, re-add and re-calculate the total row 
    elRow = document.createElement('tr');
    elRow.id = 'totalRow';      // added this for adding new store version
    elTable.appendChild(elRow);

    let total = document.createElement('td');
    total.innerText = 'Total';
    elRow.appendChild(total);

    for (let m = 0; m < hoursArray.length; m++) {
        let total = 0;
    
        for (let i = 0; i < storeArray.length; i++) {
            total += storeArray[i].cookieSalesArray[m];			// m is the index for cookieSalesArray from hoursArray, since hours array and cookieSalesArray are of the same length
        }
    
        // add to Document Object Model (DOM) [The Table]
        let totalSales = document.createElement('td');
        totalSales.innerText = total;
        elRow.appendChild(totalSales);
    }
})
