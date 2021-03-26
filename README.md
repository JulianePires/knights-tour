<div align="center" id="top"> 
  &#xa0;
</div>

<h1 align="center">Passeio do Cavalo</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/JulianePires/knights-tour?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/JulianePires/knights-tour?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JulianePires/knights-tour?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/JulianePires/knights-tour?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/JulianePires/knights-tour?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/JulianePires/knights-tour?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/JulianePires/knights-tour?color=56BEB8" />
</p>

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/JulianePires/knights-tour

# Access
$ cd knights-tour

# Install dependencies
$ npm

# Run the project
$ npm start

# Starts without livereload
$ npm live

# The server will initialize in the <http://localhost:8000>
```

## :rocket: Technologies ##

- [CSS3](https://www.w3schools.com/css/)
- [Nodejs](https://nodejs.org/en/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5)

### Log Book

--> Construir o algoritmo de backtracking para resolver o problema do passeio do cavalo foi um dos maiores desafios que tive até hoje, e eu sou fascinada por desafios.
--> Já tinha visto esse tipo de algoritmo anteriormente na faculdade, porém, só havia utilizado para construir o solucionador de sudoku, é realmente muito interessante essa logística de tentar todos os movimentos possíveis até que se encontre uma resposta, é quase como termos o raciocínio de um jogador de xadrez.
--> Outro ponto interessante foi o uso de estrutura de dados como matrizes, que inclusive tem de ser implementada como um array de arrays por não possuir estrutura prévia no javascript.
--> Confesso que fugi um pouco do que o desafio pedia e implementei uma interface interativa com um servidor nodemon com livereload, onde o usuário escolhe a casa inicial no próprio tabuleiro e então o algoritmo é executado com os backlogs impressos no console e as coordenadas no textarea.
--> Utilizei também o jQuery para implementação do algoritmo e na construção do tabuleiro.
--> A heurística de Warnsdorff foi utilizada para auxiliar na resolução do problema, por essa regra, as casas ainda não visitadas que são atingíveis da casa atual do cavalo são avaliadas segundo a quantidade de casas não visitadas que poderão ser atingidas, no passo seguinte, a partir de cada uma delas. É escolhida, então, aquela que minimizar essa quantidade.
--> O report do Harvest está incluso neste repositório.