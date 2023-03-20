# test assets

Para rodar este teste siga os seguintes passos:

1- Abra um terminal e navegue até o diretório trading-aop
#  BUILD E RUN
2- com o docker instalado rode o comando:
   docker-compose up --build   

3- Você pode acessar a página pela url http://localhost:4200
# INFO MICROAPI
4- Para trazer os dados da api do yahoo, fiz uma pequena aplicação node que está nomeada como nodeapp


  # RODANDO FRONTEND SEM DOCKER
  a) tendo o nodejs instalado execute no terminal o seguinte comando:
     npm install -g @angular/cli@15.2.2
  b) pelo terminal vá até o diretório trading-aop/frontend e execute o seguinte comando:
     npm install
  c) pelo terminal, ainda dentro do diretório frontend execute o comando:
   ng serve
   - Você pode acessar a página pela url http://localhost:4200

   
  # RODANDO FRONTEND SEM DOCKER
    a) pelo terminal vá até o diretório trading-aop/nodeapp e execute o seguinte comando:
        npm install
    b) pelo terminal, ainda dentro do diretório nodeapp rode o comando nodemon ./index.js
    c) Exemplo de requisição http://localhost:3100/stock/GOOG
  