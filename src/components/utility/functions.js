export const empty = (param) => {
	return param === "" || param === null ? true : false;
};

export const checkEmptyInput = (params) => {
	for (let i = 0; i < params.length; i++) {
		if (params[i] === null || empty(params[i])) {
			return true;
		}
	}
	return false;
};

export const strlen = (arg) => {
	let i = typeof arg === "number" ? arg.toString() : arg;
	return i.length;
};

export const ucFirst = (arg) => {
	return arg.charAt(0).toUpperCase() + arg.slice(1);
};

export const ucWord = (str) => {
	let strArr = str.split("");
	let arr = "";

	for (let i = 0; i < strArr.length; i++) {
		arr = arr.concat(ucFirst(strArr[i]));
	}

	return arr;
};

export const strToUpper = (arg) => {
	return arg.toUpperCase();
};

export const strToLower = (arg) => {
	return arg.toLowerCase();
};