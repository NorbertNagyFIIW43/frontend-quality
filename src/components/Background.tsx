import RandomShape from './RandomShape';
import '../assets/styles/App.css';

const Background = () => {
	const numRows = 7;
	const numCols = 10;
	const shapes = ['triangle', 'parallelogram', 'square'];

	const getType = (rowIndex: number, colIndex: number) => shapes[(rowIndex * colIndex) % shapes.length];
	const getRotation = (rowIndex: number, colIndex: number) => {
		return rowIndex * colIndex;
	};
	return (
		<div className="shapes">
			{[...Array(numRows)].map((_, rowIndex) =>
				[...Array(numCols)].map((_, colIndex) => (
					<RandomShape
						key={`${rowIndex}-${colIndex}`}
						type={getType(rowIndex + 1, colIndex + 1)}
						left={`${colIndex * 340}px`}
						top={`${rowIndex * 390}px`}
						rotation={getRotation((rowIndex + 1) * 5, (colIndex + 1) * 3)}
					/>
				)),
			)}
		</div>
	);
};

export default Background;
