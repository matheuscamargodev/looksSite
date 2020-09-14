import { Component, OnInit } from '@angular/core';
import { Produtos } from '../database/produtos';
import { Precos } from '../database/precos';
import { Categorias } from '../database/categorias';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	produtos: any = Produtos;
	precos: any = Precos;
	categorias: any = Categorias;
	produtos_b: any = Produtos;
	filtro: any = {};

	constructor(public api: ApiService, private router: Router) {
		this.filtro.disponivel = false;
		this.filtro.preco = 0;
		this.filtro.categoria = 0;
	}

	ngOnInit() {
		this.prepareProdutos();
	}

	prepareProdutos() {
		//configura algumas informacoes sobre cada produto como medias de notas e imagens
		for (let prod of this.produtos) {
			prod.notas_separadas = [];
			prod.imagem_destacada = prod.imagens.filter((imagem) => {
				return imagem.destacada;
			});
			for (let nota of prod.notas) {
				prod.notas_separadas.push(nota.nota);
			}
			this.api.calculaMedias(prod.notas_separadas).then((data) => {
				prod.notaCalculada = data;
			})
		}
	}

	filtrar() {
		//filtra os produtos pelas opcoes disponiveis
		this.produtos = this.produtos_b.filter((produto) => {
			if (this.filtro.disponivel && !produto.disponivel) return false;
			if (this.filtro.categoria && produto.categoria != this.filtro.categoria) return false;
			if (this.filtro.preco && produto.precoMedio != this.filtro.preco) return false;
			return true;
		});
	}

	arrayOne(n: number): any[] {
		return Array(n);
	}

	verDetalhes(produto) {
		//acessa pagina detalhes
			this.router.navigate(['detalhes', produto.id]);
		
	}

	resetar() {
		//reseta filtro
		this.produtos = this.produtos_b;
		this.filtro.disponivel = false;
		this.filtro.preco = 0;
		this.filtro.categoria = 0;
	}
}
