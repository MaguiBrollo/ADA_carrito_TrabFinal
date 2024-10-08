/* eslint-disable no-mixed-spaces-and-tabs */
import * as React from "react";

//Fuentes
import LoraItalicVariableFontwght from "./fonts/LoraItalicVariableFontwght.ttf";

import { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Header } from "./componentes/Header";
import { NavBar } from "./componentes/NavBar";
import { ModoClaro } from "./utils/ColoresModo";
import { ModoOscuro } from "./utils/ColoresModo";
import { Footer } from "./componentes/Footer";
import { ArticuloBuscar } from "./componentes/ArticuloBuscar";
import { FiltrarPorCategoria } from "./componentes/FiltrarPorCategoria";
import { ArticulosListar } from "./componentes/ArticulosListar";
import { Inicio } from "./componentes/Inicio";
import { Error404 } from "./componentes/Error404";
import { CarritoModal } from "./componentes/CarritoModal";
import { MisCompras } from "./componentes/MisCompras";
import { IniciarSesion } from "./componentes/IniciarSesion";
import { CerrarSesion } from "./componentes/CerrarSesion";

import { ColorModeContext } from "./contexts/ModoClaOscContext";
import { LogicaContext } from "./contexts/LogicaContext";
import { CrearCuenta } from "./componentes/CrearCuenta";
import { Checkout } from "./componentes/Checkout";
import { MuchasGracias } from "./componentes/MuchasGracias";

//====================================================================
//------------------- PRINCIPAL ------------------
function App() {
	const [abrirBuscar, setAbrirBuscar] = React.useState(false);
	const [abrirFiltrar, setAbrirFiltrar] = React.useState(false);
	const [abrirCarrito, setAbrirCarrito] = React.useState(false);

	const { mode } = useContext(ColorModeContext);
	const { usuarioId } = useContext(LogicaContext);

	//--------- Paleta de colores para Modo Claro Oscuro / Fuente
	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === "light" ? ModoOscuro : ModoClaro),
				},
				typography: {
					fontFamily: "Lora, Arial",
				},
				components: {
					MuiCssBaseline: {
						styleOverrides: `
							@font-face {
								font-family: 'Lora';
								font-style: normal;
								font-display: swap;
								font-weight: 400;
								src: local('Lora'), local('Lora-Regular'), url(${LoraItalicVariableFontwght}) format('ttf');
								unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
							}
							`,
					},
				},
			}),
		[mode]
	);

	//===========================
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Box
					sx={{
						width: "100%",
						minHeight: "100vh",
						display: "flex",
						flexDirection: "column",
						bgcolor: "background.default",
					}}
				>
					{/* --------- Mensaje envio gratis ------- */}
					<Header />

					{/* --------- Barra de Navegación -------- */}
					<NavBar
						setAbrirBuscar={setAbrirBuscar}
						setAbrirFiltrar={setAbrirFiltrar}
						setAbrirCarrito={setAbrirCarrito}
					/>

					<Routes>
						<Route index path="/" element={<Inicio />} />
						<Route path="/articulos" element={<ArticulosListar />} />
						<Route
							path="/miscompras"
							element={usuarioId !== 0 ? <MisCompras /> : <Navigate to="/" />}
						/>
						<Route
							path="/checkout"
							element={usuarioId !== 0 ? <Checkout /> : <Navigate to="/" />}
						/>

						<Route
							path="/iniciarsesion"
							element={
								usuarioId === 0 ? <IniciarSesion /> : <Navigate to="/" />
							}
						/>
						<Route
							path="/crearcuenta"
							element={usuarioId === 0 ? <CrearCuenta /> : <Navigate to="/" />}
						/>
						<Route
							path="/muchasgracias"
							element={
								usuarioId !== 0 ? <MuchasGracias /> : <Navigate to="/" />
							}
						/>
						<Route
							path="/cerrarsesion"
							element={usuarioId !== 0 ? <CerrarSesion /> : <Navigate to="/" />}
						/>
						<Route path="*" element={<Error404 />} />
					</Routes>

					{/* --------- Barra de Footer  ----------- */}
					<Footer />

					{/* ----- Modal Drawer Filtrar por categoría ----- */}
					{abrirFiltrar && (
						<FiltrarPorCategoria
							abrirFiltrar={abrirFiltrar}
							setAbrirFiltrar={setAbrirFiltrar}
						/>
					)}
					{/* --------- Modal Drawer Buscar -------- */}
					{abrirBuscar && (
						<ArticuloBuscar
							abrirBuscar={abrirBuscar}
							setAbrirBuscar={setAbrirBuscar}
						/>
					)}

					{/* --------- Modal Drawer Carrito -------- */}
					{abrirCarrito && (
						<CarritoModal
							abrirCarrito={abrirCarrito}
							setAbrirCarrito={setAbrirCarrito}
						/>
					)}
				</Box>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
