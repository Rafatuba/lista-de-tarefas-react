import { NavLink } from "react-router-dom";
import "./uso-styles.css";

export default function ComoUsar() {
  return (
    <>
      <NavLink to="/home">
        <button className="botao-voltar">Voltar</button>
      </NavLink>
      <div className="container-uso">
        <h1>Manual do Usuário da Lista de Tarefas</h1>

        <h2>1. Objetivo da aplicação</h2>
        <p>
          Esta aplicação permite ao usuário cadastrar tarefas e visualizar uma
          lista das tarefas cadastradas. O formulário de cadastro inclui campos
          como título, categoria, data e descrição, enquanto a lista exibe as
          tarefas cadastradas com a possibilidade de editar ou excluir uma
          tarefa.
        </p>
        <div>
          <h2>2. Instruções de Uso</h2>

          <h3 className="section-title">Cadastrar uma Tarefa:</h3>
          <ul className="steps">
            <li>
              <strong>Preencher o título da tarefa:</strong> No campo{" "}
              <strong>"Título"</strong>, digite o título da sua tarefa. O título
              deve ter no mínimo <strong>4 caracteres</strong> para ser válido.
            </li>
            <li>
              <strong>Selecionar a categoria da tarefa:</strong> No campo{" "}
              <strong>"Categoria"</strong>, selecione uma das opções disponíveis
              no menu suspenso:
              <ul>
                <li>
                  <strong>Trabalho</strong>
                </li>
                <li>
                  <strong>Estudo</strong>
                </li>
                <li>
                  <strong>Igreja</strong>
                </li>
              </ul>
            </li>
            <li>
              <strong>Escolher a data da tarefa:</strong> No campo{" "}
              <strong>"Data"</strong>, selecione a data em que a tarefa deve ser
              realizada. A data é obrigatória.
            </li>
            <li>
              <strong>Adicionar uma descrição:</strong> No campo{" "}
              <strong>"Descrição"</strong>, insira uma breve descrição sobre a
              tarefa. A descrição é opcional, mas pode ser útil para fornecer
              mais detalhes sobre a tarefa.
            </li>
            <li>
              <strong>Salvar a tarefa:</strong> Após preencher os campos, clique
              no botão <strong>"Salvar"</strong> para cadastrar a tarefa. O
              formulário será enviado e a tarefa será salva.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="section-title">Visualizar Tarefas:</h3>
          <ul className="steps">
            <li>
              <strong>Lista de Tarefas:</strong> Abaixo do formulário de
              cadastro, a <strong>lista de tarefas</strong> cadastradas será
              exibida. A quantidade de tarefas cadastradas será mostrada no topo
              da lista, informando se há:
              <ul>
                <li>
                  <strong>Nenhuma tarefa cadastrada</strong>
                </li>
                <li>
                  <strong>1 tarefa cadastrada</strong>
                </li>
                <li>
                  <strong>X tarefas cadastradas</strong> (onde X é o número de
                  tarefas cadastradas)
                </li>
              </ul>
            </li>
            <li>
              <strong>Detalhes da Tarefa:</strong> Para cada tarefa, você verá
              os seguintes detalhes:
              <ul>
                <li>
                  <strong>Título</strong>
                </li>
                <li>
                  <strong>Categoria</strong>
                </li>
                <li>
                  <strong>Data</strong>
                </li>
                <li>
                  <strong>Descrição</strong>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="section-title">Editar uma Tarefa:</h3>
          <ul className="steps">
            <li>
              <strong>Botão de Editar:</strong> Para editar uma tarefa
              existente, clique no ícone <strong>de lápis</strong> (
              <strong>Editar</strong>) ao lado da tarefa desejada. O formulário
              será preenchido automaticamente com os dados da tarefa
              selecionada. Edite os campos conforme necessário e clique em{" "}
              <strong>"Salvar"</strong> para atualizar a tarefa.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="section-title">Excluir uma Tarefa:</h3>
          <ul className="steps">
            <li>
              <strong>Botão de Excluir:</strong> Para excluir uma tarefa, clique
              no ícone <strong>de lixeira</strong> (<strong>Excluir</strong>) ao
              lado da tarefa que deseja excluir. A tarefa será removida da
              lista.
            </li>
          </ul>
        </div>

        <div>
          <h2>3. Navegação e Funcionalidades Extras:</h2>
          <ul>
            <li>
              <strong>Como Usar:</strong> Para saber como usar o sistema, clique
              no link <strong>"Como Usar?"</strong> no canto inferior esquerdo
              da tela. Isso abrirá uma página explicando o uso do sistema em
              mais detalhes.
            </li>
            <li>
              <strong>Scroll:</strong> Há uma funcionalidade de{" "}
              <strong>scroll</strong> que permite navegar pela lista de tarefas,
              caso haja muitas tarefas cadastradas.
            </li>
          </ul>
        </div>

        <div>
          <h2>4. Exemplo de Uso:</h2>
          <div className="example">
            1. Ao abrir o sistema, você verá o formulário para cadastrar uma
            nova tarefa.
            <br />
            2. Preencha todos os campos do formulário (Título, Categoria, Data e
            Descrição) e clique em <strong>Salvar</strong>.
            <br />
            3. Sua tarefa será exibida na lista abaixo do formulário.
            <br />
            4. Se você quiser editar ou excluir uma tarefa, basta clicar nos
            respectivos ícones ao lado da tarefa na lista.
            <br />
            5. Se não houver tarefas, será exibida a mensagem{" "}
            <strong>"Nenhuma tarefa cadastrada"</strong>.
          </div>
        </div>

        <div>
          <h2>5. Requisitos:</h2>
          <div className="note">
            <ul>
              <li>
                <strong>Título:</strong> é obrigatório e deve ter pelo menos{" "}
                <strong>4 caracteres</strong>.
              </li>
              <li>
                <strong>Categoria:</strong> é obrigatória.
              </li>
              <li>
                <strong>Data:</strong> é obrigatória.
              </li>
              <li>
                <strong>Descrição:</strong> é opcional, mas recomendada para
                detalhar a tarefa.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
