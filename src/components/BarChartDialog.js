import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function BarChartDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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
			</Dialog>
		</div>
	);
}
