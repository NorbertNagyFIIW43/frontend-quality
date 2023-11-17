import Background from '../components/Background';
import '../assets/styles/App.css';
import TemplateCard from '../components/TemplateCard';
import '../assets/styles/Templates.css';
function Templates() {
	const testDesc =
		'Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test  TestTest Test Test TestTest TestTest TestTest TestTest  TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test Test TestTest TestTest TestTest TestTest  TestTest TestTest TestTt TestTest ';
	return (
		<>
			<div className="content">
				<div className="content-cards">
					<TemplateCard title="Test Template" description={testDesc} />
				</div>
			</div>
			<div className="background">
				<Background />
			</div>
		</>
	);
}
export default Templates;
