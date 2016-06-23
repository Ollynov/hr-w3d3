//your code here!
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function(element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

// 1. Increment each value by one

function incrementValues(obj) {
	var newObj = {}
	map(obj, function(value, key) {
		newObj[key] = (obj[key] + 1)
	})
	return newObj
}

// 2. convert all to upercase
function uppercaseValues(obj) {
	var newObj = {}
	map(obj, function(value, key) {
		if (typeof obj[key] === "string") {
			newObj[key] = obj[key].toUpperCase();
		} else {
			newObj[key] = obj[key]
		}
	})
	return newObj;
}

// 3. countNestedKeys. given object where values are objects, give count of keys in each nested object
// Helper function
function countKeys(obj) {
	var count = 0
	each(obj, function(value) {
		count = count + 1
	}) 
	return count;
}

function countNestedKeys(obj) {
	
	function countKeys(obj) {
	var count = 0
	each(obj, function(value, key) {
		count = count + 1
	}) 
	return count;
}

	var newObj = {}
	map(obj, function(value, key) {
		newObj[key] = countKeys(value);
	})
	return newObj;
}





// Operate 






