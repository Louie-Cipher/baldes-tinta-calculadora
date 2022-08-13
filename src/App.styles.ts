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
    padding: 25px;
    width: 70%;
    background-color: #ffffff50;
    border-radius: 5px;
`;

export const Title = styled.h1`
    font-size: 25px;
    font-weight: 700;
    color: #ffffffee;
    margin: 0;
`;

export const Description = styled.h2`
    font-size: 15px;
    text-align: center;
    color: #ffffffaa;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 0;
`;

export const Highlight = styled.div`
    font-size: 20px;
    background-color: #baba2090;
    padding: 5px;
    border-radius: 5px;
    border: 0;
`;

export const FormArea = styled.div`
    background-color: #304050aa;
    padding: 10px 20px;
    margin: 10px 0;
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
    border-radius: 10px;
    width: 30%;
`;

export const CalcButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #60aaaa;
    color: #203040;
    font-weight: 800;
    font-size: 15px;
    border: 0;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 10px;
    width: 80%;
    border-radius: 10px;
    :active {
        background-color: #aa9090;
        font-size: 18px;
    }
`;

export const Image = styled.img`
    width: 30px;
    margin-right: 10px;
`;