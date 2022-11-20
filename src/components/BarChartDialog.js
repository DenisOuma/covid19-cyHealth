import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import "../styles/TableRow.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function BarChartDialog(props) {
	const [open, setOpen] = React.useState(false);
	const [historyData, setHistoryData] = React.useState([]);
	const country = props.country.toLowerCase().toString();
	const day = props.day.toString();
	React.useEffect(() => {
		getCountryHistory(country, day);
	}, [country, day]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const getCountryHistory = (country, day) => {
		// console.log("My country ==>", country, day);
		const options = {
			method: "GET",
			url: "https://covid-193.p.rapidapi.com/history",
			params: { country: country, day: "2020-06-02" },
			headers: {
				"X-RapidAPI-Key": "ae9e57d040msh01d6f2dab70ab6dp1afefcjsnddbe7e9267cc",
				"X-RapidAPI-Host": "covid-193.p.rapidapi.com",
			},
		};
		axios
			.request(options)
			.then(function (response) {
				setHistoryData(response.data.response);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	const data = historyData.map((country) => {
		const analysis = {};
		analysis.time = country.time.slice(10, 16);
		analysis.tests = country.tests.total;
		analysis.cases = country.cases.total;
		analysis.deaths = country.deaths.total;
		return analysis;
	});

	return (
		<div>
			<Button
				variant="outlined"
				onClick={handleClickOpen}
				style={{
					backgroundColor: "#383A39",
					fontSize: "12px",
					padding: "0px",
					color: "#fff",
					margin: "0px",
					fontWeight: 600,
					display: "flex",
					alignItems: "center",
					width: "45%",
					justifyContent: "space-between",
					border: "1px solid #40A9EA",
				}}
			>
				<RemoveRedEyeOutlinedIcon
					fontSize="small"
					style={{ marginLeft: "4px" }}
				/>
				<p style={{ marginRight: "4px" }}>Graph</p>
			</Button>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar style={{ backgroundColor: "#383A39" }}>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						></IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							Covid19 Analytics Bar Chart
						</Typography>
						<Button autoFocus color="inherit" onClick={handleClose}>
							<CloseIcon />
						</Button>
					</Toolbar>
				</AppBar>
				<h1>{props.country} Bar Graph</h1>
				<div className="inner-container">
					<BarChart
						width={800}
						height={800}
						data={data}
						style={{ marginLeft: "30px" }}
					>
						<CartesianGrid />
						<XAxis dataKey="time" />
						<YAxis />
						<Tooltip />
						<Legend />
						{data.time}
						<Bar dataKey="tests" stackId="a" fill="#8884d8" />
						<Bar dataKey="cases" stackId="a" fill="#82ca9d" />
						<Bar dataKey="deaths" stackId="a" fill="red" />
					</BarChart>
				</div>
			</Dialog>
		</div>
	);
}
