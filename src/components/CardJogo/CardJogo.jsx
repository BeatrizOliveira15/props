import './CardJogo.css'

function CardJogo({ imagem, titulo, genero, preco, onSale }) {
    const statusTexto = onSale ? '✅ PROMOÇÃO' : '❌ NÃO ESTÁ EM PROMOÇÃO'

    return (
        <section className="card-jogo">
            <img src={imagem} alt className='card-imagem'/>
            <h2>{titulo}</h2>
            <p>Gênero: {genero}</p>
            <p>
        R${preco.toFixed(2)} 
        <span className={`status-dot ${onSale ? 'onSale' : 'notOnSale'}`} />
      </p>
            <small>{statusTexto}</small>
        </section>
    )
}

export default CardJogo
