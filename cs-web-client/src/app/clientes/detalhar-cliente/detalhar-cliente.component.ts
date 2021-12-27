import { Clientes } from './../../shared/model/clientes';
import { Component, ElementRef, OnInit, ViewChild, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Mask } from 'src/app/shared/enums/mask';

import { CsErrorStateMatcher } from './../../shared/shared-components/error-state-matcher';

@Component({
  selector: 'detalhar-cliente',
  templateUrl: './detalhar-cliente.component.html',
  styleUrls: ['./detalhar-cliente.component.scss']
})
export class DetalharClienteComponent implements OnInit {

  @Input() clienteSelecionado!: Clientes;
  @Output() fechar = new EventEmitter<boolean>();

  form!: FormGroup;
  control!: FormControl;
  matcher = new CsErrorStateMatcher();
  mask = Mask;

  constructor(private formBuilder: FormBuilder,
    private chRef: ChangeDetectorRef) {
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
  ngAfterViewInit(): void {
  }

  ngOnChanges() {
    this.form.reset();
    this.form.disable();
    if (this.clienteSelecionado !== undefined || this.clienteSelecionado !== null) {
      this.form.setValue(this.clienteSelecionado);
    }
  }

  fecharJanela(){
    this.fechar.emit(false);
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

}
