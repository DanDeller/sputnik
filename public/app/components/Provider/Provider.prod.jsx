import React from 'react';
import AltContainter from 'alt-containter';
import alt from '../../libs/alt';
import setup from './setup';

setup(alt);

export default ({children}) => 
	<AltContainter flux={alt}>
		{children}
	</AltContainter>