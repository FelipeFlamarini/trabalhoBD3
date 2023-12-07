const fs = require("fs");

let todos_professores = [
    {
        nome: "Adilson Luiz da Silva",
        disciplina: "Filosofia",
        email: "adilson.silva@ifms.edu.br",
    },
    {
        nome: "Alan Rodrigo Antunes",
        disciplina: "Educação Física",
        email: "alan.antunes@ifms.edu.br",
    },
    {
        nome: "Alex Fernando de Araujo",
        disciplina: "Informática/Desenvolvimento Web",
        email: "alex.araujo@ifms.edu.br",
    },
    {
        nome: "Aline Cristina Sabadini",
        disciplina: "Química",
        email: "aline.sabadini@ifms.edu.br",
    },
    {
        nome: "André Luis Monteiro Ferreira Lopes",
        disciplina: "História",
        email: "andre.lopes@ifms.edu.br",
    },
    {
        nome: "Andreza Carubelli Sapata",
        disciplina: "Português/Inglês",
        email: "andreza.sapata@ifms.edu.br",
    },
    {
        nome: "Angelo Cesar Perinotto",
        disciplina: "Física",
        email: "angelo.perinotto@ifms.edu.br",
    },
    {
        nome: "Ápio Carnielo e Silva",
        disciplina: "Informática/Redes",
        email: "apio.silva@ifms.edu.br",
    },
    {
        nome: "Bruna Silveira Pavlack",
        disciplina: "Matemática",
        email: "bruna.pavlack@ifms.edu.br",
    },
    {
        nome: "Danilo Souza Melo",
        disciplina: "Geografia",
        email: "danilo.melo@ifms.edu.br",
    },
    {
        nome: "Denis Rogério da Silva",
        disciplina: "Elétrica/Automação",
        email: "denis.silva@ifms.edu.br",
    },
    {
        nome: "Diogo Ramalho de Oliveira",
        disciplina: "Elétrica/Automação",
        email: "diogo.ramalho@ifms.edu.br",
    },
    {
        nome: "Douglas Francisquini Toledo",
        disciplina: "Informática/Desenvolvimento Web",
        email: "douglas.toledo@ifms.edu.br",
    },
    {
        nome: "Edson da Silva Castro",
        disciplina: "Informática/Engenharia de Software e Banco de Dados",
        email: "edson.castro@ifms.edu.br",
    },
    {
        nome: "Edson dos Santos Bortoloto",
        disciplina: "Eletrotécnica",
        email: "edson.bortoloto@ifms.edu.br",
    },
    {
        nome: "Edson Italo Mainardi Junior",
        disciplina: "Eletroeletrônica",
        email: "edson.mainardi@ifms.edu.br",
    },
    {
        nome: "Eduardo Hiroshi Nakamura",
        disciplina: "Informática/Redes",
        email: "eduardo.nakamura@ifms.edu.br",
    },
    {
        nome: "Elaine Alves de Godoy",
        disciplina: "Matemática",
        email: "elaine.godoy@ifms.edu.br",
    },
    {
        nome: "Elisangela Citro Turci",
        disciplina: "Informática/Desenvolvimento Web",
        email: "elisangela.turci@ifms.edu.br",
    },
    {
        nome: "Elisângela Santos de Carvalho",
        disciplina: "Português/Inglês",
        email: "elisangela.carvalho@ifms.edu.br",
    },
    {
        nome: "Estélio da Silva Amorim",
        disciplina: "Elétrica/Eletrotécnica",
        email: "estelio.amorim@ifms.edu.br",
    },
    {
        nome: "Eva Maria Testa Teles",
        disciplina: "Português/Espanhol",
        email: "eva.teles@ifms.edu.br",
    },
    {
        nome: "Evandro Rogerio Rocha",
        disciplina: "Informática/Redes",
        email: "evandro.rocha@ifms.edu.br",
    },
    {
        nome: "Fausto Lopes Catto",
        disciplina: "Mecânica",
        email: "fausto.catto@ifms.edu.br",
    },
    {
        nome: "Fernando Honório da Silva",
        disciplina: "Elétrica/Eletrotécnica",
        email: "fernando.honorio@ifms.edu.br",
    },
    {
        nome: "Gilmar Ribeiro Pereira",
        disciplina: "História",
        email: "gilmar.pereira@ifms.edu.br",
    },
    {
        nome: "Guilherme Costa Garcia Tommaselli",
        disciplina: "Sociologia",
        email: "guilherme.tommaselli@ifms.edu.br",
    },
    {
        nome: "Habib Asseiss Neto",
        disciplina: "Informática/Desenvolvimento Web",
        email: "habib.asseiss@ifms.edu.br",
    },
    {
        nome: "Hudson Alves Martins",
        disciplina: "Matemática",
        email: "hudson.martins@ifms.edu.br",
    },
    {
        nome: "Huilton José Domingues Neto",
        disciplina: "Matemática",
        email: "huilton.domingues@ifms.edu.br",
    },
    {
        nome: "Joel Marcelo Becker",
        disciplina: "Matemática",
        email: "joel.becker@ifms.edu.br",
    },
    {
        nome: "José Aparecido Jorge Junior",
        disciplina: "Elétrica/Automação",
        email: "jose.jorge@ifms.edu.br",
    },
    {
        nome: "José Henrique Galeti",
        disciplina: "Elétrica/Automação",
        email: "jose.galeti@ifms.edu.br",
    },
    {
        nome: "José Roberto Campos",
        disciplina: "Informática/Desenvolvimento Web",
        email: "jose.campos@ifms.edu.br",
    },
    {
        nome: "Kader Carvalho Assad",
        disciplina: "Administração",
        email: "kader.assad@ifms.edu.br",
    },
    {
        nome: "Kleber Rodrigo Penteado",
        disciplina: "Geografia",
        email: "kleber.penteado@ifms.edu.br",
    },
    {
        nome: "Lucas Rangel de Oliveira",
        disciplina: "Engenharia Mecânica",
        email: "lucas.rangel@ifms.edu.br",
    },
    {
        nome: "Luciano de Souza da Costa e Silva",
        disciplina: "Engenharia Elétrica",
        email: "luciano.souza@ifms.edu.br",
    },
    {
        nome: "Maraisa da Silva Guerra",
        disciplina: "Informática/Desenvolvimento Web",
        email: "maraisa.guerra@ifms.edu.br",
    },
    {
        nome: "Márcio Afonso Soleira Grassi",
        disciplina: "Eletrotécnica",
        email: "marcio.grassi@ifms.edu.br",
    },
    {
        nome: "Márcio Fernando Magosso",
        disciplina: "Biologia",
        email: "marcio.magosso@ifms.edu.br",
    },
    {
        nome: "Márcio José Rodrigues Amorim",
        disciplina: "Química",
        email: "marcio.amorim@ifms.edu.br",
    },
    {
        nome: "Marcio Teixeira Oliveira",
        disciplina: "Informática/Desenvolvimento Web",
        email: "marcio.oliveira@ifms.edu.br",
    },
    {
        nome: "Marco Aurélio Ferreira",
        disciplina: "Informática/Redes",
        email: "marco.ferreira@ifms.edu.br",
    },
    {
        nome: "Marcus Felipe Calori Jorgeto",
        disciplina: "Elétrica/Automação",
        email: "marcus.jorgetto@ifms.edu.br",
    },
    {
        nome: "Maria Celinei de Sousa Hernandes",
        disciplina: "Letras/Português - Inglês",
        email: "maria.hernandes@ifms.edu.br",
    },
    {
        nome: "Mariana Costa Falcao",
        disciplina: "Elétrica/Eletrotécnica",
        email: "mariana.falcao@ifms.edu.br",
    },
    {
        nome: "Maycon Rotta",
        disciplina: "Física",
        email: "maycon.rotta@ifms.edu.br",
    },
    {
        nome: "Michela Mitiko Kato Meneses de Souza",
        disciplina: "Português",
        email: "michela.souza@ifms.edu.br",
    },
    {
        nome: "Murilo Miceno Frigo",
        disciplina: "Elétrica/Eletrotécnica",
        email: "murilo.frigo@ifms.edu.br",
    },
    {
        nome: "Nair Rodrigues de Souza",
        disciplina: "Matemática",
        email: "nair.souza@ifms.edu.br",
    },
    {
        nome: "Paula Emboava Ortiz",
        disciplina: "Educação Física",
        email: "paula.ortiz@ifms.edu.br",
    },
    {
        nome: "Pedro Henrique de Araújo Siqueira",
        disciplina: "Informática/Desenvolvimento Web",
        email: "pedro.siqueira@ifms.edu.br",
    },
    {
        nome: "Renata Pereira Longo",
        disciplina: "Administração",
        email: "renata.longo@ifms.edu.br",
    },
    {
        nome: "Ricardo de Moura Araújo",
        disciplina: "Elétrica/Eletrotécnica",
        email: "ricardo.araujo@ifms.edu.br",
    },
    {
        nome: "Rodrigo Alves Ferreira",
        disciplina: "Arte",
        email: "rodrigo.ferreira@ifms.edu.br",
    },
    {
        nome: "Rogério Alves dos Santos Antoniassi",
        disciplina: "Informática/Desenvolvimento Web",
        email: "rogerio.antoniassi@ifms.edu.br",
    },
    {
        nome: "Ronivan Sousa da Silva",
        disciplina: "Física",
        email: "ronivan.silva@ifms.edu.br",
    },
    {
        nome: "Saulo Crnkowise Garcia",
        disciplina: "Elétrica/Automação",
        email: "saulo.garcia@ifms.edu.br",
    },
    {
        nome: "Simone Silva Hiraki",
        disciplina: "Biologia",
        email: "simone.hiraki@ifms.edu.br",
    },
    {
        nome: "Suellen Moreira de Oliveira",
        disciplina: "Administração",
        email: "suellen.oliveira@ifms.edu.br",
    },
    {
        nome: "Tiago Cesar Gimenes",
        disciplina: "Física",
        email: "tiago.gimenes@ifms.edu.br",
    },
    {
        nome: "Thiago de Oliveira Correia",
        disciplina: "Informática/Desenvolvimento e Jogos Digitais",
        email: "thiago.correia@ifms.edu.br",
    },
    {
        nome: "Thiago Raniel",
        disciplina: "Elétrica/Eletrotécnica",
        email: "thiago.raniel@ifms.edu.br",
    },
    {
        nome: "Vladimir Píccolo Barcelos",
        disciplina: "Informática/Redes",
        email: "vladimir.barcelos@ifms.edu.br",
    },
];

