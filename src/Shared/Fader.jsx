import PropTypes from 'prop-types'
import '../App.css'
import { useEffect, useState } from 'react';

const Fader = ({text}) => {
    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in'
    })

    useEffect(() => {
        const timeout = setInterval(() => {
            if(fadeProp.fade === 'fade-in'){
                setFadeProp({
                    fade: 'fade-out'
                })
            }else{
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        },4000)
        return () => {clearInterval(timeout)}
    },[fadeProp])
    return (
        // fade componentes
        <>
            <h1 className={`${fadeProp.fade} text-4xl text-center my-4`}>{text}</h1>
        </>
    );
};
Fader.defaultProps = {
    text: 'Hello there'
}

Fader.propTypes = {
    text: PropTypes.string,
}
export default Fader;