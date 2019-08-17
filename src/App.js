
	import React, { Component } from 'react';
	import Converter from './components/Converter'

	class App extends Component {
		render() {
			return(
				<div style={style}>
					<Converter />
				</div>
			)
		}
	}

	const style = {
		textAlign : "center",
		fontFamily : "Arial",
	}
	export default App;
