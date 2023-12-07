INSERT INTO
    e10.disciplina_concurso (id, nome)
VALUES
    (21, 'Filosofia');

INSERT INTO
    e10.disciplina_concurso (id, nome)
VALUES
    (22, 'Educação Física');

INSERT INTO
    e10.disciplina_concurso (id, nome)
VALUES
    (23, 'Informática/Desenvolvimento Web');

INSERT INTO
    e10.disciplina_concurso (id, nome)
VALUES
    (24, 'Informática/Redes');

INSERT INTO
    e10.disciplina_concurso (id, nome)
VALUES
    (25, 'Português');

INSERT INTO
    e10.disciplina_concurso (id, nome)
VALUES
    (26, 'Arte');

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        41,
        'Adilson Luiz da Silva',
        NULL,
        'adilson.silva@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        42,
        'Alan Rodrigo Antunes',
        NULL,
        'alan.antunes@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        43,
        'Aline Cristina Sabadini',
        NULL,
        'aline.sabadini@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        44,
        'Andreza Carubelli Sapata',
        NULL,
        'andreza.sapata@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        45,
        'Danilo Souza Melo',
        NULL,
        'danilo.melo@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        46,
        'Denis Rogério da Silva',
        NULL,
        'denis.silva@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        47,
        'Edson da Silva Castro',
        NULL,
        'edson.castro@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        48,
        'Eduardo Hiroshi Nakamura',
        NULL,
        'eduardo.nakamura@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        49,
        'Estélio da Silva Amorim',
        NULL,
        'estelio.amorim@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        50,
        'Fernando Honório da Silva',
        NULL,
        'fernando.honorio@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        51,
        'Huilton José Domingues Neto',
        NULL,
        'huilton.domingues@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        52,
        'Joel Marcelo Becker',
        NULL,
        'joel.becker@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        53,
        'José Roberto Campos',
        NULL,
        'jose.campos@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        54,
        'Luciano de Souza da Costa e Silva',
        NULL,
        'luciano.souza@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        55,
        'Maraisa da Silva Guerra',
        NULL,
        'maraisa.guerra@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        56,
        'Márcio Afonso Soleira Grassi',
        NULL,
        'marcio.grassi@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        57,
        'Márcio Fernando Magosso',
        NULL,
        'marcio.magosso@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        58,
        'Michela Mitiko Kato Meneses de Souza',
        NULL,
        'michela.souza@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        59,
        'Murilo Miceno Frigo',
        NULL,
        'murilo.frigo@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        60,
        'Paula Emboava Ortiz',
        NULL,
        'paula.ortiz@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        61,
        'Renata Pereira Longo',
        NULL,
        'renata.longo@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        62,
        'Saulo Crnkowise Garcia',
        NULL,
        'saulo.garcia@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        63,
        'Suellen Moreira de Oliveira',
        NULL,
        'suellen.oliveira@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        64,
        'Thiago de Oliveira Correia',
        NULL,
        'thiago.correia@ifms.edu.br'
    );

INSERT INTO
    e10.professor (id, nome, disciplina_concurso, email)
VALUES
    (
        65,
        'Thiago Raniel',
        NULL,
        'thiago.raniel@ifms.edu.br'
    );

UPDATE e10.professor
SET
    disciplina_concurso = 21
WHERE
    id = 41;

UPDATE e10.professor
SET
    disciplina_concurso = 22
WHERE
    id = 42;

UPDATE e10.professor
SET
    disciplina_concurso = 23
WHERE
    id = 1;

UPDATE e10.professor
SET
    disciplina_concurso = 12
WHERE
    id = 43;

UPDATE e10.professor
SET
    disciplina_concurso = 10
WHERE
    id = 2;

UPDATE e10.professor
SET
    disciplina_concurso = 17
WHERE
    id = 44;

UPDATE e10.professor
SET
    disciplina_concurso = 2
WHERE
    id = 3;

UPDATE e10.professor
SET
    disciplina_concurso = 24
WHERE
    id = 4;

UPDATE e10.professor
SET
    disciplina_concurso = 15
WHERE
    id = 5;

UPDATE e10.professor
SET
    disciplina_concurso = 1
WHERE
    id = 45;

UPDATE e10.professor
SET
    disciplina_concurso = 16
WHERE
    id = 46;

UPDATE e10.professor
SET
    disciplina_concurso = 16
WHERE
    id = 6;

UPDATE e10.professor
SET
    disciplina_concurso = 23
WHERE
    id = 7;

UPDATE e10.professor
SET
    disciplina_concurso = 9
WHERE
    id = 47;

UPDATE e10.professor
SET
    disciplina_concurso = 3
WHERE
    id = 8;

UPDATE e10.professor
SET
    disciplina_concurso = 4
WHERE
    id = 9;

UPDATE e10.professor
SET
    disciplina_concurso = 24
WHERE
    id = 48;

UPDATE e10.professor
SET
    disciplina_concurso = 15
WHERE
    id = 10;

