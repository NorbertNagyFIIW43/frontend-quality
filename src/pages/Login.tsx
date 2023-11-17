import '../assets/styles/Login.css';
import logo from '../assets/images/220523_CatenaX-Logo-Claim_weiß.png';
import LoginPrompt from '../components/LoginPrompt';
function Login() {
	return (
		<>
			<div className="description">
				<div className="description-logo">
					<img src={logo} width={550} />
				</div>
				<div className="description-text">
					<h1>Welcome</h1>
					<p>
						Hello and welcome to Quality-Dashboard - your gateway to a comprehensive view of our commitment to excellence.
						We're thrilled to have you on board, and we're excited to guide you through the powerful features of our quality
						dashboard application. We understand the critical role that quality plays in every aspect of our operations, from
						product development to customer satisfaction. That's why we've developed this state-of-the-art application to
						provide you with insights into quality metrics based on field data. This should enable you to use an early warning
						process to detect field errors at an early stage, initiate countermeasures and ultimately increase customer
						satisfaction in the long term.
					</p>
				</div>
			</div>
			<LoginPrompt></LoginPrompt>
		</>
	);
}
export default Login;
