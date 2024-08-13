import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function ScrollTop(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
		if (anchor) {
			anchor.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	};

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{ position: "fixed", bottom: 16, right: 16 }}
			>
				{children}
			</Box>
		</Fade>
	);
}

ScrollTop.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func
};

export default function BackToTop(props) {
	const { t, i18n } = useTranslation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const direction = i18n.dir();
	const themeWithDirection = createTheme({
		direction: direction
	});

	return (
		<ThemeProvider theme={themeWithDirection}>
			<React.Fragment>
				<CssBaseline />
				<AppBar
					dir={direction}
					sx={{
						backgroundColor: "white",
						color: "#043957",
						boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
						zIndex: 1300,
						borderBottom: `1px solid ${theme.palette.divider}`
					}}
				>
					<Toolbar>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								width: "100%",
								justifyContent: "space-between"
							}}
						>
							<img
								src="./logo.png"
								alt="Logo"
								style={{
									height: "40px",
									marginRight: "16px"
								}}
							/>
							{isMobile ? (
								<>
									<IconButton
										edge="start"
										aria-label="menu"
										onClick={handleMenu}
										sx={{ color: "#043957" }}
									>
										<MenuIcon />
									</IconButton>
									<Menu
										dir={direction}
										id="menu-appbar"
										anchorEl={anchorEl}
										anchorOrigin={{
											vertical: "top",
											horizontal: direction === "rtl" ? "left" : "right"
										}}
										keepMounted
										transformOrigin={{
											vertical: "top",
											horizontal: direction === "rtl" ? "left" : "right"
										}}
										open={Boolean(anchorEl)}
										onClose={handleClose}
									>
										<MenuItem onClick={handleClose}>
											<a
												href="https://docs.smswithoutborders.com/"
												target="_blank"
												rel="noreferrer noopener"
												style={{
													color: "#043957",
													fontSize: "1.25rem", // Increased font size
													margin: "0 0.5rem",
													textDecoration: "none",
													transition: "color 0.3s ease",
													fontWeight: 500
												}}
												onMouseEnter={(e) => (e.currentTarget.style.color = "#e79405")}
												onMouseLeave={(e) => (e.currentTarget.style.color = "#043957")}
											>
												{t("Nav.help")}
											</a>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<a
												href="https://blog.smswithoutborders.com/"
												target="_blank"
												rel="noreferrer"
												style={{
													color: "#043957",
													fontSize: "1.25rem", // Increased font size
													margin: "0 0.5rem",
													textDecoration: "none",
													transition: "color 0.3s ease",
													fontWeight: 500
												}}
												onMouseEnter={(e) => (e.currentTarget.style.color = "#e79405")}
												onMouseLeave={(e) => (e.currentTarget.style.color = "#043957")}
											>
												{t("Nav.Blog")}
											</a>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<IconButton
												href="https://x.com/RelaySMS"
												target="_blank"
												rel="noopener noreferrer"
												sx={{
													color: "#043957",
													transition: "color 0.3s ease"
												}}
												onMouseEnter={(e) => (e.currentTarget.style.color = "#e79405")}
												onMouseLeave={(e) => (e.currentTarget.style.color = "#043957")}
											>
												<TwitterIcon />
											</IconButton>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<IconButton
												href="https://github.com/smswithoutborders"
												target="_blank"
												rel="noopener noreferrer"
												sx={{
													color: "#043957",
													transition: "color 0.3s ease"
												}}
												onMouseEnter={(e) => (e.currentTarget.style.color = "#e79405")}
												onMouseLeave={(e) => (e.currentTarget.style.color = "#043957")}
											>
												<GitHubIcon />
											</IconButton>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<LanguageSwitcher />
										</MenuItem>
									</Menu>
								</>
							) : (
								<Box
									component="nav"
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 2
									}}
								>
									<a
										href="https://docs.smswithoutborders.com/"
										target="_blank"
										rel="noreferrer noopener"
										style={{
											color: "#043957",
											fontSize: "1.25rem", // Increased font size
											margin: "0 0.5rem",
											textDecoration: "none",
											transition: "color 0.3s ease",
											fontWeight: 500
										}}
										onMouseEnter={(e) => (e.currentTarget.style.color = "#e79405")}
										onMouseLeave={(e) => (e.currentTarget.style.color = "#043957")}
									>
										<Typography>{t("Nav.help")}</Typography>
									</a>
									<a
										href="https://blog.smswithoutborders.com/"
										target="_blank"
										rel="noreferrer"
										style={{
											color: "#043957",
											fontSize: "1.25rem", // Increased font size
											margin: "0 0.5rem",
											textDecoration: "none",
											transition: "color 0.3s ease",
											fontWeight: 500
										}}
										onMouseEnter={(e) => (e.currentTarget.style.color = "#e79405")}
										onMouseLeave={(e) => (e.currentTarget.style.color = "#043957")}
									>
										<Typography>{t("Nav.Blog")}</Typography>
									</a>
									<IconButton
										href="https://x.com/RelaySMS"
										target="_blank"
										rel="noopener noreferrer"
										sx={{
											color: "#043957",
											transition: "color 0.3s ease"
										}}
										onMouseEnter={(e) => (e.currentTarget.style.color = "#e79405")}
										onMouseLeave={(e) => (e.currentTarget.style.color = "#043957")}
									>
										<TwitterIcon />
									</IconButton>
									<IconButton
										href="https://github.com/smswithoutborders"
										target="_blank"
										rel="noopener noreferrer"
										sx={{
											color: "#043957",
											transition: "color 0.3s ease"
										}}
										onMouseEnter={(e) => (e.currentTarget.style.color = "#e79405")}
										onMouseLeave={(e) => (e.currentTarget.style.color = "#043957")}
									>
										<GitHubIcon />
									</IconButton>
									<LanguageSwitcher />
								</Box>
							)}
						</Box>
					</Toolbar>
				</AppBar>
				<Toolbar id="back-to-top-anchor" />
				<ScrollTop {...props}>
					<Fab
						size="small"
						aria-label="scroll back to top"
						sx={{ backgroundColor: "#043957", color: "white" }}
					>
						<KeyboardArrowUpIcon />
					</Fab>
				</ScrollTop>
			</React.Fragment>
		</ThemeProvider>
	);
}
