const readlineSync = require('readline-sync')
const Cidade = require('./cidade_class')

console.log('===============================================')
console.log('  Dados da cidade e População');
console.log('===============================================')

let nome = readlineSync. question('Digite o nome da cidade: ')
let estado = readlineSync.question('Digite o nome da estado: ')
let numPopulacao = readlineSync.question('Digite o numero de habitantes:')
let numHomens = readlineSync.question('Digite o numero de homens da cidade:')
let numMulheres = readlineSync.question('Digite numero de mulherers da cidade: ')

const cidade1 = new Cidade(nome,estado,numPopulacao,numHomens,numMulheres)

let homensPercentual = cidade1.percentualHomens()
let mulherersPercentual = cidade1.percentualMulheres()

console.log('===========================================')
console.log(' Resultado da cidade ')
console.log('===========================================')
console.log(`O percentual de homens é ${homensPercentual}% de ${numPopulacao} habitantes`)
console.log(`O percentual de mulheres é ${mulherersPercentual}% de ${numPopulacao} habitantes`)
console.log('======================================================')


