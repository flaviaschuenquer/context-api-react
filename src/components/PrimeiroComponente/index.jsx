import React, { useContext } from "react";
import { DataContext } from "../../Context/data";
import { Link } from "react-router-dom";

function PrimeiroComponente() {
  const { state, handleSetState } = useContext(DataContext);
  return (
    <>
      <h1>PrimeiroComponente</h1>
      <input
        type="text"
        value={state.nome}
        onChange={(e) => handleSetState("nome", e.target.value)}
      />
      <Link to="/sobre">
        <h1>Página Sobre</h1>
      </Link>
    </>
  );
}
export default PrimeiroComponente;