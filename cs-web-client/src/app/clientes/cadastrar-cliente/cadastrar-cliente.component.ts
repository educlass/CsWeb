import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {

  form!: FormGroup;
  control!: FormControl;

  constructor(private formBuilder: FormBuilder) {
    this.inicializarForm();
   }

  itensPessoa:any[]= [
    {value: 'F', viewValue: 'Física'},
    {value: 'J', viewValue: 'Jurídica'}
  ]
  tipoSexo= [
    {value: 'M', viewValue: 'Masculino'},
    {value: 'F', viewValue: 'Feminino'},
    {value: 'T', viewValue: 'Transexual'}
  ];
  tipoDocumentos = [
    {value: 'RG', viewValue: 'RG'},
    {value: 'RNE', viewValue: 'RNE'},
    {value: 'OUTROS', viewValue: 'OUTROS'}
  ];
  estadoCivil = [
    {value: '1', viewValue: 'Solteiro'},
    {value: '2', viewValue: 'Casado'},
    {value: '3', viewValue: 'Divorciado'},
    {value: '4', viewValue: 'Viúvo'}
  ];

  ngOnInit(): void {

  }

  private inicializarForm() {
    this.form = this.formBuilder.group({
      id: [null],
      tipoPessoa: [""],
      cpfcnpj: [],

      nome: [null],
      dataNasc: [null],
      sexo: [""],
      estadoCivil: [""],

      tipoDocumento: [""],
      numeroDocumento: [null],
      emissor: [null],
      dataEmissao: [null],

      cepResidencial: [null],
      endResidencial: [null],
      numResidencial: [null],

      complementoResidencial: [null],
      bairroResidencial: [null],

      ufResidencial: [null],
      cidadeResidencial: [null],

      //informacoes adicionais

      endComercial: [null],
      numComercial: [null],
      complementoComercial: [null],
      cidadeComercial: [null],
      bairroComercial: [null],
      cepComercial: [null],
      ufComercial: [null],
      email: [null],
      fone1: [null],
      fone2: [null],
      observacao: [null],

      //outras informacoes



      profissao: [null],
      numCnh: [null],

    });

  }

  salvarCliente(){
    console.log(this.form.value);
  }

}
