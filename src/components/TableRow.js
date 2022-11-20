import React from "react";
import "../styles/TableRow.css";
import BarChartDialog from "./BarChartDialog";

function TableRow(props) {
	const [statistics, setStatistics] = React.useState([]);
	// const [label, setlabel] = React.useState(props.filter);
	// const datainterval = statistics.slice(0, 14);

	React.useEffect(() => {
		getStatisticsData();
	}, []);

	const getStatisticsData = () => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "ae9e57d040msh01d6f2dab70ab6dp1afefcjsnddbe7e9267cc",
				"X-RapidAPI-Host": "covid-193.p.rapidapi.com",
			},
		};

		fetch("https://covid-193.p.rapidapi.com/statistics", options)
			.then((res) => res.json())
			.then((res) => setStatistics(res.response))
			.catch((err) => console.error(err));
	};

	const filterCountryData = statistics.filter((country) => {
		return country.country === props.filter;
	});
	const SearchCountryData = statistics.filter((country) => {
		return (
			country.country.toLowerCase().indexOf(props.search.toLowerCase()) !== -1
		);
	});
	let countrydata = SearchCountryData.slice(0, 13).map((covid, index) => (
		<tr key={index}>
			<td>{covid.continent}</td>
			<td>{covid.country}</td>
			<td>{covid.population}</td>
			<td>{covid.cases.recovered}</td>
			<td>{covid.deaths.total}</td>
			<td>{covid.tests.total}</td>
			<td>{covid.day}</td>
			<td>{covid.time.slice(10, 19)}</td>
			<td>
				<BarChartDialog className="grapg-btn" />
			</td>
		</tr>
	));

	if (filterCountryData.length > 0) {
		countrydata = filterCountryData.map((covid, index) => (
			<tr key={index}>
				<td>{covid.continent}</td>
				<td>{covid.country}</td>
				<td>{covid.population}</td>
				<td>{covid.cases.recovered}</td>
				<td>{covid.deaths.total}</td>
				<td>{covid.tests.total}</td>
				<td>{covid.day}</td>
				<td>{covid.time.slice(10, 19)}</td>
				<td>
					<BarChartDialog className="grapg-btn" />
				</td>
			</tr>
		));
	}

	return (
		<div className="table-container">
			<table>
				{/* <caption>Statistics Data</caption> */}
				<tr>
					<th>Continent</th>
					<th>Country</th>
					<th>Population</th>
					<th>Cases</th>
					<th>Deaths</th>
					<th>Tests</th>
					<th>Day</th>
					<th>Time</th>
					<th>View Graph</th>
				</tr>

				{countrydata}
			</table>
		</div>
	);
}

export default TableRow;
