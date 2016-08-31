import React from 'react';

export default ({children, ...props}) => (
	<div {...props} className='singleNote'>
		{children}
	</div>
);