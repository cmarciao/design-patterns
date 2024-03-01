# Strategy

## Intenção Oficial

Definir uma família de algoritmos, encapsular cada um deles e fazê-los
intercambiáveis. O strategy permite que o algoritmo varie independentemente
dos clientes que o utilizam.

Visa separar a regra de negócio dos algoritmos dessa regra de negócio, assim
podemos criar uma família de algoritmos caso precisamos de variações deste
algoritmo.

## Sobre o Strategy

1. Separa a regra de negócio de variações de algoritmos que possam existir.
2. Define uma família de algoritmos cada uma com uma variação diferente.
3. Usa composição para permitir a troca de algoritmos em tepo de execução.
4. Permite a criação de vários algoritmos sem a necessidade de condicionais.

## Aplicabilidade

Podemos usar o strategy quando:

1. Tivermos variantes de um mesmo algoritmo e precisamos trocar esses algoritmos
 em tempo de execução.
2. Precisarmos isolar a regra de negócio do algoritmo que deve ser aplicado
(S do SOLID).
3. Percebermos que estamos usando condicionais apenas para trocar o resultado
final de um algoritmo.

## Consequências

| Bom                                               | Ruim                                                                            |
|---------------------------------------------------|---------------------------------------------------------------------------------|
| Troca heranã por composição                       | Pode ser complexo criar uma hierarquia de classes para aplicar novos algoritmos |
| Separa a regra de negócio de algoritmos complexos | Obtemos resultados iguais com funções se a linguagem permitir                   |
| Aplica os princípios do O e do S do SOLID         | O código cliente precisa conhecer as estraégias que vai usar                    |
