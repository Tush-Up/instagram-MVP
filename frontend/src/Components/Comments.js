import React, { useState } from 'react';
import { Heart, HeartFill } from '../svg/icons';

export function Comments() {
	const [ Like, setLike ] = useState(false);
	const onClick = () => {
		setLike(!Like);
	};

	return (
		<div>
			{' '}
			<div className="reactions">{Like ? <HeartFill onClick={onClick} /> : <Heart onClick={onClick} />}</div>
			{/* <p>1 Like</p>
			<p>TushUp Wallpaper</p> */}
		</div>
	);
}
