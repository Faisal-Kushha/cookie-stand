'use strict';

/*function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let hoursOfOperation =  ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

let mainTag  = document.getElementById('one');

let Seattle = {
    name: 'Seattle',
    location: 'Seattle,USA',
    min: 23,
    max: 65,
    avgCookies: 6.3,
    amountOfCookies: [],
    customer:[],
    sum:0,
    getcookies: function(){ 
            let Seattleh  = document.createElement('h1');
            Seattleh.textContent = Seattle.name;
            mainTag.appendChild(Seattleh);
            let ul = document.createElement("ul");
            for (let i = 0; i < hoursOfOperation.length; i++) {
                this.customer[i]=randomNumber(this.min, this.max);
                Seattle.amountOfCookies[i] = Math.floor(this.customer[i] * this.avgCookies);
                Seattle.sum = Seattle.sum + Seattle.amountOfCookies[i];
                let li = document.createElement("li");
                li.textContent = hoursOfOperation[i] + ": " + Seattle.amountOfCookies[i] + " cookies";
                ul.appendChild(li);
            }
            let total = document.createElement("li");
            total.textContent = "Total: " + this.sum;
            ul.appendChild(total);
            mainTag.appendChild(ul);
        }
    }

    Seattle.getcookies();


let Tokyo = {
    name: 'Tokyo',
    location: 'Tokyo,Japan',
    min: 3,
    max: 24,
    avgCookies: 1.2,
    amountOfCookies: [],
    customer:[],
    sum:0,
    getcookies: function(){ 
            let Tokyoh  = document.createElement('h1');
            Tokyoh.textContent = Tokyo.name;
            let ul = document.createElement("ul");
            mainTag.appendChild(Tokyoh)
            for (let i = 0; i < hoursOfOperation.length; i++) {
                this.customer[i]=randomNumber(this.min, this.max);
                Tokyo.amountOfCookies[i] = Math.floor(this.customer[i] * this.avgCookies);
                Tokyo.sum = Tokyo.sum + Tokyo.amountOfCookies[i];
                let li = document.createElement("li");
                li.textContent = hoursOfOperation[i] + ": " + Tokyo.amountOfCookies[i]+" cookies";
                ul.appendChild(li);
            }
            let total  = document.createElement('li');
            total.textContent = "Total: " + this.sum;
            ul.appendChild(total);
            mainTag.appendChild(ul);

        }
    }

    Tokyo.getcookies();


let Dubai = {
    name: 'Dubai',
    location: 'Dubai,UAE',
    min: 11,
    max: 38,
    avgCookies: 3.7,
    amountOfCookies: [],
    customer:[],
    sum:0,
    getcookies: function(){ 
            let Dubaih  = document.createElement('h1');
            Dubaih.textContent = Dubai.name;
            mainTag.appendChild(Dubaih);
            let ul = document.createElement("ul");
            for (let i = 0; i < hoursOfOperation.length; i++) {
                this.customer[i] = randomNumber(this.min, this.max);
                Dubai.amountOfCookies[i] = Math.floor(this.customer[i] * this.avgCookies);
                Dubai.sum = Dubai.sum + Dubai.amountOfCookies[i];
                let li = document.createElement("li");
                li.textContent = hoursOfOperation[i] + ": " + Dubai.amountOfCookies[i]+" cookies";
                ul.appendChild(li);
            }
            let total = document.createElement("li");
            total.textContent = "Total: " + this.sum;
            ul.appendChild(total);
            mainTag.appendChild(ul);
        }
    }

    Dubai.getcookies();

    
let Paris = {
    name: 'Paris',
    location: 'Paris,France',
    min: 20,
    max: 38,
    avgCookies: 2.3,
    amountOfCookies: [],
    customer:[],
    sum:0,
    getcookies: function(){
            let Parish  = document.createElement('h1');
            Parish.textContent = Paris.name;
            mainTag.appendChild(Parish);
            let ul = document.createElement("ul");
            for (let i = 0; i < hoursOfOperation.length; i++) {
                this.customer[i] = randomNumber(this.min, this.max);
                Paris.amountOfCookies[i] = Math.floor(this.customer[i] * this.avgCookies);
                Paris.sum = Paris.sum + Paris.amountOfCookies[i];
                let li = document.createElement("li");
                li.textContent = hoursOfOperation[i] + ": " + Paris.amountOfCookies[i]+" cookies";
                ul.appendChild(li);
            }
            let total = document.createElement("li");
            total.textContent = "Total: " + this.sum;
            ul.appendChild(total);
            mainTag.appendChild(ul);
        }
    }

    Paris.getcookies();


let Lima = {
    name: 'Lima',
    location: 'Lima,Peru',
    min: 2,
    max: 16,
    avgCookies: 4.6,
    amountOfCookies: [],
    customer:[],
    sum:0,
    getcookies: function(){ 
            let Limah  = document.createElement('h1');
            Limah.textContent = Lima.name;
            mainTag.appendChild(Limah);
            let ul = document.createElement("ul");
            for (let i = 0; i < hoursOfOperation.length; i++) {
                this.customer[i]=randomNumber(this.min, this.max);
                Lima.amountOfCookies[i] = Math.floor(this.customer[i] * this.avgCookies);
                Lima.sum = Lima.sum + Lima.amountOfCookies[i];
                let li = document.createElement("li");
                li.textContent = hoursOfOperation[i] + ": " + Lima.amountOfCookies[i]+" cookies";
                ul.appendChild(li);

            }
            let total = document.createElement("li");
            total.textContent = "Total: " + this.sum;
            ul.appendChild(total);
            mainTag.appendChild(ul);
        }
    }

    Lima.getcookies();
*/

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let hoursOfOperation =  ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


