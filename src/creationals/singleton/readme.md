# Singleton

## Intenção Oficial

Garantir que uma classe tenha somente uma instância no programa e fornecer um
ponto de acesso global para a mesma.

## Somente uma instância?

Geralmente usado para acesso de recursos compartilhados, como acesso à base de
dados, sistema de logs, variáveis globais.

## Ponto de acesso global?

Você pode permitir acesso global de um recurso em toda a sua aplicação, podendo
proteger a instância com encapsulamento, evitando que ela seja sobrescrevida.

## Aplicabilidade

1. Use o Singleton se a classe precisa ter apenas uma única instância em todo o
programa.
2. Use o Singleton se perceber que variávaies globais estão sendo usadas para
manter partes importantes do programa, como variáveis de configuração que podem
ser usadas em toda a aplicação.

## Consequências

| Bom                                                    | Ruim                                                  |
|--------------------------------------------------------|-------------------------------------------------------|
| Acesso controlado à instância única                    | É mais difícil de testar                              |
| Fácil permitir número maior de instâncias caso precise | Viola o princípio de responsabilidade única           |
| Usa lazy instantiation, só é criado no momento do uso  | Requer tratamento especial em caso de concorrência    |
| Substitui variáveis globais                            | O autor do livro GoF disse que removeria o Slingleton |
