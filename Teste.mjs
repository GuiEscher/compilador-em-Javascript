import {SymbolTable} from "./SymbolTable.mjs";

let symboltable = new SymbolTable();

symboltable.insertVar('x', 'int');
symboltable.insertVar('y', 'float');
symboltable.insertVar('z', 'string');

// Remova uma variável
symboltable.RemoveVar('y');

// Busque uma variável
let variable = symboltable.BuscaVar('x');
console.log(variable);

// Exiba a lista de variáveis
symboltable.exibirLista(symboltable.variaveis);