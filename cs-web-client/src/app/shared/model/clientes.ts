export interface Clientes {

  id: string,
  tipoPessoa:string,
  cpfcnpj: string,
  nome: string,
  dataNasc: string,
  sexo: string,
  estadoCivil: string,
  tipoDocumento: string,
  numeroDocumento: string,
  emissor: string,
  dataEmissao: string,
  profissao: string,
  numCnh: string,
  tipoCnh: string,
  cepResidencial: string,
  endResidencial: string,
  numResidencial: string,
  complementoResidencial: string,
  bairroResidencial: string,
  ufResidencial: string,
  cidadeResidencial: string,

  //informacoes adicionais

  cepComercial: string,
  endComercial: string,
  numComercial: string,
  complementoComercial: string,
  bairroComercial: string,
  ufComercial: string,
  cidadeComercial: string,
  email: string,
  fone1: string,
  fone2: string,
  observacao: string
}