let starting_professores_id = 41;
const professores_atuais = [
    {
        nome: "Alex Fernando de Araujo",
        email: "alex.araujo@ifms.edu.br",
    },
    {
        nome: "André Luis Monteiro Ferreira Lopes",
        email: "andre.lopes@ifms.edu.br",
    },
    {
        nome: "Angelo Cesar Perinotto",
        email: "angelo.perinotto@ifms.edu.br",
    },
    {
        nome: "Ápio Carnielo e Silva",
        email: "apio.silva@ifms.edu.br",
    },
    {
        nome: "Bruna Silveira Pavlack",
        email: "bruna.pavlack@ifms.edu.br",
    },
    {
        nome: "Diogo Ramalho de Oliveira",
        email: "diogo.ramalho@ifms.edu.br",
    },
    {
        nome: "Douglas Francisquini Toledo",
        email: "douglas.toledo@ifms.edu.br",
    },
    {
        nome: "Edson dos Santos Bortoloto",
        email: "edson.bortoloto@ifms.edu.br",
    },
    {
        nome: "Edson Italo Mainardi Junior",
        email: "edson.mainardi@ifms.edu.br",
    },
    {
        nome: "Elaine Alves de Godoy",
        email: "elaine.godoy@ifms.edu.br",
    },
    {
        nome: "Elisangela Citro Turci",
        email: "elisangela.turci@ifms.edu.br",
    },
    {
        nome: "Elisângela Santos de Carvalho",
        email: "elisangela.carvalho@ifms.edu.br",
    },
    {
        nome: "Eva Maria Testa Teles",
        email: "eva.teles@ifms.edu.br",
    },
    {
        nome: "Evandro Rogerio Rocha",
        email: "evandro.rocha@ifms.edu.br",
    },
    {
        nome: "Fausto Lopes Catto",
        email: "fausto.catto@ifms.edu.br",
    },
    {
        nome: "Gilmar Ribeiro Pereira",
        email: "gilmar.pereira@ifms.edu.br",
    },
    {
        nome: "Guilherme Costa Garcia Tommaselli",
        email: "guilherme.tommaselli@ifms.edu.br",
    },
    {
        nome: "Habib Asseiss Neto",
        email: "habib.asseiss@ifms.edu.br",
    },
    {
        nome: "Hudson Alves Martins",
        email: "hudson.martins@ifms.edu.br",
    },
    {
        nome: "José Aparecido Jorge Junior",
        email: "jose.jorge@ifms.edu.br",
    },
    {
        nome: "José Henrique Galeti",
        email: "jose.galeti@ifms.edu.br",
    },
    {
        nome: "Kader Carvalho Assad",
        email: "kader.assad@ifms.edu.br",
    },
    {
        nome: "Kleber Rodrigo Penteado",
        email: "kleber.penteado@ifms.edu.br",
    },
    {
        nome: "Lucas Rangel de Oliveira",
        email: "lucas.rangel@ifms.edu.br",
    },
    {
        nome: "Márcio José Rodrigues Amorim",
        email: "marcio.amorim@ifms.edu.br",
    },
    {
        nome: "Marcio Teixeira Oliveira",
        email: "marcio.oliveira@ifms.edu.br",
    },
    {
        nome: "Marco Aurélio Ferreira",
        email: "marco.ferreira@ifms.edu.br",
    },
    {
        nome: "Marcus Felipe Calori Jorgeto",
        email: "marcus.jorgetto@ifms.edu.br",
    },
    {
        nome: "Maria Celinei de Sousa Hernandes",
        email: "maria.hernandes@ifms.edu.br",
    },
    {
        nome: "Mariana Costa Falcao",
        email: "mariana.falcao@ifms.edu.br",
    },
    {
        nome: "Maycon Rotta",
        email: "maycon.rotta@ifms.edu.br",
    },
    {
        nome: "Nair Rodrigues de Souza",
        email: "nair.souza@ifms.edu.br",
    },
    {
        nome: "Pedro Henrique de Araújo Siqueira",
        email: "pedro.siqueira@ifms.edu.br",
    },
    {
        nome: "Ricardo de Moura Araújo",
        email: "ricardo.araujo@ifms.edu.br",
    },
    {
        nome: "Rodrigo Alves Ferreira",
        email: "rodrigo.ferreira@ifms.edu.br",
    },
    {
        nome: "Rogério Alves dos Santos Antoniassi",
        email: "rogerio.antoniassi@ifms.edu.br",
    },
    {
        nome: "Ronivan Sousa da Silva",
        email: "ronivan.silva@ifms.edu.br",
    },
    {
        nome: "Simone Silva Hiraki",
        email: "simone.hiraki@ifms.edu.br",
    },
    {
        nome: "Tiago Cesar Gimenes",
        email: "tiago.gimenes@ifms.edu.br",
    },
    {
        nome: "Vladimir Píccolo Barcelos",
        email: "vladimir.barcelos@ifms.edu.br",
    },
];

