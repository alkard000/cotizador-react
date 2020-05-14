import React, {useState} from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {obtenerDifYear, calcularMarca, obtenerPlan} from '../helpers/helpers';

const Campo = styled.div`
    display:flex;
    margin-bottom:1rem;
    align-items:center;
`;

const Label = styled.label`
    flex:0 0 100px;
`;

const Select = styled.select`
    display:block;
    width:100%;
    padding:1rem;
    border:1px solid #e1e1e1;
    -webkit-appearance:none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color : #15a467;
    font-size : 16px;
    width : 100%;
    padding : 1rem;
    color:#fff;
    text-transform:uppercase;
    font-weight:bold;
    border:none;
    transition:all .3s ease;
    margin-top:2rem;

    &:hover { 
        background-color:#19c77d;
        cursor : pointer;
    }
`;

const Error = styled.div`
    background-color:#fc1222;
    color:#fea0a6;
    padding:1rem;
    width:100%;
    text-align:center;
    margin-bottom:2rem;
`;

const Formulario = ({setResumen, setCargando}) => {

    const [datos, setDatos] = useState({
        marca : '',
        year : '',
        plan : ''
    });

    const [error, setError] = useState(false);

    //EXTRAER LOS VALORES DEL STATE
    const {marca, year, plan} = datos;

    //LEER LOS DATOS DEL FORMULARIO
    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //CUANDO EL USUARIO PRESIONA SUBMIT
    const handleSubmit = e => {
        e.preventDefault();

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        //BASE DE 2000
        let resultado = 2000;

        //OBTENER DIFERENCIA DE AÑOS
        const difYear = obtenerDifYear(year);

        //POR CADA AÑO RESTAR EL 3%
        resultado -= ((difYear * 3) * resultado) / 100;

        //AMERICANO 15
        //ASIATICO 5%
        //EUROPEO 30%
        resultado = calcularMarca(marca) * resultado;

        //PLAN BASICO AUMENTA 20%
        //PLAN COMPLETO AUMENTA 50%
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseInt(incrementoPlan * resultado);

        //SPINNER
        setCargando(true);

        setTimeout(() => {

            //ELIMINAR SPINNER
            setCargando(false);

            //TOTAL Y PASAR LA INFORMACION AL COMPONENTE PRINCIPAL
            setResumen({
                cotizacion : resultado,
                datos
            });            
        }, 3000);


    }

    return (  

        <form
            onSubmit={handleSubmit}
        >        
            
        { error ? <Error>Todos los campos son obligatorios</Error> : null }

            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americanos</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name='plan'
                    value='basico'
                    checked={plan === 'basico'}
                    onChange={handleChange}
                />Basico
                <InputRadio 
                    type="radio"
                    name='plan'
                    value='completo'
                    checked={plan === 'completo'}
                    onChange={handleChange}
                />Completo
            </Campo>

            <Boton type='submit'>Cotizar</Boton>
        </form>
    );
}

Formulario.propTypes = {
    setResumen : PropTypes.func.isRequired,
    setCargando : PropTypes.func.isRequired
}
 
export default Formulario;