import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../images/logo.jfif';

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="">
                <img src={logo} width="50" height="50" alt="Substantive Research" />
            </Wrapper>
        )
    }
}

export default Logo;