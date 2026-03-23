import './style.css';
import mobile from "../../../assets/images/celular-mobile.svg"
import logo from "../../../assets/images/logo-marIA-GO.svg"
import flores from "../../../assets/images/flores (2).svg"

export const MariaGo = () => {
    return (

        <main className='background-gradient'>
            <section className='section-go'>
                <img src={mobile} alt="" />
                <article className='wrapper-description'>
                    <img src={logo} alt="" />
                    <div className='description'>
                        <p>  Sabe aquele móvel velho ou entulho que você não sabe como descartar? A marIA GO simplifica tudo para você. Com apenas o seu CEP, nossa inteligência localiza os pontos de descarte e os horários dos catabagulhos mais próximos da sua casa.</p>
                        <button><a href="https://mar-ia-front-end-app-pk9m.vercel.app/">Saiba Mais →</a></button>
                    </div>
                </article>
            </section>
            <img className='flores' src={flores} alt="" />
        </main>
    )
}