'use strict';

//==============Global Variables===============//
const locationArr = [];
const hours = [];
const footTraffic = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];



//==============Form Entities===============//
// Step 1: grab the window into the DOM
let storeSection = document.getElementById('stores');

//==============Helper-Funcitons/Utilities===============//
function renderAll(){
  for(let i = 0; i < locationArr.length; i++){
    locationArr[i].render();
  }
}



//==============Constructor Function===============//
//1. Object goes here.
function Store (location, minCustomer, maxCustomer, avgSale, numCustomer, openTime, closingTime){
  this.Location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSale = avgSale;
  this.numCustomer = numCustomer;
  this.openTime = openTime;
  this.closingTime = closingTime;

  this.openHours = [];
  this.hourlySales = [];

  this.calcOpenSales();
}
  



//==============Prototypes===============//
//1. Create random number of customers per object.

Store.prototype.randCustomerGenerator = function (minCustomer, maxCustomer){
  return Math.floor(Math.random() * (maxCustomer - minCustomer + 1) + minCustomer);
};

Store.prototype.fillHoursArray = function() {
  let hour = this.openTime;
  for (let i = 0; i < this.closingTime - this.openTime + 1; i++){
    let time = hour + ":00" + (hour < 12 ? "am" : "pm");
    this.openHours.push(time);
    if (hour === 12){
      hour = 1;
    } else {
      hour++;
    }
  }
}


/*
Store.prototype.hourlyCookiesCalc = function () {
  this.hourlySalesthis.avgSale * this.randCustomerGenerator(this.minCustomer, this.maxCustomer)
}
*/


/*
randNumCust: function (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
},
getNum: function () {
  this.numCustomer = this.randNumCust(this.minCustomer, this.maxCustomer);
  return this.numCustomer; //unnecessary?
},
*/
function hourlyCookies(){
  //function of avgSale * randomCustomer
}
function hourlyTotals(){
  //function of hourlyCookies * each Store
}




//==============Table===============//
//2. Render objects into table




//==============Executables (executes on page load)===============//
//1. is this the render?



/* Replace all Object Literals with a single constructor function that when called
with the `new` keyword, it creates a new instance.
*/

/***Make sure to use constructors */



/* Replace the lists of your data for each store and build a single table of data instead. 
follow the example within the readme.
*/

/* Display each stores data in a table format similar to the example. Break each column
by the hour and complete each row with a "Daily Location Total"
*/

/* Each cookie stand location should have a separate render() method that creates and 
appends its row to the table
*/

/* The header row and footer row are each created in their own stand-alone function
******** NOTE: please use a header cell for both the header row (containing store hours)
************** and the footer row (hourly and grand totals across all stores)
*/

/*Create a second table that will help Pat manage staffing. Using the basic rubric 
that single Salmon Cookie Tosser can serve 20 customers per hour, and that each 
location should have a minimum of two Salmon Cookie Tossers on shift at all times, 
calculate how many Salmon Cookie Tossers are needed at each location each hour.
*/

/* Research into Pat’s customer traffic has shown that the hours of 8am, 11am, 
and 3pm tend to have more customers than other hours, and that the hours with the 
least customers are 1pm and 6pm. Apply a control curve to the projected sales numbers 
to reflect those daily ebbs and flows. The following array represents the percentage 
of maximum traffic that occurs during each of the hours from 6am to 8pm, and can be 
used to scale the projected hourly customer traffic into more accurate values: 
[0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6]
*/