
function nivelHeroi() {
    const nome = document.querySelector("#nome").value;
    const xp = document.querySelector("#nivel").value;
    let nivel = ""

    if (!nome || !xp) {
        alert("Por favor, preencha todos os campos")
        return
    }

    else {

        switch (true) {
            case xp < 1000:
                nivel = "Ferro";
                break;

            case xp >= 1001 && xp <= 2000:
                nivel = "Bronze";
                break;

            case xp >= 2001 && xp <= 5000:
                nivel = "Prata";
                break

            case xp >= 5001 && xp <= 7000:
                nivel = "Ouro";
                break;

            case xp >= 7001 && xp <= 8000:
                nivel = "Platina";
                break;

            case xp >= 8001 && xp <= 9000:
                nivel = "Ascendente";
                break;

            case xp >= 9001 && xp <= 10000:
                nivel = "Imortal";
                break;

            case xp >= 10001:
                nivel = "Radiante"
                break
        }
    }

    document.getElementById("resultados-pesquisa").innerHTML = `<div class = "item-resltado"> 
<h2>O(a) Herói: ${nome} está no Nível: ${nivel}<h2></div>`
}