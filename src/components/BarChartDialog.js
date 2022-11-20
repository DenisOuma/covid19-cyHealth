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
		const options = {
			method: "GET",
			url: "https://covid-193.p.rapidapi.com/history",
			params: { country: country, day: day },
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
	const data = [
		{ name: "A", x: 12, y: 23, z: 122 },
		{ name: "B", x: 22, y: 3, z: 73 },
		{ name: "C", x: 13, y: 15, z: 32 },
		{ name: "D", x: 44, y: 35, z: 23 },
		{ name: "E", x: 35, y: 45, z: 20 },
		{ name: "F", x: 62, y: 25, z: 29 },
		{ name: "G", x: 37, y: 17, z: 61 },
		{ name: "H", x: 28, y: 32, z: 45 },
		{ name: "I", x: 19, y: 43, z: 93 },
	];

	console.log(historyData);
	console.log(props.country);
	console.log(props.day);

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
				<h1>Country Bar Graph</h1>
				<div className="inner-container">
					<BarChart width={800} height={800} data={data}>
						<CartesianGrid />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="x" stackId="a" fill="#8884d8" />
						<Bar dataKey="y" stackId="a" fill="#82ca9d" />
						<Bar dataKey="y" stackId="a" fill="red" />
					</BarChart>
				</div>
			</Dialog>
		</div>
	);
}
