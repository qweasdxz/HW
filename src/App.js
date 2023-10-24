import logo from './logo.svg';
import './App.css';
import { ListaEstudiantes } from "./components/ListaEstudiantes";
import { ListaEstudiantesClases } from "./components/ListaEstudiantesClases";

export function App() {
  return (
    <>
    <h1>Lista de estudiantes 1</h1>
    <ListaEstudiantes/>
    <h2>Lista de estudiantes 2</h2>
    <ListaEstudiantesClases/>
  </>
  );
} 


