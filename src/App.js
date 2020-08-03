import React from 'react'

import LogoCoffee from './components/LogoCoffee'
import HeaderCoffee from './components/HeaderCoffee'
import ButtonCoffee from './components/ButtonCoffee'
import FooterCoffee from './components/FooterCoffee'


function App() {
	return (
		<>
			<HeaderCoffee>
				<LogoCoffee />
				<ButtonCoffee>Novo Vídeo</ButtonCoffee>
			</HeaderCoffee>

			<FooterCoffee>
				<LogoCoffee />
				<p>Site feito na #ImersaoReact</p>
			</FooterCoffee>
		</>
	)
}

export default App
