import React from 'react';

export default ({children, ...props}) => (
	<div className = 'note' {...props}>
		{children}
	</div>
);