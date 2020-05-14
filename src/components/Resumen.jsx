import React from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {primeraLetra} from '../helpers/helpers';

const ContenedorResumen = styled.div`
    padding:1rem;
    text-align:center;
    background-color:#19c77d;
    color: #fff;
    margin-top:1rem;
`;

const Resumen = ({datos}) => {

    //EXTRAER DE DATOS
    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;

    return (  
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>

            <ul>
                <li>Marca : {primeraLetra(marca)}</li>
                <li>Plan : {primeraLetra(plan)}</li>
                <li>Auto : {year}</li>
            </ul>
        </ContenedorResumen>
    );
}

Resumen.propTypes = {
    datos : PropTypes.object.isRequired
}
 
export default Resumen;