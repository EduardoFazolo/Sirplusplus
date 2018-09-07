module.exports.regras = [
    {"regra": /Preâmbulo./,
    "significado": () => "var preambulo = function(){\n"},
    {"regra": /[\s\s]*Declarar\s([\d\w]+)\scomo:\s(?:(?=\d+)(\d+)|\"(.*)\")\./,
        "significado": function(valor){
            let currMatch = valor.match(this.regra);
            if(currMatch[2] == undefined){
                return `\n var ${currMatch[1]} = \"${currMatch[3]}\";`;
            }else{
                return `\nvar ${currMatch[1]} = ${currMatch[2]};`;
            }
        }
    },
    {"regra": /[\s\t]{0,}Ortografe\sna\stela:\s(.*)\"(.*)\"\./,
        "significado": function(valor){
            let match = valor.match(this.regra);
            return `\n\tconsole.log(\"${match[1]}\" + ${match[2]});`
        }
    }
]