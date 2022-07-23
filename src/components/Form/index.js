import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'phosphor-react';
import './Form.css';

export default function Form({ handleSubmit, handleChange, newTask }) {
	return (
		<div>
			<form onSubmit={handleSubmit} action="#" className="form">
				<input
					onChange={handleChange}
					value={newTask}
					type="text"
					className="form-input"
					placeholder="O que temos para hoje?"
				/>
				<button type="submit" className="btn-plus">
					<Plus weight={'bold'} />
				</button>
			</form>
		</div>
	);
}

Form.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	newTask: PropTypes.string.isRequired,
};
