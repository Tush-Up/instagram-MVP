import React, { useState } from 'react';
import { Heart, HeartFill } from '../svg/icons';

export function Comments() {
	const [ Like, setLike ] = useState(false);
	const onClick = () => {
		setLike(!Like);
	};

	return <div className="reactions">{Like ? <HeartFill onClick={onClick} /> : <Heart onClick={onClick} />}</div>;
}
