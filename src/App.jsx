import './App.css'
import CardJogo from './components/CardJogo/CardJogo'
import image1 from './assets/img/image1.jfif'
import image2 from './assets/img/image2.png'
import image3 from './assets/img/image3.jpg'
import image4 from './assets/img/image4.jpg'

function App() {
  return (
    <main className='app'>

    <CardJogo
    imagem={image1}
    titulo="Valorant"
    genero="Shooter de heróis"
    preco={75.9}
    onSale={true}
    />

    <CardJogo
    imagem={image2}
    titulo="Minecraft"
    genero="Sandbox (caixa de areia) e sobrevivência em 3D"
    preco={82.6}
    onSale={true}
    />

    <CardJogo
    imagem={image3}
    titulo="Elden Ring"
    genero="RPG de ação"
    preco={274.5}
    onSale={false}
    />

    <CardJogo
    imagem={image4}
    titulo="League of Legends"
    genero="Arena de Batalha Online Multijogador"
    preco={0}
    onSale={false}
    />

    </main>
  )
}

export default App