UPDATE e10.professor
SET
    disciplina_concurso = 23
WHERE
    id = 11;

UPDATE e10.professor
SET
    disciplina_concurso = 17
WHERE
    id = 12;

UPDATE e10.professor
SET
    disciplina_concurso = 19
WHERE
    id = 49;

UPDATE e10.professor
SET
    disciplina_concurso = 5
WHERE
    id = 13;

UPDATE e10.professor
SET
    disciplina_concurso = 24
WHERE
    id = 14;

UPDATE e10.professor
SET
    disciplina_concurso = 18
WHERE
    id = 15;

UPDATE e10.professor
SET
    disciplina_concurso = 19
WHERE
    id = 50;

UPDATE e10.professor
SET
    disciplina_concurso = 10
WHERE
    id = 16;

UPDATE e10.professor
SET
    disciplina_concurso = 8
WHERE
    id = 17;

UPDATE e10.professor
SET
    disciplina_concurso = 23
WHERE
    id = 18;

UPDATE e10.professor
SET
    disciplina_concurso = 15
WHERE
    id = 19;

UPDATE e10.professor
SET
    disciplina_concurso = 15
WHERE
    id = 51;

UPDATE e10.professor
SET
    disciplina_concurso = 15
WHERE
    id = 52;

UPDATE e10.professor
SET
    disciplina_concurso = 16
WHERE
    id = 20;

UPDATE e10.professor
SET
    disciplina_concurso = 16
WHERE
    id = 21;

UPDATE e10.professor
SET
    disciplina_concurso = 23
WHERE
    id = 53;

UPDATE e10.professor
SET
    disciplina_concurso = 20
WHERE
    id = 22;

UPDATE e10.professor
SET
    disciplina_concurso = 1
WHERE
    id = 23;

UPDATE e10.professor
SET
    disciplina_concurso = 7
WHERE
    id = 24;

UPDATE e10.professor
SET
    disciplina_concurso = 11
WHERE
    id = 54;

UPDATE e10.professor
SET
    disciplina_concurso = 23
WHERE
    id = 55;

UPDATE e10.professor
SET
    disciplina_concurso = 3
WHERE
    id = 56;

UPDATE e10.professor
SET
    disciplina_concurso = 13
WHERE
    id = 57;

UPDATE e10.professor
SET
    disciplina_concurso = 12
WHERE
    id = 25;

UPDATE e10.professor
SET
    disciplina_concurso = 23
WHERE
    id = 26;

UPDATE e10.professor
SET
    disciplina_concurso = 24
WHERE
    id = 27;

UPDATE e10.professor
SET
    disciplina_concurso = 16
WHERE
    id = 28;

UPDATE e10.professor
SET
    disciplina_concurso = 14
WHERE
    id = 29;

UPDATE e10.professor
SET
    disciplina_concurso = 19
WHERE
    id = 30;

UPDATE e10.professor
SET
    disciplina_concurso = 2
WHERE
    id = 31;

UPDATE e10.professor
SET
    disciplina_concurso = 25
WHERE
    id = 58;

UPDATE e10.professor
SET
    disciplina_concurso = 19
WHERE
    id = 59;

UPDATE e10.professor
SET
    disciplina_concurso = 15
WHERE
    id = 32;

UPDATE e10.professor
SET
    disciplina_concurso = 22
WHERE
    id = 60;

UPDATE e10.professor
SET
    disciplina_concurso = 23
WHERE
    id = 33;

UPDATE e10.professor
SET
    disciplina_concurso = 20
WHERE
    id = 61;

UPDATE e10.professor
SET
    disciplina_concurso = 19
WHERE
    id = 34;

UPDATE e10.professor
SET
    disciplina_concurso = 26
WHERE
    id = 35;

UPDATE e10.professor
SET
    disciplina_concurso = 23
WHERE
    id = 36;

UPDATE e10.professor
SET
    disciplina_concurso = 2
WHERE
    id = 37;

UPDATE e10.professor
SET
    disciplina_concurso = 16
WHERE
    id = 62;

UPDATE e10.professor
SET
    disciplina_concurso = 13
WHERE
    id = 38;

UPDATE e10.professor
SET
    disciplina_concurso = 20
WHERE
    id = 63;

UPDATE e10.professor
SET
    disciplina_concurso = 2
WHERE
    id = 39;

UPDATE e10.professor
SET
    disciplina_concurso = 6
WHERE
    id = 64;

UPDATE e10.professor
SET
    disciplina_concurso = 19
WHERE
    id = 65;

UPDATE e10.professor
SET
    disciplina_concurso = 24
WHERE
    id = 40;

-- SELECT
--     professor.nome AS "Docente",
--     disciplina.nome AS "Área de Formação",
--     professor.email AS "E-mail"
-- FROM
--     e10.professor AS professor
--     JOIN e10.disciplina_concurso AS disciplina ON professor.disciplina_concurso = disciplina.id
-- ORDER BY
--     professor.nome;