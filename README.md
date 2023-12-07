<p>O objetivo do trabalho é adicionar as informações dos professores que estão no site, mas não estão no schema do aluno.</p>
<p>No meu caso, irei usar o schema e10.</p>
<br>
<p>Inicialmente salvei a página "corpo_docente.html" que contém todas as informações do corpo docente do IFMS e criei o script "corpo_docente.js". Ao abrir o arquivo HTML, o console irá apresentar uma linha com todas as informações dos professores (nome, disciplina, e-mail) em JSON. No meu computador, essa linha demora uns 40 segundos para aparecer, pois ela espera a página carregar totalmente, incluindo os erros. Tive que formatar manualmente o nome das disciplinas por possuírem espaços antes e depois das barras, para seguir o padrão do script SQL enviado pelo professor.</p>
<p>Copiei o JSON no console e salvei no script "e10.js" em uma array de nome "todos_professores". Usei a extensão "Prettier" para formatar o objeto automaticamente e facilitar a leitura.</p>
<p>Usando o psql, criei um arquivo HTML chamado "saida_e10.html". Usando o comando \H, que transforma a saída do psql no formato HTML, usei os queries "SELECT * FROM e10.professor;" e "SELECT * FROM e10.disciplina_concurso;". Dessa forma, armazenei as informações que estão no meu schema e10 atualmente.</p>
<p>Manualmente corrigi o arquivo HTML "saida_e10.html", que não inseriu os caracteres com acentos presente nos nomes de alguns professores. Percebi que meu notebook com Arch dá a saída com os acentos corretos, mas meu computador com Windows 10 não, e não sei o motivo, provavelmente algum problema na instalação que não percebi.</p>
<p>Com as informações no arquivo HTML "saida_e10.html", criei o script "saida_e10.js" com a mesma ideia usada anteriormente, com o console apresentando uma linha das informações dos professores (nome, e-mail) e disciplinas (nome), que estão atualmente no schema e10, em JSON.</p>
<!-- <p>A estratégia para inserir as informações evitando repetições é alterar a coluna "email" adicionando o constraint "UNIQUE". No sistema do IFMS, não pode haver e-mails com o mesmo nome. Dessa forma, quando há um aluno/professor com os mesmos primeiro e último nomes, o sistema automaticamente adiciona um número após o último nome no e-mail da pessoa.</p>

Essa ideia iria contra a proposta do trabalho, onde só devemos usar os comandos INSERT e UPDATE.

-->

<p>O script "e10.js" será responsável por criar o script SQL "e10.sql" contendo somente as informações que faltam no meu schema, além de inserir corretamente a coluna "disciplina_concurso" na table "e10.professor".</p>
<p>Para isso, ele irá comparar os resultados dos scripts "corpo_docente.js" e "saida_e10.js", adicionando apenas os faltantes. Primeiro irá adicionar as disciplinas, depois os professores, e por fim, os IDs das disciplinas como foreign keys na tabela de professores.</p>
<p>Para rodar o script "e10.js", utilizei o Node.js v18.18.2 (provavelmente a versão não vai mudar o resultado).</p>
<p>O script SQL "e10.sql" é o resultado do script "e10.js" com a formatação do "Prettier". No fim, há um query comentado que tem a saída exatamente igual à tabela encontrada na seção "Corpo Docente" do nosso campus. Está comentado porque foge das regras do trabalho, mas utilizei ele para verificar se o resultado estava correto.</p>