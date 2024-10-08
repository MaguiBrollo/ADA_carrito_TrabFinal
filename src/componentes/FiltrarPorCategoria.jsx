import {
	Box,
	Tooltip,
	IconButton,
	Typography,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Button,
	CircularProgress,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

import { LogicaContext } from "../contexts/LogicaContext";

//====================================================================
//------------------ Componente Principal ----------------------------
export const FiltrarPorCategoria = ({ abrirFiltrar, setAbrirFiltrar }) => {
	const { categoria, setFiltrarPor } = useContext(LogicaContext);

	useEffect(() => {
		setFiltrarPor("");
	});

	const navegar = useNavigate();

	const mostraTodosLosArticulos = () => {
		setAbrirFiltrar(false);
		setFiltrarPor("TODOS");

		navegar("/articulos");
	};

	const mostraArticulosFiltrados = (e) => {
		setAbrirFiltrar(false);
		setFiltrarPor(e.target.value);

		navegar("/articulos");
	};

	//----------------------------------
	const list = () => (
		<Box sx={{ paddingTop: "10px", width: "300px" }} role="presentation">
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
					Artículos por Categorías
				</Typography>
				<Tooltip title="Cerrar categorías">
					<IconButton
						size="large"
						aria-label="Cerrar categorías"
						color="inherit"
						onClick={() => setAbrirFiltrar(false)}
					>
						<MdClose />
					</IconButton>
				</Tooltip>
			</Box>

			<Divider sx={{ marginTop: "10px" }} />

			{/*  -------------------------------- */}
			<Box
				sx={{
					margin: "0px auto",
					width: "90%",
					fontSize: "0.8rem",
				}}
			>
				<List>
					<ListItem disablePadding>
						<ListItemButton onClick={mostraTodosLosArticulos}>
							<ListItemText
								primary="TODOS"
								secondary="Todos los artículos"
								primaryTypographyProps={{ fontSize: "0.8rem" }}
							/>
						</ListItemButton>
					</ListItem>
				</List>
				<Divider />
				{categoria.length === 0 && (
					<Box
						sx={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography sx={{ margin: "20px auto", fontSize: "1.3rem" }}>
							Espere....
						</Typography>
						<CircularProgress sx={{ margin: "20px auto" }} color="secondary" />
					</Box>
				)}
				<List>
					{categoria.map((cat) => (
						<ListItem key={cat.idCateg} disablePadding>
							<Button
								color="secondary"
								disabled={cat.cantidad > 0 ? false : true}
								value={cat.idCateg}
								variant="text"
								onClick={(e) => mostraArticulosFiltrados(e)}
							>
								{cat.categoria} ({cat.cantidad})
							</Button>
						</ListItem>
					))}
				</List>
			</Box>
			<Divider />
		</Box>
	);

	//===========================
	return (
		<div>
			<Drawer open={abrirFiltrar} onClose={() => setAbrirFiltrar(false)}>
				{list()}
			</Drawer>
		</div>
	);
};
