import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    width: 70%;
    background-color: #ffffff50;
    border-radius: 5px;
`;

export const Title = styled.h1`
    font-size: 25px;
    font-weight: 900;
    color: #ffffffee;
    margin: 20;
    text-transform: uppercase;
`;

export const Description = styled.h2`
    font-size: 15px;
    text-align: center;
    color: #ffffff;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 0;
`;

export const Result = styled.div`
    font-size: 25px;
    font-weight: 900;
    color: #fff;
    background-color: #F5A9B8;
    border: solid 4px #5BCEFA;
    padding: 10px;
    margin: 5px 0px;
    border-radius: 50px;
    :hover {
        font-size: 30px;
        text-shadow: none;
        padding: 20px 40px;
        transition: all 150ms;
    }
    :not(:hover) {
        font-size: 25px;
        padding: 10px;
        transition: all 150ms;
    }
`;

export const FormArea = styled.div`
    background-color: #304050aa;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 5px;
    width: 70%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export const ValueInput = styled.input`
    background-color: #ffffff30;
    margin-top: 5px;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    width: 30%;
`;

export const CalcButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #5BCEFA;
    color: #fff;
    font-weight: 800;
    font-size: 15px;
    border: 0;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 10px;
    width: 80%;
    border-radius: 10px;
    :active {
        background-color: #F5A9B8;
        font-size: 20px;
        transition: all 120ms linear;
    }
    :not(:active) {
        background-color: #5BCEFA;
        font-size: 15px;
        transition: all 120ms;
    }
`;

export const Image = styled.img`
    width: 30px;
    margin-right: 10px;
`;