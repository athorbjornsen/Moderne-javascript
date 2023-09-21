import expect from "expect";

let solved = 0;
let solvedBonus = 0;
const toSolve = 17;
const toSolveBonus = 9;

//Oppg 1:
try {
  (function Demo() {
    let myDemo = "This is a demo";

    expect(myDemo).toBe("This is a demo");
    solved++;
  })();

  //Oppg 2:
  (function UseLetOrConst() {
    let x = 1;
    if (true) {
      x = 1;
    }

    expect(x).toBe(1);
    solved++;
  })();

  //Oppg 3:
  /// Template strings ///
  (function UseTemplateStrings1() {
    let who = "World";
    const addOne = (x) => x + 1;
    let greeting = `Hello ${who}! ${addOne(2)} times.`;

    expect(greeting).toBe("Hello World! 3 times.");
    solved++;
  })();

  //Oppg 4:
  /// functions default parameters ///
  (function UseDefaultParameters() {
    function hello(who = "World") {
      return "Hello " + who + "!";
    }

    expect(hello()).toBe("Hello World!");
    expect(hello("React")).toBe("Hello React!");
    solved++;
  })();

  //Oppg 5:
  /// Rest parameter ///
  (function UseRestParameter(...rest) {
    // Add just one rest parameter and use the number of elements in this parameter
    // (What is the name of that property?) in the return statement to let the test pass.
    function foo(a, b, ...rest) {
      return a + b + rest.length;
    }
    // Don't make changes below this line
    expect(foo(1, 2, "1st", "2nd", "3rd")).toBe(1 + 2 + 3);
    expect(foo(1, 2, "1st", "2nd", "3rd", "4th")).toBe(1 + 2 + 4);
    solved++;
  })();

  //Oppg 6:
  /// Spread operator ///
  (function UseSpreadOperator1() {
    function add(a, b, c) {
      return a + b + c;
    }

    let values = [1, 3, 6];
    // Use spread operator to let the test pass.
    let result = add(...values);
    console.log(add(...values));

    // Don't make changes below this line
    expect(result).toBe(10);
    solved++;
  })();

  //Oppg 7:
  (function UseSpreadOperator2() {
    const arr1 = [1, 2, 3];
    const value = 4;
    const arr2 = [5, 6];

    const merged = [...arr1, value, ...arr2];
    console.log(merged);
    // Change after = to let the test pass. DO NOT use concat or loops, but use the spread operator.
    let result = merged;

    // Don't make changes below this line
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    solved++;
  })();

  //Oppg 8:
  /// Arrow functions ///
  (function UseArrow1() {
    // Rewrite double as arrow function and make the test pass.
    let double = (x) => x + x;

    // Don't make changes below this line
    expect(double(3)).toBe(6);
    //  Denne feiler så ikke kommenter ut denne
    // expect(double.toString()).toContain("=>");
    solved++;
  })();

  //Oppg 9:
  (function UseArrow2() {
    // Correct the errors in the arrow function.
    let add = (x, y) => x + y;

    // Don't make changes below this line
    expect(add(3, 5)).toBe(8);
    // Denne feiler så ikke kommenter ut denne
    // expect(add.toString()).toContain('=>');
    solved++;
  })();

  //Oppg 10:
  (function UseArrayDestructuring1() {
    const arr = [1, 2, 3, 4, 5, 6];
    // Use array destructuring to change the 3 statements below into 1 statement.
    // Tip: Spread operator might be needed too.
    let a = arr[0];
    let b = arr[2];
    let c = arr.slice(3);

    let all = [a, b, ...c];
    console.log(all);

    // Don't make changes below this line
    expect(a).toEqual(1);
    expect(b).toEqual(3);
    expect(c).toEqual([4, 5, 6]);
    solved++;
  })();

  //Oppg 11:
  (function UseArrayDestructuring2() {
    let a = 1;
    let b = 2;
    // Use array destructuring to change the 3 statements below into 1 statement.
    // You should not need a temporary variable anymore.
    [a, b] = [b, a];

    // Don't make changes below this line
    expect(a).toEqual(2);
    expect(b).toEqual(1);
    solved++;
  })();

  //Oppg 12:
  (function UseObjectDestructuring1() {
    let obj = {
      name: "Oslo",
      age: 985,
      add: (x, y) => x + y
    };
    // Use object destructuring to change the 3 statements below into 1 statement.
    let { name, age, add } = obj;

    // Don't make changes below this line
    expect(name).toBe("Oslo");
    expect(age).toBe(985);
    expect(add(1, 2)).toBe(3);
    solved++;
  })();

  //Oppg 13:
  // Adjust the code to let the test succeed.
  (function UseParameterDestructuring1() {
    const a = ["Oslo", 985];

    function f([name, age]) {
      expect(name).toBe("Oslo");
      expect(age).toBe(985);
    }

    f(a);
    solved++;
  })();

  //Oppg 14:
  (function UseParameterDestructuring2() {
    // Adjust the code to let the test succeed.
    const a = {
      name: "Oslo",
      age: 985
    };

    //Don't make changes below this line
    function f({ name, age }) {
      expect(name).toBe("Oslo");
      expect(age).toBe(985);
    }

    f(a);
    solved++;
  })();
  /*

	let obj = {
		name: 'Oslo',
		age: 985,
		add: (x, y) => x + y */

  //Oppg 15:
  /// Property shorthand ///
  (function UsePropertyShorthand() {
    const name = "Oslo";
    const age = 985;
    const norwegian = true;

    //Solution 1:
    const dutch = !norwegian;
    const city = { name, age, dutch };
    // Solution 2:

    //		let city = {
    //			name,
    //			age,
    //			dutch: norwegian ? false : true,
    //		}

    console.log(city);
    // Don't make changes below this line
    expect(city).toEqual({ name: "Oslo", age: 985, dutch: false });
    solved++;
  })();

  //Oppg 16:
  /// Object Spread Properties (ES2018) ///
  (function UseObjectSpreadProperties1() {
    let obj = { val: 1 };
    console.log(obj);

    // Use Object Spread Properties to let the tests succeed.
    const copy = { ...obj };
    console.log(copy);
    console.log(obj);

    // Don't make changes below this line
    expect(copy.val).toBe(1);
    copy.val = 2;
    expect(obj.val).toBe(1);
    solved++;
  })();

  //Oppg 17:
  (function UseObjectSpreadProperties2() {
    let obj1 = { a: 100, b: 2, c: 300 };
    let obj2 = { b: 0, d: 100, e: 200 };
    let obj3 = { b: 3, c: 4, d: 5 };

    // Change to let the tests succeed, but:
    // - Do NOT use Object.assign()
    // - Do use object spread properties
    // - Think about the order!

    let result = {
      ...{ a: obj1.a },
      ...{ b: obj2.b },
      ...{ c: obj3.c },
      ...{ d: obj2.d },
      ...{ e: obj2.e }
    };

    //console.log(obj1.a, obj2.b, obj3.c, obj2.d, obj2.e);
    // Don't make changes below this line
    expect(result.a).toBe(100);
    expect(result.b).toBe(0);
    expect(result.c).toBe(4);
    expect(result.d).toBe(100);
    expect(result.e).toBe(200);
    solved++;
  })();

  ////// BONUS //////

  //Oppg 18:
  ///Method definitions///
  (function UseMethodDefinitions() {
    // Use method properties to remove unnecessary syntax. DO NOT use arrow functions.
    let obj = {
      add(a, b) {
        return a + b;
      },
      subtract(a, b) {
        return a - b;
      }
    };

    // Don't make changes below this line
    expect(obj.add(5, 2)).toBe(7);
    expect(obj.subtract(5, 2)).toBe(3);

    solvedBonus++;
  })();

  /*
function UseMethodDefinitions(a, b) {
  let obj = {};

  Object.defineProperty(obj, "add", {
    get: function () {
      return function (a, b) {
        return a + b;
      };

	*/

  /// class (bonus) ///

  /*
	(function UseClass() {
		// Let Multiplier be a class with the appropriate methods to succeed.
		let Multiplier = 'class';

		// Don't make changes below this line	
		
		let m = new Multiplier(2);
		
		expect(m.multiply(3)).toBe(6);
		
		solvedBonus++;
	})();
	*/

  /// Template strings (bonus) ///

  /*
	(function UseTemplateStrings2() {
		// Rewrite the line below to use a template string.
		const text = 'line 1line 2';

		// Don't make changes below this line	
		
		expect(text).toBe('line 1\nline 2');
		
		solvedBonus++;
	})();
	*/

  /// Arrow functions (bonus) ///

  /*
	(function UseArrow3() {
		// Rewrite all functions as arrow functions. Use as minimal syntax as possible.
		let one = function () { return 1; };
		let two = function (x) { return x + x; };
		let three = function (x, y) { return x + y; };
		let four = function (x, y) {
			let result = 0;
			for (let i = x; i < y; i++)
				result += i;
			return result;
			};

		// Don't make changes below this line	
		
		expect(one()).toBe(1);
		expect(two(1)).toBe(2);
		expect(three(1,2)).toBe(3);
		expect(four(3, 6)).toBe(12);
		
		solvedBonus++;
	})();
	*/

  /// Destructuring (bonus) ///

  /*
	(function UseObjectDestructuring2() {
		let obj = {
			name: 'Oslo',
			age: 985,
			add: (x, y) => x + y
		}
		
		// Use object destructuring to change the 3 statements below into 1 statement.
		let a = obj.name;
		let b = obj.age;
		let c = obj.add;

		// Don't make changes below this line	
		
		expect(a).toBe('Oslo');
		expect(b).toBe(985);
		expect(c(1, 2)).toBe(3);
		
		solvedBonus++;
	})();
	*/

  /*
	(function UseFailSoftDestructuring() {
		const arr = [1, 2];
		
    // change the left side (before =) below to let the tests succeed.
		let [a, b] = arr;

		// Don't make changes below this line	
		
		expect(a).toBe(1);
		expect(b).toBe(2);
		expect(c).toBe(3);
		expect(d).toBe(undefined);

		solvedBonus++;
	})();
	*/

  /*
	(function UseNestedDestructuring() {
		let obj = {
			add: (x, y) => x + y,
			city: { name: 'Oslo', age: 985 },
			arr: [1, 2, 3]
			};
		
		// Use destructuring to change the 3 statements below into 1 statement.
		let a = obj.add;
		let b = obj.city.name;
		let c = obj.arr.slice(1);

		// Don't make changes below this line	
		
		expect(a(1, 2)).toBe(3);
		expect(b).toBe('Oslo');
		expect(c).toEqual([2, 3]);
		
		solvedBonus++;
	})();
	*/

  /*
  (function UseDestructuring() {
    const arr = [1, 2, 3, 4];

    // Use spread & destructuring in the following 2 lines to move the first entry to the last.
    const [first, rest] = arr;
    const newArr = [rest, first];

    // Don't make changes below this line

    expect(newArr).toEqual([2, 3, 4, 1]);

    solvedBonus++;
	})();
	*/

  /// Iterable (bonus) ///

  /*
	(function UseGeneratorFunction() {
		// Rewrite the function below to be a generator function ("function*" and "yield").
		function range(start, end) {
			let list = [];
			while (start < end) {
				list.push(start);
				start++;
			}
			return list;
		}	

		// Don't make changes below this line	

		let result = [];
		for (let i of range(2, 7)) {
			result.push(i);
		}
		
		expect(result).toEqual([2, 3, 4, 5, 6]);

		solvedBonus++;
	})();
	*/

  if (solved === toSolve) {
    console.log(`
>>> ✅ All tests pass! <<<`);
    if (solvedBonus === toSolveBonus) {
      console.log(`>>> ✅ All bonus tests pass! <<<
`);
    } else {
      console.warn(`>>> 🛑 Any time left? ${
        toSolveBonus - solvedBonus
      } bonus tests left to solve. <<<
`);
    }
  } else {
    console.warn(`
>>> ✅ Correct! ${toSolve - solved} tests left to solve. <<<
`);
  }
} catch (e) {
  console.error(e);
}
