import './sec.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

function Sec(props) {
    return (
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOut">
            <div class="sec-div">
                <div class="sec-text">
                    <img src={props.imagem} alt="" class="sec-img" style={{ width: props.width, height: props.height }} />
                    <h1>{props.titulo}</h1>
                    <div class="separator"></div>
                    <p>{props.texto}</p>
                </div>
            </div>
        </AnimationOnScroll>
    );
}

export default Sec;