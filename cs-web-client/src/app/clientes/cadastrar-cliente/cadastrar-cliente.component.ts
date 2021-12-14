import { CsErrorStateMatcher } from './../../shared/shared-components/error-state-matcher';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Mask } from 'src/app/shared/enums/mask';

@Component({
  selector: 'cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {

  form!: FormGroup;
  control!: FormControl;
  matcher = new CsErrorStateMatcher();
  mask = Mask;

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

      nome: [null,[Validators.required]],
      dataNasc: [null],
      sexo: [""],
      estadoCivil: [""],

      tipoDocumento: [""],
      numeroDocumento: [null],
      emissor: [null],
      dataEmissao: [null],

      profissao: [null],
      numCnh: [null],
      tipoCnh: [null],

      cepResidencial: [null],
      endResidencial: [null],
      numResidencial: [null],

      complementoResidencial: [null],
      bairroResidencial: [null],

      ufResidencial: [null],
      cidadeResidencial: [null],

      //informacoes adicionais

      cepComercial: [null],
      endComercial: [null],

      numComercial: [null],
      complementoComercial: [null],

      bairroComercial: [null],
      ufComercial: [null],
      cidadeComercial: [null],

      email: [null,[Validators.email]],
      fone1: [null],
      fone2: [null],
      observacao: [null]

    });

  }

  salvarCliente(){

    if(this.form.valid){
      console.log('VALIDO');
    }else{
      console.log('invalido');
      console.log(this.form.hasError('required'));
      console.log(this.form.value);
    }

  }

}
