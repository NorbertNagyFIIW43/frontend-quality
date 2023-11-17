import { CardActions, CardContent, CardHeader, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import { TemplateCardProps } from '../@types/allTypes';

function TemplateCard(props: TemplateCardProps) {
	return (
		<Card className="card">
			<CardHeader class="card-header" title={props.title}></CardHeader>
			<CardContent className="card-content">{props.description}</CardContent>
			<CardActions>
				<Divider />
				<button className="card-button">Submit</button>
			</CardActions>
		</Card>
	);
}
export default TemplateCard;
