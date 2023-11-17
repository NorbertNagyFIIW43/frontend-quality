import styled from 'styled-components';

const Shape = styled.div`
	position: absolute;
	transform-origin: 0 0;
	z-index: -10;
	opacity: 0.7;
`;

const Triangle = styled(Shape)`
	width: 0;
	height: 0;
	border-top: 200px solid #ffcc84;
	border-left: 200px solid transparent;
`;

const Parallelogram = styled(Shape)`
	width: 250px;
	height: 200px;
	transform: skew(20deg);
	background: #ffcc84;
`;

const Square = styled(Shape)`
	width: 200px;
	height: 200px;
	background: #ffcc84;
`;

const shapes: any = { triangle: Triangle, parallelogram: Parallelogram, square: Square };

const RandomShape = ({ type, left, top, rotation }: { type: string; left: string; top: string; rotation: number }) => {
	const ShapeComponent = shapes[type];

	return <ShapeComponent style={{ left, top, transform: `rotate(${rotation}deg)` }} />;
};

export default RandomShape;
