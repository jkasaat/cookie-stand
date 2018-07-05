
let storeOne = {
    name: 'CookieStand A',
    product : 'Selling sandwich cookies',
    customers: 200 +' customers',
    employees: 5 + ' employees',
    location: 'Located in Silver Spring',
    createCustomer: function() {
        console.log(this.product)
    }
};

let storeTwo = {
    name: 'CookieStand B',
    product : 'Selling chocolate cookies',
    customers: 150 + ' customers',
    employees: 4 + ' employees',
    location: 'Located in Rockville',
    createCustomer: function() {
        console.log(this.product)
    }
};

let storeThree = {
    name: 'CookieStand C',
    product : 'Sellig vanilla cookies',
    customers: 300 + ' customers',
    employees: 7 + ' employees',
    location: 'Located in White Oak',
    createCustomer: function() {
        console.log(this.product)
    }
};

let storeFour = {
    name: 'CookieStand D',
    product : 'Selling butter cookies',
    customers: 300 + ' customers',
    employees: 7 + ' employees',
    location: 'Located in Takoma Park',
    createCustomer: function() {
        console.log(this.product)
    }
};


let myBody = document.getElementById('StoreInfo')

// storeOne

let storeOneName = document.createElement('h1')
myBody.appendChild(storeOneName)
storeOneName.setAttribute('class', 'store')
storeOneName.innerText = storeOne.name

let storeOneProd = document.createElement('p')
myBody.appendChild(storeOneProd)
storeOneProd.setAttribute('class', 'store')
storeOneProd.innerText = storeOne.product

let storeOneCust = document.createElement('p')
myBody.appendChild(storeOneCust)
storeOneCust.setAttribute('class', 'store')
storeOneCust.innerText = storeOne.customers

let storeOneEmp = document.createElement('p')
myBody.appendChild(storeOneEmp)
storeOneEmp.setAttribute('class', 'store')
storeOneEmp.innerText = storeOne.employees

let storeOneLoc = document.createElement('p')
myBody.appendChild(storeOneLoc)
storeOneLoc.setAttribute('class', 'store')
storeOneLoc.innerText = storeOne.location

// storeTwo

let storeTwoName = document.createElement('h1')
myBody.appendChild(storeTwoName)
storeTwoName.setAttribute('class', 'store')
storeTwoName.innerText = storeTwo.name

let storeTwoProd = document.createElement('p')
myBody.appendChild(storeTwoProd)
storeTwoProd.setAttribute('class', 'store')
storeTwoProd.innerText = storeTwo.product

let storeTwoCust = document.createElement('p')
myBody.appendChild(storeTwoCust)
storeTwoCust.setAttribute('class', 'store')
storeTwoCust.innerText = storeTwo.customers

let storeTwoEmp = document.createElement('p')
myBody.appendChild(storeTwoEmp)
storeTwoEmp.setAttribute('class', 'store')
storeTwoEmp.innerText = storeTwo.employees

let storeTwoLoc = document.createElement('p')
myBody.appendChild(storeTwoLoc)
storeTwoLoc.setAttribute('class', 'store')
storeTwoLoc.innerText = storeTwo.location

// storeThree

let storeThreeName = document.createElement('h1')
myBody.appendChild(storeThreeName)
storeThreeName.setAttribute('class', 'store')
storeThreeName.innerText = storeThree.name

let storeThreeProd = document.createElement('p')
myBody.appendChild(storeThreeProd)
storeThreeProd.setAttribute('class', 'store')
storeThreeProd.innerText = storeThree.product

let storeThreeCust = document.createElement('p')
myBody.appendChild(storeThreeCust)
storeThreeCust.setAttribute('class', 'store')
storeThreeCust.innerText = storeThree.customers

let storeThreeEmp = document.createElement('p')
myBody.appendChild(storeThreeEmp)
storeThreeEmp.setAttribute('class', 'store')
storeThreeEmp.innerText = storeThree.employees

let storeThreeLoc = document.createElement('p')
myBody.appendChild(storeThreeLoc)
storeThreeLoc.setAttribute('class', 'store')
storeThreeLoc.innerText = storeThree.location

// storeFour

let storeFourName = document.createElement('h1')
myBody.appendChild(storeFourName)
storeFourName.setAttribute('class', 'store')
storeFourName.innerText = storeFour.name

let storeFourProd = document.createElement('p')
myBody.appendChild(storeFourProd)
storeFourProd.setAttribute('class', 'store')
storeFourProd.innerText = storeFour.product

let storeFourCust = document.createElement('p')
myBody.appendChild(storeFourCust)
storeFourCust.setAttribute('class', 'store')
storeFourCust.innerText = storeFour.customers

let storeFourEmp = document.createElement('p')
myBody.appendChild(storeFourEmp)
storeFourEmp.setAttribute('class', 'store')
storeFourEmp.innerText = storeFour.employees

let storeFourLoc = document.createElement('p')
myBody.appendChild(storeFourLoc)
storeFourLoc.setAttribute('class', 'store')
storeFourLoc.innerText = storeFour.location