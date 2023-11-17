import { VerticalBarChart, PieChart, LineChart, HorizontalBarChart, AreaChart, DonutChart } from 'amazing-react-charts';
import '../assets/styles/Charts.css';

function Charts() {
	return (
		<>
			<div className="leftChart-container">
				<VerticalBarChart
					color="green"
					xType="time"
					barWidth={100}
					yComplement="%"
					tooltip={{
						label: 'Axis x tooltip label',
						result: 'Axis y tooltip label',
					}}
					data={[
						{ label: 'value 1', result: 50 },
						{ label: 'value 2', result: 21 },
						{ label: 'value 3', result: 84 },
						{ label: 'value 4', result: 79 },
					]}
				/>
				<PieChart
					noAnimation
					colors={['red', 'yellow', 'green', 'blue']}
					legendPosition="inside"
					radius="75%"
					toolboxTooltip={{ saveAsImage: 'saving' }}
					title="pie chart"
					resultFormatType="percent"
					labelFontColor="black"
					tooltipTitle="title"
					center={['50%', '50%']}
					data={[
						{ name: 'test1', value: 25 },
						{ name: 'test2', value: 10 },
						{ name: 'test3', value: 45 },
						{ name: 'test4', value: 10 },
					]}
				/>
				<LineChart
					showLabel
					title="Concurrent lines"
					xType="time"
					toolboxTooltip={{ saveAsImage: 'saving' }}
					dateFormat="yyyy-MM"
					colors={['red', 'green', 'blue']}
					data={[
						{
							name: 'top line',
							values: [
								{ label: '2019-01', result: 10 },
								{ label: '2019-02', result: 40 },
								{ label: '2019-03', result: 30 },
								{ label: '2019-04', result: 20 },
								{ label: '2019-05', result: 40 },
								{ label: '2019-06', result: 50 },
								{ label: '2019-07', result: 15 },
								{ label: '2019-08', result: 70 },
								{ label: '2019-09', result: 80 },
								{ label: '2019-10', result: 90 },
								{ label: '2019-11', result: 70 },
								{ label: '2019-12', result: 80 },
								{ label: '2019-01', result: 90 },
							],
						},
						{
							name: 'bottom line',
							values: [
								{ label: '2019-01', result: 1 },
								{ label: '2019-02', result: 4 },
								{ label: '2019-03', result: 3 },
								{ label: '2019-04', result: 2 },
								{ label: '2019-05', result: 4 },
								{ label: '2019-06', result: 5 },
								{ label: '2019-07', result: 1 },
								{ label: '2019-08', result: 7 },
								{ label: '2019-09', result: 8 },
								{ label: '2019-10', result: 9 },
								{ label: '2019-11', result: 70 },
								{ label: '2019-12', result: 80 },
								{ label: '2019-01', result: 90 },
							],
						},
					]}
				/>
			</div>
			<div className="rightChart-container">
				<HorizontalBarChart
					boldTickLabel
					showTickInfos
					marginLeftTitle="50%"
					title="RYG graph"
					xType="time"
					tooltip={{
						label: 'Criticity',
						result: 'Amount (percentage)',
					}}
					data={[
						{
							label: 'A',
							result: 75.3,
							style: { color: 'red' },
							itemId: 'c',
						},
						{
							label: 'B',
							result: 86,
							style: { color: 'yellow' },
							itemId: 'b',
						},
						{
							label: 'C',
							result: 94,
							style: { color: 'green' },
							itemId: 'c',
						},
					]}
				/>
				<AreaChart
					color="#74007c"
					xType="time"
					yType="time"
					tooltip={{ label: 'Data', result: 'MTBF' }}
					data={[
						{ label: '2019-01-01', result: 1.8 },
						{ label: '2019-02-01', result: 4.5 },
						{ label: '2019-03-01', result: 3 },
						{ label: '2019-04-01', result: 2 },
						{ label: '2019-05-01', result: 4 },
						{ label: '2019-06-01', result: 5 },
						{ label: '2019-07-01', result: 3 },
						{ label: '2019-08-01', result: 4 },
						{ label: '2019-09-01', result: 2 },
						{ label: '2019-10-01', result: 6 },
					]}
				/>
				<DonutChart
					colors={['red', 'orange', 'yellow', 'green']}
					legendPosition="outside"
					resultFormatType="percent"
					toolboxTooltip={{ saveAsImage: 'saving' }}
					title="Total de S.S. por criticidade"
					center={['50%', '50%']}
					donutRadius={['58%', '70%']}
					tooltip={{
						label: 'Criticidade',
						result: 'Total de SSs',
					}}
					data={[
						{ name: 'Emergencial', value: 120 },
						{ name: 'Alta', value: 234 },
						{ name: 'Média', value: 500 },
						{ name: 'Baixa', value: 440 },
					]}
				/>
			</div>
		</>
	);
}
export default Charts;
