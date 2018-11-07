var sha1 = require("sha1");
var congressmen = ["Alcee Hastings",
    "Alfred Lawson",
    "Bill Posey",
    "Brian Mast",
    "Carlos Curbelo",
    "Charlie Crist",
    "Daniel Webster",
    "Darren Soto",
    "Debbie Wasserman Schultz",
    "Dennis Ross",
    "Francis Rooney",
    "Frederica Wilson",
    "Gus Bilirakis",
    "Ileana Ros-Lehtinen",
    "John Rutherford",
    "Kathy Castor",
    "Lois Frankel",
    "Mario Diaz-Balart",
    "Matt Gaetz",
    "Neal Dunn",
    "Stephanie Murphy",
    "Ted Deutch",
    "Ted Yoho",
    "Thomas Rooney",
    "Val Demings",
    "Vern Buchanan"];

var congressmenSecret = new Array();

for (var i = 0; i < congressmen.length; i++) {
    congressmenSecret.push(sha1(congressmen[i]));
    console.log("The secret code for " + congressmen[i] + " is = " + congressmenSecret[i]);
}

function BinarySearchTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function (passedValue) {
    let subtree = passedValue < this.value ? 'left' : 'right';
    if (this[subtree]) {
        this[subtree].insert(passedValue);
    } else {
        this[subtree] = new BinarySearchTree(passedValue);
    }
};
var newArray = new BinarySearchTree(congressmenSecret.shift());
for (k = 0; k < congressmenSecret.length; k++) {
    newArray.insert(congressmenSecret.shift());
}

BinarySearchTree.prototype.contains = function (value) {
    if (this.value === value) {
        return true;
    }
    let subtree = value < this.value ? "left" : "right";
    if (this[subtree]) {
        return this[subtree].contains(value);
    } else {
        return false;
    }
};

BinarySearchTree.prototype.getMin = function () {
    if (this.left) {
        return this.left.getMin();
    } else {
        return this.value;
    }
}

var congressmenSecret = new Array();

for (var i = 0; i < congressmen.length; i++) {
    congressmenSecret.push(sha1(congressmen[i]));
}
console.log(newArray);
console.log('Min Hash : ' + newArray.getMin());
var minName = [];
minName = congressmenSecret.indexOf(newArray.getMin());

console.log("Min Hash confress name : "+congressmen[minName]);
var nowCongressmen = new BinarySearchTree('Daniel Webster');

for (let j = 0; j < congressmenSecret.length; j++) {
    nowCongressmen.insert(congressmenSecret[j]);
}
console.log(nowCongressmen.contains("Daniel Webster"));