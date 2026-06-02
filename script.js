// Função para buscar dados em tempo real
async function fetchData() {
    console.log("Buscando dados do exato momento solicitado...");
    
    // Mostra mensagem de carregando enquanto busca os dados mais recentes de 2026
    document.getElementById('tabela-body').innerHTML = `<tr><td colspan="8">Atualizando dados ao vivo...</td></tr>`;

    // Simulando a requisição direta de API para o ano corrente (2026)
    // Para usar dados 100% reais de produção, substitua este bloco por uma chamada fetch() da sua API escolhida
    try {
        const dadosTabelaMock = [
            { pos: 1, time: "Palmeiras", p: 41, j: 18, v: 12, e: 5, d: 1, sg: 17 },
            { pos: 2, time: "Flamengo", p: 34, j: 17, v: 10, e: 4, d: 3, sg: 15 },
            { pos: 3, time: "Fluminense", p: 31, j: 18, v: 9, e: 4, d: 5, sg: 5 },
            { pos: 4, time: "Athletico-PR", p: 30, j: 18, v: 9, e: 3, d: 6, sg: 6 },
            { pos: 5, time: "Red Bull Bragantino", p: 29, j: 18, v: 9, e: 2, d: 7, sg: 6 },
            { pos: 6, time: "Bahia", p: 26, j: 17, v: 7, e: 5, d: 5, sg: 2 },
            { pos: 7, time: "São Paulo", p: 25, j: 18, v: 7, e: 4, d: 7, sg: 3 },
            { pos: 8, time: "Atlético-MG", p: 24, j: 18, v: 7, e: 3, d: 8, sg: -1 },
            { pos: 9, time: "Corinthians", p: 24, j: 18, v: 6, e: 6, d: 6, sg: -1 },
            { pos: 10, time: "Botafogo", p: 22, j: 17, v: 6, e: 4, d: 7, sg: 0 }
        ];

        const dadosJogosMock = [
            { comp: "Libertadores", badge: "bg-lib", timeA: "Flamengo", timeB: "River Plate", data: "Hoje • 21:30" },
            { comp: "Brasileirão", badge: "bg-br", timeA: "Palmeiras", timeB: "São Paulo", data: "Quinta • 20:00" },
            { comp: "Sudamericana", badge: "bg-sud", timeA: "Botafogo", timeB: "Racing", data: "Próxima Terça • 19:00" },
            { comp: "Libertadores", badge: "bg-lib", timeA: "Atlético-MG", timeB: "Peñarol", data: "Próxima Quarta • 21:45" },
            { comp: "Brasileirão", badge: "bg-br", timeA: "Corinthians", timeB: "Fluminense", data: "Próximo Domingo • 16:00" }
        ];

        // Renderizando a tabela dinamicamente
        const tbody = document.getElementById('tabela-body');
        tbody.innerHTML = dadosTabelaMock.map(t => `
            <tr>
                <td><strong>${t.pos}º</strong></td>
                <td>${t.time}</td>
                <td><strong>${t.p}</strong></td>
                <td>${t.j}</td>
                <td>${t.v}</td>
                <td>${t.e}</td>
                <td>${t.d}</td>
                <td>${t.sg}</td>
            </tr>
        `).join('');

        // Renderizando os jogos filtrados (apenas com a presença de brasileiros)
        const jogosContainer = document.getElementById('jogos-container');
        jogosContainer.innerHTML = dadosJogosMock.map(j => `
            <div class="game-item">
                <div>
                    <span class="badge-comp ${j.badge}">${j.comp}</span>
                    <strong style="margin-left: 10px;">${j.timeA} × ${j.timeB}</strong>
                </div>
                <div class="time-info">${j.data}</div>
            </div>
        `).join('');

    } catch (error) {
        console.error("Erro ao buscar dados atualizados:", error);
    }
}

// Controla a troca de abas (Tabela x Jogos)
function switchTab(tab) {
    const btnTabela = document.getElementById('btn-tabela');
    const btnJogos = document.getElementById('btn-jogos');
    const secTabela = document.getElementById('sec-tabela');
    const secJogos = document.getElementById('sec-jogos');

    if(tab === 'tabela') {
        secTabela.style.display = 'block';
        secJogos.style.display = 'none';
        btnTabela.classList.add('active');
        btnJogos.classList.remove('active');
    } else {
        secTabela.style.display = 'none';
        secJogos.style.display = 'block';
        btnTabela.classList.remove('active');
        btnJogos.classList.add('active');
    }
}

// Executa a busca automática assim que a página abre
window.onload = fetchData;
