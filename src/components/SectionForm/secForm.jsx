import './secForm.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { Form } from './styles.js'

function SecForm(props) {

    return (
        <>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOut">
               <Form gradient ={props.gradient} borderRadius = {props.borderRadius} position = {props.position}/>
            </AnimationOnScroll>
        </>
    );
}

export default SecForm;