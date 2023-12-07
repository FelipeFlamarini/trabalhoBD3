<p>O objetivo do trabalho é adicionar as informações dos professores que estão no site, mas não estão no schema do aluno.</p>
<p>No meu caso, irei usar o schema e10.</p>
<br>
<p>Inicialmente salvei a página "corpo_docente.html" que contém todas as informações do corpo docente do IFMS e criei o script "corpo_docente.js". Ao abrir o arquivo HTML, o console irá apresentar uma linha com todas as informações dos professores em JSON.</p>
<p>Copiei o JSON no console e salvei no script "e10.js" em uma array de nome "todos_professores". Usei a extensão "Prettier" para formatar o objeto automaticamente e facilitar a leitura.</p>
<p>Usando o psql, criei um arquivo HTML chamado "saida_e10.html". Usando o comando \H, que transforma a saída do psql no formato HTML, usei os queries "SELECT * FROM e10.professor;" e "SELECT * FROM e10.disciplina_concurso;". Dessa forma, armazenei as informações que estão no meu schema e10 atualmente.</p>
<p>Manualmente corrigi o arquivo HTML "saida_e10.html", que não inseriu os caracteres com acentos presente nos nomes de alguns professores. Percebi que meu notebook com Arch dá a saída com os acentos corretos, mas meu computador com Windows 10 não, e não sei o motivo, provavelmente algum problema na instalação que não percebi.</p>
<p>Com as informações no arquivo HTML "saida_e10.html", criei o script "saida_e10.js" com a mesma ideia usada anteriormente, com o console apresentando uma linha das informações dos professores, que estão atualmente no schema e10, em JSON.</p>
<!-- <p>A estratégia para inserir as informações evitando repetições é alterar a coluna "email" adicionando o constraint "UNIQUE". No sistema do IFMS, não pode haver e-mails com o mesmo nome. Dessa forma, quando há um aluno/professor com os mesmos primeiro e último nomes, o sistema automaticamente adiciona um número após o último nome no e-mail da pessoa.</p>

Essa ideia iria contra a proposta do trabalho, onde só devemos usar os comandos INSERT e UPDATE.

-->
<p>O script "e10.js" será responsável por criar o script SQL "e10.sql" contendo somente as informações que faltam no meu schema, além de inserir corretamente a coluna "disciplina_concurso" na table "e10.professor"</p>