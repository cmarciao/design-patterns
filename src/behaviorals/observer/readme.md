# Observer

## Intenção Oficial

Define uma dependência para um para muitos entre objetos, de modo que, quando
um objeto muda de estado, todos os seus dependentes são automaticamente
notificados e atualizados.

## Sobre o Observer

1. Implementado com dois tipos de objetos:
    - **Observable** - Objetos Observáveis.
    - **Observer** - Objetos Observadores.
2. Objetos observáveis (Observable) têm uma referência para todos os seus
observadores. Isso torna possíveç adicionar, remover e notificar todos os
observadores quando o seu estado muda.
3. Objetos observadores (Observer) devem ter meios de receber notificações de
seus Observáveis. Geralmente isso é feito com apenas um método.

## Aplicabilidade

Podemos usar o Observer quando:

1. Precisamos notificar vários objetos sobre a mudança de estado de outro(s)
objeto(s).

## Consequências

| Bom                                                       | Ruim                                                     |
|-----------------------------------------------------------|----------------------------------------------------------|
| Usa o SRP e o OCP do SOLID                                | Pode ser complexo manter a ordem de envio de notificação |
| Facilita a comunicação entre objetos em tempo de execução |                                                          |
