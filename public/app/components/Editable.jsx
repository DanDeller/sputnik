import React from 'react';
// const classnames = require('classnames');

const Editable = ({editing, value, onEdit, className}) => { 
	if(editing) {
		return <Editable.Edit value={value} onEdit={onEdit} />;
	}
	return <Editable.Value value={value} />; 
};

Editable.Value = ({value, ...props}) => (
	<span {...props}>{value}</span>
)

// class Edit extends React.Component {
// 	render() {
// 		const {className, value, ...props} = this.props;
// 		return <input
// 			className = {classnames('edit', className)}
// 			type="text"
// 			autoFocus = {true}
// 			defaultValue = {value}
// 			onBlur = {this.finishEdit}
// 			onKeyPress = {this.checkEnter}
// 			{...props} 
// 		/>;
// 	}
// 	checkEnter = (e) => {
// 		if(e.key === 'Enter') {
// 			this.finishEdit(e);
// 		}
// 	}
// 	finishEdit = (e) => {
// 		const value = e.target.value;
// 		if(this.props.onEdit) {
// 			this.props.onEdit(value);
// 		} 
// 	}
// }

// Editable.Edit = Edit;

export default Editable;