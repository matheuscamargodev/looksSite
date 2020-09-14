import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Produtos } from '../database/produtos';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  produto: any = {};
  produtos: any = Produtos;
  constructor(private route: ActivatedRoute, private api:ApiService) { }

  ngOnInit() {
    //recebe id de parametro e carrega pagina de detalhes com informacoes atualizadas

    let id = this.route.snapshot.paramMap.get('id');

    this.produto = this.produtos.filter((produto) => {
      return produto.id == id;
    })
    this.produto = this.produto[0];
    this.produto.arr_imagens = [];

    for (let img of this.produto.imagens) {
      this.produto.arr_imagens.push(img.image);
    }

    this.calculaMedias(this.produto);
  }

  calculaMedias(prod) {
    //calcula medias
    prod.notas_separadas = [];
    for (let nota of prod.notas) {
      prod.notas_separadas.push(nota.nota);
    }
    this.api.calculaMedias(prod.notas_separadas).then((data) => {
      prod.notaCalculada = data;
    })
  }

}
