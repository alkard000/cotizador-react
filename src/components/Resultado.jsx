import React from 'react';

import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';

const Mensaje = styled.p`
    background-color:#94ca3e;
    margin-top:2rem;
    padding:.5rem;
    text-align:center;
    color:#fff;
    border-radius:50px;
`;

const Total = styled.p`
    color:#000;
    padding:1rem;
    text-transform:uppercase;
    font-weight:bold;
    margin:0;
    text-align:center;
    font-size:25px;
`;

const ResultadoCotizacion = styled.div`
    text-align:center;
    padding:.5rem;
    border:1px solid #94ca3e;
    background-color:#ffffff;
    margin-top:1rem;
    position:relative;
    border-radius:25px;

`;

const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
        : 
        (
        <ResultadoCotizacion>
            <TransitionGroup
                component="p"
                className='resultado'
            >
                <CSSTransition
                    classNames='resultado'
                    key={cotizacion}
                    timeout={{enter : 500, exit : 500}}
                >
                    <Total>
                        El total es : $ {cotizacion}
                    </Total>
                </CSSTransition>
            </TransitionGroup>
        </ResultadoCotizacion>
        )
    )
}

Resultado.propTypes = {
    cotizacion : PropTypes.number.isRequired
}
 
export default Resultado;