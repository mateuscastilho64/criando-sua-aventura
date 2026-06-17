// Espera todo o documento HTML carregar antes de executar
document.addEventListener("DOMContentLoaded", () => {

    // --- REQUISITO 1: MECANISMO DE ALTERAÇÃO DE TEMA (MODO ESCURO) ---
    const btnTema = document.getElementById("btn-tema");
    
    btnTema.addEventListener("click", () => {
        // Liga/Desliga a classe .dark-mode no body
        document.body.classList.toggle("dark-mode");
        
        // Altera o texto do botão de forma dinâmica
        if (document.body.classList.contains("dark-mode")) {
            btnTema.textContent = "Alternar Modo Claro";
        } else {
            btnTema.textContent = "Alternar Modo Escuro";
        }
    });

    // --- REQUISITO 2: MANIPULAÇÃO DINÂMICA DO DOM (SIMULADOR) ---
    const botoesSimulador = document.querySelectorAll(".btn-simula");
    const painelResultado = document.getElementById("resultado-painel");
    const tituloResultado = document.getElementById("resultado-titulo");
    const textoResultado = document.getElementById("resultado-texto");

    botoesSimulador.forEach(botao => {
        botao.addEventListener("click", () => {
            // Remove a classe escondido para exibir o painel na tela
            painelResultado.classList.remove("escondido");
            
            // Pega o tipo de impacto guardado no atributo HTML "data-impacto"
            const tipoImpacto = botao.getAttribute("data-impacto");

            // Limpa as classes de estilo anteriores
            painelResultado.className = ""; 

            // Estrutura condicional para processar a escolha do usuário
            if (tipoImpacto === "sustentavel") {
                painelResultado.classList.add("sucesso");
                tituloResultado.textContent = "🌱 Resultado: Excelente Equilíbrio!";
                textoResultado.textContent = "O controle biológico elimina pragas usando predadores naturais. Isso protege a saúde dos consumidores, não polui a água e mantém a produção forte e valorizada pelo mercado internacional.";
            } 
            else if (tipoImpacto === "agrotoxico") {
                painelResultado.classList.add("perigo");
                tituloResultado.textContent = "⚠️ Resultado: Alerta de Desequilíbrio!";
                textoResultado.textContent = "O uso abusivo de químicos causa resistência nas pragas, contamina os lençóis freáticos e empobrece o solo a longo prazo. A produção pode subir temporariamente, mas destrói o futuro sustentável da fazenda.";
            } 
            else if (tipoImpacto === "tecnologia") {
                painelResultado.classList.add("sucesso");
                tituloResultado.textContent = "💧 Resultado: Alta Eficiência Tecnológica!";
                textoResultado.textContent = "A irrigação automatizada de precisão economiza até 60% de água. Você produz o dobro gastando metade dos recursos naturais, unindo perfeitamente engenharia, tecnologia e preservação.";
            }
        });
    });
});
