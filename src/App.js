import React from "react";
import "./App.css";
import Header from "./components/Header";
import Statistics from "./pages/Statistics";

function App() {
	// console.log(statistics)
	return (
		<div className="App">
			<Header />
			<Statistics />
		</div>
	);
}

export default App;
