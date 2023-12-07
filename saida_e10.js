async function main() {
    const professores = Array.from(
        document.querySelectorAll("table tbody")[0].querySelectorAll("tr")
    ).map((tr) => {
        const tmp = {};
        Array.from(tr.querySelectorAll("td")).forEach((td, index) => {
            switch (index) {
                case 1:
                    tmp.nome = td.innerText.trim();
                    break;
                case 3:
                    tmp.email = td.innerText.trim();
                    break;
                default:
                    break;
            }
        });
        return tmp;
    });

    professores.splice(0, 1);

    const disciplinas = Array.from(
        document.querySelectorAll("table tbody")[1].querySelectorAll("tr")
    ).map((tr) => {
        return { nome: (tr.querySelectorAll("td")[1]?.innerText || "").trim() };
    });

    disciplinas.splice(0, 1);

    console.log(JSON.stringify(professores));
    console.log(JSON.stringify(disciplinas));
}

window.addEventListener("load", () => {
    main();
});
