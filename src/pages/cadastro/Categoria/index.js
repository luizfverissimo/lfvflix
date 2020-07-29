import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const inputHandler = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria:"
          value={values.nome}
          type="text"
          name="nome"
          onChange={(e) =>
            inputHandler(e.target.getAttribute("name"), e.target.value)
          }
        />

        <FormField
          label="Descrição"
          value={values.descricao}
          type="text"
          name="descricao"
          textArea={true}
          onChange={(e) =>
            inputHandler(e.target.getAttribute("name"), e.target.value)
          }
        />

        <FormField
          label="Cor"
          value={values.cor}
          type="color"
          name="cor"
          onChange={(e) =>
            inputHandler(e.target.getAttribute("name"), e.target.value)
          }
        />

        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={(e) =>
                inputHandler(e.target.getAttribute("name"), e.target.value)
              }
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              type="color"
              name="cor"
              value={values.cor}
              onChange={(e) =>
                inputHandler(e.target.getAttribute("name"), e.target.value)
              }
            />
          </label>
        </div> */}

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={`${categoria}${index}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
