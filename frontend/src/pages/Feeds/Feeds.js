import { Posts } from '../../Components/Posts';
import { Comments } from '../../Components/Comments';
export default function Feeds() {
	return (
		<div>
			<section className="card">
				<div className="user">
					<p>TushUp</p>
				</div>
				<Posts />
				<Comments />
			</section>
		</div>
	);
}
