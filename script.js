const API_KEY = "SUA_API_KEY";

function mostrarSecao(secao){
document.getElementById('brasileirao').style.display='none';
document.getElementById('libertadores').style.display='none';
document.getElementById(secao).style.display='block';
}

async function carregarTabelaBrasileirao(){

document.getElementById('conteudo-brasileirao').innerHTML =
"<p>Carregando tabela...</p>";

// Trocar pela API real

document.getElementById('conteudo-brasileirao').innerHTML = `

  <table>
    <tr>
      <th>Pos</th>
      <th>Time</th>
      <th>Pts</th>
    </tr>
  </table>`;
}

async function carregarJogosBrasileirao(){

document.getElementById('conteudo-brasileirao').innerHTML =
"<p>Carregando partidas...</p>";
}

async function carregarTabelaLibertadores(){

document.getElementById('conteudo-libertadores').innerHTML =
"<p>Carregando tabela...</p>";
}

async function carregarJogosLibertadores(){

document.getElementById('conteudo-libertadores').innerHTML =
"<p>Carregando partidas...</p>";
}

async function atualizarTudo(){
await carregarTabelaBrasileirao();
await carregarTabelaLibertadores();
}

window.onload = atualizarTudo;

setInterval(atualizarTudo,30000);
