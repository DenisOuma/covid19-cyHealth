import React from "react";
import "../styles/StatisticSection.css";
import TableRow from "./TableRow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import IconButton from "@mui/material/IconButton";

function StatisticSection({ filter, search }) {
	return (
		<div className="outer-container">
			<div
				className=""
				style={{
					marginTop: "20px",
					border: "1px solid #ccc",
					borderRadius: "5px",
					minHeight: "77vh",
				}}
			>
				<TableRow filter={filter} search={search} />
			</div>
			<div className="next-page">
				<div className="btn-pages">
					<IconButton aria-label="previous" color="primary">
						<SkipPreviousIcon />
					</IconButton>
				</div>
				<div className="btn-pages-font">Page 1 out of 100</div>
				<div className="btn-pages">
					<IconButton aria-label="next" color="primary">
						<SkipNextIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default StatisticSection;
