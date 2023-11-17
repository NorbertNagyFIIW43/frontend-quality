import Background from '../components/Background';
import '../assets/styles/App.css';
import TemplateCard from '../components/TemplateCard';
import '../assets/styles/Templates.css';
import { Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
function Templates() {
	const testDesc = `Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test Test TestTest
	 					TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test  TestTest Test Test 
	 					TestTest TestTest TestTest TestTest  TestTest TestTest TestTest TestTest TestTest TestTest TestTest 
	 					TestTest TestTest `;
	return (
		<>
			<div className="content">
				<div className="content-cards">
					<TemplateCard title="Test Template" description={testDesc} />
				</div>
				<div className="content-pages">
					<Stack spacing={2}>
						<Pagination count={2} shape="rounded" />
					</Stack>
				</div>
			</div>
			<div className="background">
				<Background />
			</div>
		</>
	);
}
export default Templates;
