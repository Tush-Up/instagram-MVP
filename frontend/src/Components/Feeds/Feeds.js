import { Posts } from '../../Components/Posts';
import { Comments } from '../../Components/Comments';
export default function Feeds() {
	return (
		<div>
			<Posts />
			{/* <hr style={{ color: 'rgba(35, 30, 31, 0.05)' }} /> */}
			<Comments />
		</div>
	);
}
