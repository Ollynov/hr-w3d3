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

// FILTER BASIC REQUIREMENTS

function filter(coll, predicate) {
  var acc = [];
  var obj = {};
  if (Array.isArray(coll) {
	  each(coll, function(element, i) {
	    if (predicate(element, i)) {
	      acc.push(element);
	    }
	  });
	  return acc;
   } else {
   	  each(obj, function(value, key) {
   	  	if (predicate(value, key) {
   	  		obj[key] = value;
   	  	})
   	  }
   	  return obj;
   }


}



// 1. Returns only even numbers
function evens(arr) {
	return filter(arr, function(element) {
		 return element % 2 === 0
	})
}

//2. multiplesOfThree Write a function called multiplesOfThree that takes an array of numbers as a 
// parameter, and returns an array of only the numbers that are multiples of three

function multiplesOfThree(numbersArr) {
	return filter(numbersArr, function(num) {
		return element % 3 === 0;
	})
}

function positives(nums) {
	return filter(nums, function(num) {
		return num > 0;
	})
}

function evenLength(strings) {
	return filter(strings, function(string) {
		return string.length % 2 === 0
	})
}

function odds(nums) {
	return filter(nums, function(num) {
		return num % 2 !== 0;
	})
}

function negatives(nums) {
	return filter(nums, function(num) {
		return num < 0
	})
}

function largerThanSix(nums) {
	return filter(nums, function(num) {
		return num > 6
	})
}

function startsWithChar(strings, char) {
	return filter(strings, function(string) {
		return string[0] === char;
	})
}

function evenIndexedEvenLengths(strings) {
	return filter(strings, function(string, i) {
		return (string.length % 2 === 0 && i % 2 === 0)
	})
}






