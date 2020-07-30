import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
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
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

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
          onChange={(e) => inputHandler(e.target.getAttribute('name'), e.target.value)}
        />

        <FormField
          label="Descrição"
          value={values.descricao}
          type="text"
          name="descricao"
          textArea
          onChange={(e) => inputHandler(e.target.getAttribute('name'), e.target.value)}
        />

        <FormField
          label="Cor"
          value={values.cor}
          type="color"
          name="cor"
          onChange={(e) => inputHandler(e.target.getAttribute('name'), e.target.value)}
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

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => <li key={`${categoria}${index}`}>{categoria.nome}</li>)}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
