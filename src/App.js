import './App.css';
import {Component} from 'react';
import {Busca} from './components/Busca';
import {Cabecalho} from './components/Cabecalho';
import {Lista} from './components/Lista';
import {Rodape} from './components/Rodape';

class App extends Component{
  state = {
    busca: '',
    odas: []
  }


  componentDidMount() {
    this.carregaODAs();
  }

  carregaODAs (){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome=' +busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const{busca, odas} = this.state;

    return (
      <section className="container">
        <div className='cabecalho'>
          <Cabecalho 
          />
        </div>

        <div className='busca'>
          <Busca
            busca={this.state.busca}
            buscaODA={this.buscaODA}          
          />
        </div>

        <div className = 'lista'>
            <Lista
              listaodas={odas}
            />
        </div>

        <div className='rodape'>
          <Rodape
          />
        </div>
      </section>
    );
  }
}

export default App;

