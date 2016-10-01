export default function forEach(subject, handler) {
	if (subject instanceof Array) {
		subject.forEach(handler);
	} else {
		for (let prop in subject) {
			if (subject.hasOwnProperty(prop)) {
				handler(subject[prop], prop);
			}
		}
	}
}