*Caminho root http://localhost:8080/api*


*/weapon: Retorna uma lista de armas de dark souls*
    *Endereços: *
        /name?value=?: lista de armas filtrado por nome
        /atk/{tipo}?value=?: lista de armas com ataque maior do que o valor passado por parametro, de acordo com o tipo de dano(tipos possiveis: physical, magic,fire,lightning,bonus)
        /def/{tipo}?value=?: lista de armas com defesa maior do que o valor passado por parametro, de acordo com o tipo de dano(tipos possiveis: physical, magic,fire,lightning, stab)
        /effcts/{tipo}?value=?: lista de armas com efeito maior do que o valor passado por parametro, de acordo com o tipo de efeito(tipos possiveis: poison, bleed, divine, occult)
        /req/{atributo}?value=?: lista de armas com dano de atributo menor do que o valor passado por parametro, de acordo com o atributo(atributos: strength, dexterity, intelligence, faith)
        /scale/{atributo}?value=?: lista de armas com a classificação de escalonamento igual ao valor passado por parametro, de acordo com o atributo(atributos: strength, dexterity, intelligence, faith, classificações: S,A,B,C,D,E)
        /durability/?value=?: filtra as armas com a durabilidade maior do que valor passado por parametro
        /weight/?value=?: filtra as armas com a durabilidade menor do que valor passado por parametro
        /attackTypes/?value=?: filtra as armas com o tipo de ataque passado por parametro
        /obtained/?value=?: filtra as armas de acordo com a localização passada por parametro
        /aotaOnly: filtra as armas de ataque em area

        ?limit: define o limite do retorno passando um value
        ?order: vai ordenar a lista de acordo com o parametro indicado no value, se não for possivel vai ordenar pelo nome

        /random: Retorna uma arma aleatoria
