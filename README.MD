*Caminho root http://localhost:8080/api/weapon*

Retorna uma lista de armas de dark souls completa

*Parametros:*

       Nome do componente e valor a buscar, se o componente desejado for um objeto, então é nescessario informar o subcomponente
       Ex: /name?value=Dagger -> retorna todas as adagas, /atl/physical?value=100 -> retorna todas as armas com ataque fisico maior que 100
       Obs: Alguns componentes como aotaOnly não é nescessario informar valor.
       
*Filtros:*

       limit: define o limite do retorno passando um value
       order: vai ordenar a lista de acordo com o parametro indicado no value, se não for possivel vai ordenar pelo nome

*Outras rotas*

       /random: Retorna uma arma aleatoria