const professores_novos = [];

let starting_disciplinas_id = 21;
const disciplinas_atuais = [
    {
        nome: "Geografia",
    },
    {
        nome: "Física",
    },
    {
        nome: "Eletrotécnica",
    },
    {
        nome: "Eletroeletrônica",
    },
    {
        nome: "Português/Espanhol",
    },
    {
        nome: "Informática/Desenvolvimento e Jogos Digitais",
    },
    {
        nome: "Engenharia Mecânica",
    },
    {
        nome: "Sociologia",
    },
    {
        nome: "Informática/Engenharia de Software e Banco de Dados",
    },
    {
        nome: "História",
    },
    {
        nome: "Engenharia Elétrica",
    },
    {
        nome: "Química",
    },
    {
        nome: "Biologia",
    },
    {
        nome: "Letras/Português - Inglês",
    },
    {
        nome: "Matemática",
    },
    {
        nome: "Elétrica/Automação",
    },
    {
        nome: "Português/Inglês",
    },
    {
        nome: "Mecânica",
    },
    {
        nome: "Elétrica/Eletrotécnica",
    },
    {
        nome: "Administração",
    },
];

const disciplinas_novas = [];

for (const professor of todos_professores) {
    let disciplina_presente = 0;
    for (const disciplina of disciplinas_atuais) {
        // verificando se disciplina está presente
        // a verificação deve ocorrer na table atuais E na table novas
        // para não haver entradas novas repetidas
        if (professor.disciplina == disciplina.nome) {
            disciplina_presente = 1;
            break;
        }
    }
    let disciplina_nova = 1;
    if (!disciplina_presente) {
        // se não está presente, verifica se já foi adicionada
        for (const disciplina of disciplinas_novas) {
            if (professor.disciplina == disciplina.nome) {
                disciplina_nova = 0;
                break;
            }
        }
        if (disciplina_nova) {
            // adiciona disciplina nova
            disciplinas_novas.push({ nome: professor.disciplina });
        }
    }

    let professor_presente = 0;
    for (const professor_atual of professores_atuais) {
        // verificando se professor está presente
        // a verificação deve ocorrer na table atuais E na table novas
        // para não haver entradas novas repetidas
        // essa verificação deve ocorrer por consistência do código, até porque eu já sei que não há professores com nomes repetidos
        if (professor.nome == professor_atual.nome) {
            professor_presente = 1;
            break;
        }
    }
    let professor_novo = 1;
    if (!professor_presente) {
        // se não está presente, verifica se já foi adicionado
        for (const professor_atual of professores_novos) {
            if (professor.nome == professor_atual.nome) {
                professor_novo = 0;
                break;
            }
        }
        if (professor_novo) {
            // adiciona professor novo
            professores_novos.push(professor);
        }
    }
}

