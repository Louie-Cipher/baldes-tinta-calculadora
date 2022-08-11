import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    min-width: 100%;
    max-width: 800px;
    background-color: #ffffff50;
    border-radius: 5px;
`;

export const Image = styled.img`
    width: 80px;
    margin-bottom: 15px;
`;

export const Title = styled.h1`
    font-size: 25px;
    font-weight: 700;
    color: #ffffffee;
    margin: 15px;
`;

export const FormArea = styled.div`
    background-color: #00000050;
    padding: 20px;
    margin: 20px;
    width: 70%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export const ValueInput = styled.input`
    background-color: #ffffff50;
    margin-bottom: 10px;
    margin-top: 5px;
    padding: 10px;
    border: 0;
    border-radius: 10px;
`;

export const CalcButton = styled.button`
    background-color: #8aa;
    color: #234;
    font-weight: 700;
    border: 0;
    padding: 15px;
    width: 80%;
    margin-bottom: 10px;
    border-radius: 10px;
`