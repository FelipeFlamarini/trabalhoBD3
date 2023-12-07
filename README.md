<p>O objetivo do trabalho é adicionar as informações dos professores que estão no site, mas não estão no schema do aluno.</p>
<p>No meu caso, irei usar o schema e10.</p>
<br>
<p>Inicialmente salvei a página que contém todas as informações do corpo docente do IFMS e criei o script "corpo docente.js". Ao abrir o arquivo HTML, o console irá apresentar uma linha com todas as informações dos professores em JSON.</p>
<p>Copiei o JSON no console e salvei no script "e10.js" em uma array de nome "professores". Usei a extensão "Prettier" para formatar o objeto automaticamente e facilitar a leitura.</p>
<p>O script "e10.js" será responsável por criar o script SQL "e10.sql" contendo todas as informações que faltam no meu schema.</p>