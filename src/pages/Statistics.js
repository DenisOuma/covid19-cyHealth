// import { TableRow } from '@mui/material'
import React from "react";
import FilterSearch from "../components/FilterSearch";
import StatisticSection from "../components/StatisticSection";

function Statistics() {
	const [filter, setFilter] = React.useState(null);
	const [search, setSearch] = React.useState(null);

	const searchFilter = (country) => {
		if (!country) {
			console.log(country);
		} else {
			setFilter(country.label);
		}
	};

	const searchCountry = (data) => {
		setSearch(data.toLowerCase());
	};
	return (
		<div className="home-page">
			<FilterSearch searchFilter={searchFilter} searchCountry={searchCountry} />
			<StatisticSection filter={filter} search={search} />
		</div>
	);
}

export default Statistics;