function Branch(name, location, min, max, avgCookies, amountOfCookies, customer, sum ) {
    this.name = name;
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.amountOfCookies = amountOfCookies;
    this.customer = customer;
    this.sum = sum;
}
let seattle = new Branch('Seattle', 'Seattle,USA', 23, 65, 6.3, [], [], 0 );
let tokyo = new Branch('Tokyo', 'Tokyo,Japan', 3, 24, 1.2, [], [], 0 );
let dubai = new Branch('Dubai', 'Dubai,UAE', 11, 38, 3.7, [], [], 0 );
let paris = new Branch('Paris', 'Paris,France', 20, 38, 2.3, [], [], 0 );
let lima = new Branch('Lima', 'Lima,Peru', 2, 16, 4.6, [], [], 0 );

Branch.prototype.work = function(){
    for (let i = 0; i < hoursOfOperation.length; i++) {
        this.customer[i] = randomNumber(this.min, this.max);
        this.amountOfCookies[i] = Math.floor(this.customer[i] * this.avgCookies);
        this.sum = this.sum + this.amountOfCookies[i];
        }  
    }
    
seattle.work();
tokyo.work();
dubai.work();
paris.work();
lima.work();


let mainTag  = document.getElementById('one');
let table = document.createElement('table');
mainTag.appendChild(table);

function first(){
        let headerRow = document.createElement('tr');
        table.appendChild(headerRow);
        let p3 = document.createElement('th');
        headerRow.appendChild(p3);
    for (let x = 0; x < hoursOfOperation.length; x++){
        let p1 = document.createElement('th');
        headerRow.appendChild(p1);
        p1.textContent = hoursOfOperation[x];
    }
    
        let p4 = document.createElement('th');
        headerRow.appendChild(p4);
        p4.textContent = 'Daily Location Total';
    
}

first();

function second(cookies, name, sum){
        let dataRow = document.createElement('tr');
        let th = document.createElement ('th');
        th.textContent = (name);
        dataRow.appendChild(th)
    for(let j =0; j < cookies.length; j++){
        let td1 = document.createElement ('td');
        td1.textContent = cookies[j];
        dataRow.appendChild(td1)
    }
        let total = document.createElement ('td');
        total.textContent = sum;
        dataRow.appendChild(total)
        table.appendChild(dataRow);
}

second(seattle.amountOfCookies, seattle.name, seattle.sum)
second(tokyo.amountOfCookies, tokyo.name, tokyo.sum)
second(dubai.amountOfCookies, dubai.name, dubai.sum)
second(paris.amountOfCookies, paris.name, paris.sum)
second(lima.amountOfCookies, lima.name, lima.sum)

        let dataRow = document.createElement('tr');
        let th = document.createElement ('th');
        th.textContent = ('Total');
        dataRow.appendChild(th)

    for(let s =0; s < 14; s++){
        let td2 = document.createElement ('td');
        td2.textContent = seattle.amountOfCookies[s] + tokyo.amountOfCookies[s] + dubai.amountOfCookies[s] + paris.amountOfCookies[s] + lima.amountOfCookies[s];
        dataRow.appendChild(td2)
    }

        let total = document.createElement ('td');
        total.textContent = seattle.sum + tokyo.sum + dubai.sum + paris.sum + lima.sum;
        dataRow.appendChild(total)
        table.appendChild(dataRow);