import { useNavigate } from 'react-router';
import { ErrorTypes } from '../@types/allTypes';
import { regexRestriction, validateEmail, validatePassword, validatePaste } from '../utils/validators';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/LoginReducer';
function LoginPrompt() {
	const navigate = useNavigate();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [errorState, setErrorState] = useState(ErrorTypes.NONE);

	const dispatch = useDispatch();

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		if (!(emailRef.current && passwordRef.current)) {
			return;
		}
		if (
			validateEmail(setErrorState, emailRef.current.value, 30) &&
			validatePassword(setErrorState, passwordRef.current.value)
		) {
			dispatch(login(emailRef.current.value));
			navigate('/home');
		}
		emailRef.current.value = '';
		passwordRef.current.value = '';
	};
	return (
		<div className="login">
			{errorState == ErrorTypes.CHAR && (
				<div className="errorMsg">
					<label>Forbidden character detected! Please use plain text only.</label>
				</div>
			)}
			{errorState == ErrorTypes.EMAIL && (
				<div className="errorMsg">
					<label>Email is invalid. Please try again.</label>
				</div>
			)}
			{errorState == ErrorTypes.PASSWORD && (
				<div className="errorMsg">
					<label>Password format is invalid. Please try again.</label>
				</div>
			)}
			<h3>Login</h3>
			<form className="login-form" onSubmit={handleLogin}>
				<div>
					<input
						type="text"
						id="username"
						placeholder="Email"
						ref={emailRef}
						onKeyDown={regexRestriction}
						onPaste={(e) => {
							validatePaste(setErrorState, e);
						}}
					/>
				</div>
				<div>
					<input
						type="password"
						id="password"
						placeholder="Password"
						ref={passwordRef}
						onKeyDown={regexRestriction}
						onPaste={(e) => {
							validatePaste(setErrorState, e);
						}}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default LoginPrompt;
