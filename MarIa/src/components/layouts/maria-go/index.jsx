import './style.css';
import mobile from "../../../assets/images/celular-mobile.svg"
import logo from "../../../assets/images/logo-marIA-GO.svg"

export const MariaGo = () => {
    return (

        <main className='background-gradient'>
            <section className='section-go'>
                <img src={mobile} alt="" />
                <article className='wrapper-description'>
                    <img src={logo} alt="" />
                    <div className='description'>
                        <p>  Sabe aquele móvel velho ou entulho que você não sabe como descartar? A marIA GO simplifica tudo para você. Com apenas o seu CEP, nossa inteligência localiza os pontos de descarte e os horários dos catabagulhos mais próximos da sua casa.</p>
                        <button>Saiba Mais →</button>
                    </div>
                </article>
            </section>
        </main>
    )
}