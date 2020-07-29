import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState(["Teste"]);
  const [nomeDaCategoria, setNomeDaCategoria] = useState("");

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCategorias([...categorias, nomeDaCategoria]);
        }}
      >
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={nomeDaCategoria}
              onChange={(e) => setNomeDaCategoria(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={nomeDaCategoria}
              onChange={(e) => setNomeDaCategoria(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              type="color"
              value={nomeDaCategoria}
              onChange={(e) => setNomeDaCategoria(e.target.value)}
            />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={`${categoria}${index}`}>{categoria}</li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
