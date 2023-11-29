import Background from '../components/Background';
import TemplateSelector from '../components/TemplateSelector';
import '../assets/styles/Dashboard.css';
import Filter from '../components/Filter';
import TemplateVisualization from '../components/TemplateVisualization';
function Dashboard() {
	return (
		<>
			<div className="content">
				<TemplateSelector />
				<TemplateVisualization />
			</div>
			<div className="background">
				<Background />
			</div>
			<Filter />
		</>
	);
}
export default Dashboard;
