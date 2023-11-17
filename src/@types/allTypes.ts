export enum ErrorTypes {
	NONE,
	EMAIL,
	CHAR,
	PASSWORD,
}

export enum HomeChart {
	CHART1,
	CHART2,
}

export type FuncProps = {
	handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

export type TemplateCardProps = {
	title: string;
	description: string;
};
