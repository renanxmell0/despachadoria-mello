# Ajustar opacidade da imagem de fundo do Hero

## Contexto
A imagem desfocada do carro/estrada ao fundo da seção Hero é controlada no arquivo `src/components/landing/Hero.tsx`, na linha do `<img>` (linha 15). O atributo responsável é a classe Tailwind `opacity-45`, que define 45% de opacidade. Há também um gradiente sobreposto (`bg-gradient-to-b ...`) que escurece a imagem.

## O que será alterado
- Trocar a classe `opacity-45` pelo valor de opacidade desejado (ex.: `opacity-30` para mais discreta, `opacity-60` para mais visível).
- Caso necessário, ajustar levemente o gradiente sobreposto para manter o contraste do texto.

## Arquivo
- `src/components/landing/Hero.tsx` (única linha alterada)

## Decisão pendente
Qual nível de opacidade você quer? (sugestões: `opacity-25` bem discreta, `opacity-35`, `opacity-50` atual ~, `opacity-65` mais visível)
