function main() {
    let nomes = Array.from(
        document
            .querySelectorAll(".tabela_docente")[0]
            .getElementsByTagName("tr")
    ).map((tr) => {
        return Array.from(tr.getElementsByTagName("td"));
    });

    let disciplinas = [];

    nomes.splice(0, 1);

    nomes = nomes.map((tr) => {
        const teste = tr.map((td, index) => {
            switch (index) {
                case 0:
                    const nome =
                        td.getElementsByTagName("strong")[0]?.innerText ||
                        td.getElementsByTagName("b")[0]?.innerText ||
                        "";

                    return nome.split("/")[0].trim();

                case 1:
                    return td.innerText.trim();
                case 2:
                    return (
                        td.getElementsByTagName("a")[0]?.innerText || ""
                    ).trim();
                default:
                    return null;
            }
        });
        if (!disciplinas.includes(teste[1].replaceAll(" ", ""))) {
            disciplinas.push(teste[1].replaceAll(" ", ""));
        }
        return {
            nome: teste[0],
            area: teste[1],
            email: teste[2],
        };
    });
    

    console.log(`Quantidade de professores: ${nomes.length}`);
    console.log(`Quantidade de disciplinas: ${disciplinas.length}`);
    console.log(disciplinas);
    console.log(JSON.stringify(nomes));
}

window.addEventListener("load", () => {
    main();
});
