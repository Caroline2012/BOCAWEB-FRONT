export const Lista = ({listaodas}) => {
    return (
      <div>
        <p className="busca"> {listaodas.length} cadastros  </p>
        <div className = 'listaodas'>
          {listaodas.map (oda => (
            <div key={oda._id} className='lista-content'>
              <h1>Nome: {oda.nome} </h1>
              <h2> Usuário: {oda.usuario} </h2>
              <p> <b>Descricao: </b> {oda.descricao} </p>
              <p> <b>Data da inclusão: </b>{oda.data_inclusao} </p>
              <p> <b>Palavras chave: </b> {oda.palavras_chave} </p>
            </div>
          ))}
        </div>
      </div>
    )
}