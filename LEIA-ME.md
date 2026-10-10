# PROTOCOLO LÁZARO — Portal interno ficcional

## O que é
Um site estático de investigação em português, responsivo para celular, com estética de intranet de uma agência governamental secreta fictícia: **Núcleo Lázaro — Coordenação de Incidentes Não Catalogados**.

Tudo é ficção. Não representa uma agência real nem acessa sistemas governamentais. O terminal, os filtros e a validação do Protocolo 0 funcionam no próprio navegador; nenhum dado é enviado.

## Como abrir no celular
1. Extraia o ZIP.
2. Abra `index.html` no navegador ou use um editor/servidor local de HTML.
3. Se o gerenciador de arquivos não abrir HTML corretamente, importe a pasta no Spck Editor e use Preview.

## Fluxo de investigação sugerido
1. Leia `index.html`.
2. Abra os três casos: `dossie-l09.html`, `dossie-17.html` e `dossie-1998.html`.
3. Leia `memorando.html` para entender a conexão entre os registros.
4. Em `terminal.html`, teste `HELP`, `LIST`, `OPEN L-09`, `DECRYPT CANAL7`, `DECRYPT 0317` e `DECRYPT L0917`.
5. Em `protocolo.html`, selecione exatamente L-09, 17-04 e 98-C para desbloquear o fragmento.
6. Abra o `Registro de Origem`.

## Publicar na internet com GitHub Pages
1. Entre no GitHub e crie um repositório novo (público, por exemplo `protocolo-lazaro`).
2. Envie **o conteúdo desta pasta** para a raiz do repositório. O `index.html` precisa ficar na raiz.
3. Abra **Settings → Pages**.
4. Em Build and deployment, selecione **Deploy from a branch**, escolha `main` e `/ (root)`, e salve.
5. Aguarde a publicação e abra a URL mostrada na própria página de Pages.

Os nomes dos menus podem mudar conforme a interface do GitHub. Este pacote não foi publicado automaticamente; você controla a publicação e o endereço.

## Arquivos principais
- `index.html` — painel
- `dossies.html` — catálogo com busca
- `dossie-l09.html` — corredor ausente da planta
- `dossie-17.html` — transcrição do Canal 7
- `dossie-1998.html` — cidade esquecida
- `memorando.html` — conexão central
- `terminal.html` — terminal com comandos locais
- `protocolo.html` — puzzle de referências cruzadas
- `origem.html` — fragmento final
- `departamentos.html` — identidade e estrutura da agência
- `sobre.html` — nota de ficção e instruções

## Personalização
Edite os HTML para mudar pistas e documentos; `style.css` controla o visual; `app.js` controla o relógio, busca e terminal.
