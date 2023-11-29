import { Container, Paper } from '@mui/material';
import { LineChart, PieChart } from '@mui/x-charts';
import { BarChart } from '@mui/x-charts/BarChart';
function Summary() {
	return (
		<Container className="chartContainer">
			<Paper className="chartContainer-barChart">
				<BarChart
					xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
					series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
					width={500}
					height={300}
				/>
			</Paper>
			<Paper className="chartContainer-lineChart">
				<LineChart
					xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
					series={[
						{
							data: [2, 5.5, 2, 8.5, 1.5, 5],
						},
					]}
					width={1000}
					height={300}
				/>
			</Paper>
			<Paper className="chartContainer-pieChart">
				<PieChart
					series={[
						{
							data: [
								{ id: 0, value: 10, label: 'series A' },
								{ id: 1, value: 15, label: 'series B' },
								{ id: 2, value: 20, label: 'series C' },
							],
						},
					]}
					width={400}
					height={200}
				/>
			</Paper>
			<Paper className="chartContainer-horizontalChart">
				<BarChart
					series={[
						{ data: [3, 4, 1, 6, 5], stack: 'A' },
						{ data: [4, 3, 1, 5, 8], stack: 'A' },
						{ data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
						{ data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
						{ data: [10, 6, 5, 8, 9], label: 'Series C1' },
					]}
					layout="horizontal"
					width={400}
					height={650}
				/>
			</Paper>
		</Container>
	);
}
export default Summary;