// query das disciplinas novas
const queryDisciplinasNovas = disciplinas_novas.map((disciplina) => {
    return `INSERT INTO e10.disciplina_concurso (id, nome) VALUES (${starting_disciplinas_id++}, '${
        disciplina.nome
    }');`;
});

// query dos professores novos
const queryProfessoresNovos = professores_novos.map((professor) => {
    return `INSERT INTO e10.professor (id, nome, disciplina_concurso, email) VALUES (${starting_professores_id++}, '${
        professor.nome
    }', NULL, '${professor.email}');`;
});

// query para adicionar as disciplinas dos professores
const todas_disciplinas_novas = disciplinas_atuais.concat(disciplinas_novas);
const nomes_disciplinas = todas_disciplinas_novas.map((disciplina) => {
    return disciplina.nome;
});

const todos_professores_novos = professores_atuais.concat(professores_novos);
const nomes_professores = todos_professores_novos.map((professor) => {
    return professor.nome;
});

const queryDiscipliasProfessores = todos_professores.map((professor) => {
    const professorId = nomes_professores.indexOf(professor.nome) + 1;
    const disciplinaId = nomes_disciplinas.indexOf(professor.disciplina) + 1;

    return `UPDATE e10.professor SET disciplina_concurso = ${disciplinaId} WHERE id=${professorId};`;
});

const allQuery = [];
allQuery.push(queryDisciplinasNovas.join("\n"));
allQuery.push("\n");
allQuery.push(queryProfessoresNovos.join("\n"));
allQuery.push("\n");
allQuery.push(queryDiscipliasProfessores.join("\n"));
allQuery.push("\n");
allQuery.push(`SELECT
professor.nome AS "Docente",
disciplina.nome AS "Área de Formação",
professor.email AS "E-mail"
FROM
e10.professor AS professor
JOIN e10.disciplina_concurso AS disciplina ON professor.disciplina_concurso = disciplina.id
ORDER BY
professor.nome;`);

fs.writeFileSync("e10.sql", allQuery.join("\n"));
