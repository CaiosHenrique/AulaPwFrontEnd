import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  /*/nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;*/
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = false;
   nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  foto: string = 'assets/img/sapo_azul_de_pintas_pretas.png'
  dataValidade ='2021-12-31'


  constructor() {
    /*console.log('Nome do Produto: ', this.nomeProduto);
    console.log(this.anuncio + 'está em promoção');
    console.log(this.anuncio);
    console.log('Id do Produto:', this.idProduto);
    console.log('Preço do Produto: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);*/

    var idade = 10;
    console.log('Minha idade é:', idade);

    /*let idade = 10;
    console.log ('Minha idade é:', idade)*/

    /*function imprimeIdade() {
      var idade = 20;
      console.log('Minha idade é:', idade)
    }

    imprimeIdade()*/

    /*function imprimeIdade()
    {
      for (var idade = 30; idade <= 40; idade++)
      {console.log('Idade dentro do for:', idade)}
      console.log('Idade fora do for:', idade)
    }

    imprimeIdade()*/

    /*function imprimeIdade()
    {
      for (let idade = 30; idade <= 40; idade++)
      {console.log('Idade dentro do for:', idade)}
      console.log('Idade fora do for:', idade)
    }*/

    /*var variavel = 0;
    var variavel= 10;
    console.log('variável', variavel);
    function funcao()
    {
      var outra_variavel = 20;
      var outra_variavel = 30;
      console.log('outra variável:', outra_variavel);
    }
    funcao();*/

    /*var a = 10;
    let b = 20;
    function bar()
    {
      var a = 30;
      let b = 40;
      if(true)
      {
        var a = 50;
        let b = 60;
        console.log('Variável a dentro do if', a);
        console.log('Variável b dentro do if', b);
      }
      console.log('Variável a dentro da função', a);
      console.log('Variável b dentro da função', b);
    }
    bar();
    console.log('Variável a fora da função', a);
    console.log('Variável b fora da função', b);*/

    /* let a = 1;
    function bar()
    {
      console.log('Variável a: ', a);
      let b = 2;
      if(true)
      {
        let c = 3;
        let a = 4;
        console.log('Variável a dentro do if: ', a);
        console.log('Variável b dentro do if: ', b);
        console.log('Variável c dentro do if: ', c);
      }
      console.log('Variável a fora do if: ', a);
      console.log('Variável b fora do if: ', b);
      console.log(c);
    }
    bar();*/

    var a = 5;
    var b = 10;
    if ((a = 5)) {
      let a = 4;
      var b = 1;
      console.log('Variavel a dentro do if: ', a);
      console.log('Variavel b dentro do if: ', b);
    }
    console.log('Variavel a fora do if: ', a);
    console.log('Variavel a fora do if: ', b);
  }

  ngOnInit(): void {}
}
