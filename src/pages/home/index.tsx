import { NavLink } from "react-router-dom";
import "./home-styles.css";
import { useEffect, useState } from "react";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import Scroll from "../../components/scroll";

interface Task {
  title: string;
  category: string;
  date: string;
  description: string;
  id: string;
}

// const tasks = [
//   {
//     id: "fgjhfjdfj",
//     title: "Estudar cantata",
//     category: "Igreja",
//     date: "2024-12-13",
//     description: "Estudar as partituras das músicas da cantata.",
//   },
//   {
//     id: "sdghsdgh",
//     title: "Mexer no site",
//     category: "Trabalho",
//     date: "2024-12-14",
//     description: "Mexer no site do cliente Alexandre de Moraes",
//   },
//   {
//     id: "www",
//     title: "Estudar React",
//     category: "Estudo",
//     date: "2024-12-16",
//     description: "Estudar a unidade 3 do curso de React da pós.",
//   },
// ];

export default function Home() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [id, setId] = useState("");

  const [tarefas, setTarefas] = useState<Task[]>([]);

  const dataISO = data;
  const dia = new Date(dataISO + "T00:00:00").toLocaleDateString("pt-BR");
  // const diaDaTarefa = dia.toLocaleDateString("pt-BR");

  useEffect(() => {
    const tasksSalvas = localStorage.getItem("@tarefas");

    if (tasksSalvas) {
      setTarefas(JSON.parse(tasksSalvas));
    }
  }, []);

  function submeterFormulario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id) {
      editTask();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tarefa editada com Sucesso",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // const listaTarefas = [...tarefas];
      // listaTarefas.push({
      //   id: String(Date.now()),
      //   title: titulo,
      //   category: categoria,
      //   date: diaDaTarefa,
      //   description: descricao,
      // });

      setTarefas([
        ...tarefas,
        {
          id: String(Date.now()),
          title: titulo,
          category: categoria,
          date: dia,
          description: descricao,
        },
      ]);

      // Salvando no local storage
      localStorage.setItem(
        "@tarefas",
        JSON.stringify([
          ...tarefas,
          {
            id: String(Date.now()),
            title: titulo,
            category: categoria,
            date: dia,
            description: descricao,
          },
        ])
      );

      setTitulo("");
      setCategoria("");
      setData("");
      setDescricao("");

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tarefa criada com Sucesso",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  function preencheEstados(tarefa: Task) {
    setTitulo(tarefa.title);
    setCategoria(tarefa.category);
    setData(tarefa.date);
    setDescricao(tarefa.description);
    setId(tarefa.id);

    Swal.fire({
      title: "Editando Tarefa!",
      text: "Você tem certeza que deseja editar esta tarefa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, quero editar!",
    }).then((result) => {
      if (!result.isConfirmed) {
        setTitulo("");
        setCategoria("");
        setData("");
        setDescricao("");
        setId("");
      } else {
        Swal.fire({
          title: "Edite sua tarefa no formulário",
          text: "Tarefa pronta para ser editada.",
          icon: "info",
        });
      }
    });
  }

  function editTask() {
    const posicaoNoArray = tarefas.findIndex((tarefa) => tarefa.id === id);

    const copiaTarefas = [...tarefas];

    copiaTarefas[posicaoNoArray] = {
      id: id,
      title: titulo,
      category: categoria,
      date: dia,
      description: descricao,
    };

    setTitulo("");
    setCategoria("");
    setData("");
    setDescricao("");
    setId("");

    setTarefas(copiaTarefas);

    localStorage.setItem("@tarefas", JSON.stringify(copiaTarefas));
  }

  function excluirTarefa(id: string) {
    const arrayFiltrada = tarefas.filter((tarefa) => tarefa.id !== id);

    Swal.fire({
      title: "Excluir tarefa?",
      text: "Tem certeza que deseja excluir esta tarefa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, excluir!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Tarefa Excluída!",
          text: "A tarefa foi excluída.",
          icon: "success",
        });
        setTarefas(arrayFiltrada);
        localStorage.setItem("@tarefas", JSON.stringify(arrayFiltrada));
      }
    });
  }

  return (
    <div className="container-form">
      <div className="form">
        <h2>Bem-vindo(a)</h2>
        <form onSubmit={submeterFormulario}>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            placeholder="Digite o título"
            required
            minLength={4}
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <label htmlFor="categoria">Categoria:</label>
          <select
            name="categoria"
            id="categoria"
            required
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudo">Estudo</option>
            <option value="Igreja">Igreja</option>
          </select>
          <label htmlFor="date">Data:</label>
          <input
            type="date"
            name="date"
            id="date"
            required
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            name="descricao"
            id="descricao"
            placeholder="Insira a descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>

          <button type="submit">Salvar</button>
        </form>
        <div className="como-usar">
          <NavLink to="/comousar">Como Usar?</NavLink>
        </div>
        <div className="scroll">
          <Scroll />
        </div>
      </div>

      <div className="container-tarefas">
        <h2>Lista de Tarefas</h2>
        <p>
          {tarefas.length === 0
            ? "Nenhuma tarefa cadastrada"
            : tarefas.length === 1
            ? "1 tarefa cadastrada"
            : tarefas.length + " tarefas cadastradas"}
        </p>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              <div className="tarefa-textos">
                <h4>{tarefa.title}</h4>
                <p>{tarefa.category}</p>
                <p>{tarefa.date}</p>
                <p>{tarefa.description}</p>
              </div>
              <div className="tarefa-botoes">
                <button
                  className="botao-editar"
                  title="Editar"
                  onClick={() => preencheEstados(tarefa)}
                >
                  <MdOutlineEdit />
                </button>
                <button
                  className="botao-deletar"
                  title="Excluir"
                  onClick={() => excluirTarefa(tarefa.id)}
                >
                  <MdOutlineDeleteOutline />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
