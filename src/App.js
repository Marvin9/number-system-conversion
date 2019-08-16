
	import React, { Component } from 'react';
	import Converter from './components/Converter'

	class App extends Component {
		render() {
			return(
				<div style={style}>
					<h1>Converter</h1>
					<Converter />
				</div>
			)
		}
	}

	const style = {
		textAlign : "center",
		fontFamily : "Arial"
	}
	export default App;
