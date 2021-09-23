import React from 'react';

const Card = () => {
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src="https://robohash.org/teste?200x200" alt="roboPicture" />
			<div>
				<h2>Teste</h2>
				<p>teste@teste.com</p>
			</div>
		</div>
	);
};

export default Card;
