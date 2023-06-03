
export function isEmpty(val) {
  return val === undefined || val == null || val == "NaN" || val.length <= 0 || Object.keys(val).length === 0 ? true : false;
}

export const setInputValue = (event) => {
	event.preventDefault();
	let value = null

	if(event.target.type !== "tel") {
		value = event.target.value
	} else if(event.target.classList[0] == 'decimal') {
		value = event.target.value.replace(/[^\d.-]+/g, "");
	} else {
		value = event.target.value.replace(/\D/g, "");
	}

	return value
}

export const noSsrWindow = () => {
	if (typeof window !== "undefined") {
		return document.querySelector("body")
	} else {
		return null
	}
}

export function makeRadioInitails(options) {
	if (isEmpty(options)) {
	  return [];
	}
	let array = []
	for (let i = 0; i < options.length; i++) {
	  const element = options[i]
	  array.push(element.isChecked)
	}
	return array;
  }