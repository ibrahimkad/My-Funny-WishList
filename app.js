'use strict'




function Wishlist() {
    this.wish = wish;
    wishlist.all.push(this);
}

wishlist.all = [];


var tableEl = document.getElementById('table');
var trEl = document.createElement('tr');

var thEl = document.createElement('th');
trEl.appendChild(thEl);


var tdEl1 = document.createElement('td');
thEl.appendChild(tdEl1);
tdEl1.textContent = 'Wish Title';

var tdEl2 = document.createElement('td');
thEl.appendChild(tdEl2);
tdEl2.textContent = 'Expected date';

var tdEl3 = document.createElement('td');
thEl.appendChild(tdEl3);
tdEl3.textContent = 'Your wish will came true xD';

button.addEventListener('click', handelClick);
// tableEl.appendChild(thEl);


fucnction handelClick(){
    event.preventDefault();
    var trEl = document.createElement('tr');


    getRandomInt();
    for (var i = 0; i < wishlist.all.length; i++) {
        var tdEl4 = document.createElement('td');
        thEl.appendChild(tdEl4);
        tdEl4.textContent = 'years';


    }

}
for (var i=0;i<5;i++){

    var a= wishlist new(this.wish);

}












function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}