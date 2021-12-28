import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Mask } from 'src/app/shared/enums/mask';

import { Clientes } from './../../shared/model/clientes';
import { CsErrorStateMatcher } from './../../shared/shared-components/error-state-matcher';

@Component({
  selector: 'cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {

  @Input() clienteSelecionado!: Clientes;
  @Input() editar: boolean = false;
  @Output() fechar = new EventEmitter<boolean>();

  form!: FormGroup;
  control!: FormControl;
  matcher = new CsErrorStateMatcher();
  mask = Mask;

  constructor(private formBuilder: FormBuilder,
    private chRef: ChangeDetectorRef) {
    this.inicializarForm();

  }

  ngOnInit(): void {
    if (this.editar) {
      this.form.reset();
      if (this.clienteSelecionado !== undefined || this.clienteSelecionado !== null) {
        this.form.setValue(this.clienteSelecionado);
      }
    }
  }

  fecharJanela(){
    this.fechar.emit(false);
  }

  ngAfterViewInit(): void {
  }

  ngOnChanges() {

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

  private inicializarForm() {
    this.form = this.formBuilder.group({
      id: [null],
      tipoPessoa: [""],
      cpfcnpj: [],

      nome: [null,[Validators.required]],
      dataNasc: [""],
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
      console.log( this.form);
      this.form.disable();
    }else{
      console.log('invalido');
      console.log(this.form.hasError('required'));
      console.log(this.form.value);

    }

  }

}
