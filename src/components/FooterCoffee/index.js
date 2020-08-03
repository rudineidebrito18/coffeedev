import styled from 'styled-components'
import LogoCoffee from '../LogoCoffee'

const FooterCoffee = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16rem;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    border-top: 4px solid var(--color-primary-medium);
    padding: 20rem 0;

    & > ${LogoCoffee}{
        margin-bottom: 20rem;
    }
`
 
export default FooterCoffee