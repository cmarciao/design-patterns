# Decorator

## Intenção oficial

Agregar responsabilidade adicionais a um objeto dinamicamente. Os decorators
fornecem uma altrnativa flexível ao uso de subclasses para extensão de
funcionalidades.

## Sobre o Decorator

1. Usa a composição ao invés de herança.
2. Parece com o Composite, mas tem a intenção diferente.
3. Adiciona funcionalidades a objetos em tempo de execução.
4. Executa ações antes e depois das chamadas dos métodos do objeto decorado.
5. Pode manipular dados antes do retorno.

## Aplicabilidade

Podemos usar o Decorator quando:

1. Precisamos adicionar funcionalidades em objetos sem quebrar ou alterar o código existente.
2. Queremos usar composição ao invés de herança.
3. Quando pode explodir o número de subclasses de uma estrutura.

## Consequências

| Bom                                      | Ruim                               |
|------------------------------------------|------------------------------------|
| Composição é melhor que herança          | Quanto mais camadas, mais complexo |
| Fácil alterar o comportamento de objetos |                                    |
| É possível decorar objetos decorados     |                                    |
