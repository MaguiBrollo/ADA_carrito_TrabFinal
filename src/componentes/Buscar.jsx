import { Box, Tooltip, IconButton, InputBase, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { styled, alpha } from "@mui/material/styles";

import { MdOutlineSearch } from "react-icons/md";
import { MdClose } from "react-icons/md";

//------Funciones de ESTILOS de Buscar ---------------------
const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
	},
}));
//-------------------------------------------------------

//====================================================================
//------------------ Componente Principal ----------------------------
export const Buscar = ({ stateBuscar, setStateBuscar }) => {
	const abrirCerrarModalBuscar = () => {
		setStateBuscar(false);
	};

	const list = () => (
		<Box
			sx={{ paddingTop: "15px", width: "300px" }}
			role="presentation"
			/* onKeyDown={() => setStateBuscar(false)} */
		>
			<Box
				sx={{
					margin: "15px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Typography
					sx={{
						fontSize: "1.5rem",
						fontStyle: "italic",
						textShadow: "0px 0px 15px black",
						padding: "15px",
					}}
				>
					Buscar
				</Typography>
				<Tooltip title="Cerrar buscar">
					<IconButton
						size="large"
						aria-label="Cerrar buscar"
						color="inherit"
						onClick={abrirCerrarModalBuscar}
						
					>
						<MdClose />
					</IconButton>
				</Tooltip>
			</Box>
			<Divider sx={{ margin: "15px" }} />
			<Box
				sx={{
					margin: "0px auto",
					width: "90%",
				}}
			>
				<Search>
					<SearchIconWrapper>
						<MdOutlineSearch />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Buscar..."
						inputProps={{ "aria-label": "Buscar..." }}
					/>
				</Search>
			</Box>
			<Divider sx={{ margin: "15px" }} />
		</Box>
	);

	//===========================
	return (
		<div>
			<Drawer open={stateBuscar} onClose={() => setStateBuscar(false)}>
				{list()}
			</Drawer>
		</div>
	);
};
