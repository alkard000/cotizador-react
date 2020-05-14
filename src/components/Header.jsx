import React from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
  background-color : #15a467;
  padding : 10px;
  font-weight : bold;
  color : #ffffff;
`;

const TextHeader = styled.h1`
    font-size : 2rem;
    margin : 0;
    font-family : 'Baloo 2', serif;
    text-align : center;
`

const Header = ({titulo}) => {
    return (  
        <ContenedorHeader>
            <TextHeader>
                {titulo}
            </TextHeader>
        </ContenedorHeader>
    );
}

Header.propTypes = {
    titulo : PropTypes.string.isRequired
}
 
export default Header;