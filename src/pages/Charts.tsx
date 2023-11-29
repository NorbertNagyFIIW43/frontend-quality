import '../assets/styles/Charts.css';
import Background from '../components/Background';
import ChartsToolbar from '../components/ChartsToolbar';
import Filter from '../components/Filter';
import Summary from '../components/Summary';

function Charts() {
	return (
		<>
			<div className="chartContent">
				<ChartsToolbar />
				<Summary />
			</div>
			<div className="background">
				<Background />
			</div>
			<Filter />
		</>
	);
}
export default Charts;
