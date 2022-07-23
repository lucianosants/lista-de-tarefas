import React from 'react';
import PropTypes from 'prop-types';
import { PencilSimple, X } from 'phosphor-react';

import './Tasks.css';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
	return (
		<div>
			<ul className="tasks">
				{tasks.map((task, index) => (
					<li key={task}>
						<div className="left-side">
							<input type="checkbox" className="input-checker" />
							{task}
						</div>
						<span className="icons">
							<PencilSimple
								onClick={(e) => handleEdit(e, index)}
								weight={'bold'}
								className="edit"
							/>
							<X
								onClick={(e) => handleDelete(e, index)}
								weight={'bold'}
								className="delete"
							/>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}

Tasks.propTypes = {
	tasks: PropTypes.array.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};
