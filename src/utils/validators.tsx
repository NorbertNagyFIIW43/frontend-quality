import { ErrorTypes } from '../@types/allTypes';

export function regexRestriction(e: React.KeyboardEvent) {
	let key = e.key;

	const blacklist = new RegExp(/[~#$%^&;,*()+=[\]{}'"\\|<>/]/);

	if (blacklist.test(key)) {
		e.preventDefault();
	}
}

export function validatePaste(setter: React.Dispatch<React.SetStateAction<ErrorTypes>>, event: React.ClipboardEvent) {
	const blacklist = new RegExp(/[~#$%^&*;,()+=[\]{}'"\\|<>/]/);
	const key = (event.clipboardData || window.Clipboard).getData('text');
	if (blacklist.test(key)) {
		event.preventDefault();
		setter(ErrorTypes.CHAR);
	}
}

export function validateEmail(
	setter: React.Dispatch<React.SetStateAction<ErrorTypes>>,
	email: string = '',
	length: number,
): boolean {
	const regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
	if (regex.test(email) && email.length <= length) {
		return true;
	}
	setter(ErrorTypes.EMAIL);
	return false;
}

export function validatePassword(
	setter: React.Dispatch<React.SetStateAction<ErrorTypes>>,
	password: string = '',
): boolean {
	const length = new RegExp(/^\S{8,30}$/m);
	const blacklist = new RegExp(/[~#$%^&*;,()+=[\]{}'"?\\|<>/]/);

	if (!length.test(password) || blacklist.test(password)) {
		setter(ErrorTypes.PASSWORD);
		return false;
	}
	return true;
}
