import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 70%;
    background-color: #ffffff50;
    border-radius: 5px;
`;

export const Title = styled.h1`
    font-size: 25px;
    font-weight: 700;
    color: #ffffffee;
    margin: 15px;
`;

export const Description = styled.h2`
    font-size: 15px;
    text-align: center;
    color: #ffffffaa;
    margin-bottom: 0;
`;

export const FormArea = styled.div`
    background-color: #304050aa;
    padding: 20px;
    margin: 20px;
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
    width: 80%;
    margin-bottom: 10px;
    border-radius: 10px;
    :hover {
        background-color: #509090;
        font-size: 18px;
    }
`;

export const Image = styled.img`
    width: 30px;
    margin-right: 10px;
`;