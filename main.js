const {readFileSync} = require('fs');
const {regras} = require('./regras');

String.prototype.checkRule = function(rule){
    return this.match(rule.regra) ? rule.significado(this) : null;
}

function main(path){
    let file = readFileSync(path, 'utf8')
            .split('\n');

    let sirplusplus = "";
    let current = "";


    // Para cada linha do código em sir++, deve-se testar 
    // se a linha bate com alguma regra em regras.js
    for(line of file){
        for(rule of regras){
            current = line.checkRule(rule);
            // Se deu algum match, coloca no código final
            if(current){
                sirplusplus += current;
            }
        } 
    }

    sirplusplus += '\n}'
    // Eval torna o código válido pelo js
    eval(sirplusplus);

    // Então preambulo pode ser chamado
    preambulo();
}


main('./codigo.sir');


