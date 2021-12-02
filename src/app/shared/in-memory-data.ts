import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryData implements InMemoryDbService {
  // tslint:disable-next-line: typedef
  createDb() {
    const produtos = [
      {
        id: '1',
        nome: 'Hambúrguer',
        descricao: 'Pão, bife de hambúrguer',
        preco: '8.50',
      },
      { id: '2', nome: 'Salada', descricao: 'alface e frango', preco: '10.00' },
    ];
    return { produtos };
  }
}
