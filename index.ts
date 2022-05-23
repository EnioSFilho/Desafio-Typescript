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
  região: string,
}





interface Animais{
  nome: string,
  
}
interface peso{
  peso: number
}

const postAnimais = (): Omit<Animais, "peso">  => {
  return {
      nome: "João",
      peso: 80,
  }
}


interface Humano {
  nome:string
}

const postAnimais2 = (): Partial<Humano> => {
  return {
      nome: 'João',
  }
}



