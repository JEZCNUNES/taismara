# Site da Enfª Taís Mara

O site usa HTML, CSS e JavaScript estáticos. Os arquivos da raiz já são a versão de publicação.

## Publicar no GitHub Pages

1. Envie o conteúdo da pasta **github pronto** para a raiz da branch `main` de um repositório. Se estiver usando o ZIP, extraia-o primeiro. Inclua o arquivo oculto `.nojekyll` junto de `index.html` e da pasta `assets`.
2. No GitHub, abra **Settings → Pages**. Em **Source**, selecione **Deploy from a branch**.
3. Selecione **main** e **/ (root)**, salve e aguarde a URL aparecer na seção **Pages**.

A URL de um site de projeto costuma seguir o formato `https://USUARIO.github.io/REPOSITORIO/`. A página da bio fica em `links.html` dentro desse endereço.

## Prévia local

Execute `python -m http.server 4173 --bind 127.0.0.1` na pasta que contém o `index.html` e abra `http://localhost:4173/`.

As opções do Energia 40+ ficam em `config.js`. Com checkout e vídeo vazios, a página mantém o contato por WhatsApp e a mensagem de vídeo em breve. A configuração faz parte do site público e deve conter apenas dados destinados à publicação.
