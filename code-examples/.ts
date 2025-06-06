interface SearchFunc {
	(source: string, subString: string): boolean;
}

var mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
	var result = source.search(subString);
	if (result == -1) {
		return false;
	} else {
		return true;
	}
};

class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello, " + this.greeting;
	}
}

var greeter = new Greeter("world");
