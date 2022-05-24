const primeiroNome: string = "seu nome";
const diaDoMes: number = 12;
const hojeFezSol: boolean = true;


type Cachorrro = {
  nome: string,
  idade: number,
  raça: boolean,
  grandePorte: boolean,
  donos: string
}

interface Animais {
  tipo: string,
  bipede: boolean,
  asas: boolean,
  regiao: string,
  peso: string,
  nome: string,

}


const postAnimais = (): Omit<Animais, "tipo"> => {
  return {
    peso: " 80",
    nome: "João",
    asas: false,
    regiao: 'logo ali',
    bipede: true


  }
}

interface Humano {
  nome: string
}

const postAnimais2 = (): Partial<Humano> => {
  return {
    nome: 'João',
  }
}



