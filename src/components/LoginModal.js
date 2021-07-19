import React from "react";
import styled from "styled-components";
import Box from "../elements/Box";
import Text from "../elements/Text";

import { flex } from "../mixin";

const LoginModal = () => {
    return (
        <>
            <ModalContainer>
                <ModalOverlay></ModalOverlay>
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalBody>
                        <Box>
                            <h1>지금 원티드에서
                                <br/>
                                딱 맞는 회사찾기
                            </h1>
                            <h2>나에게 딱 맞는 회사를 찾아보세요</h2>
                        </Box>
                        <Box>
                            <Box>
                                <label>이메일</label>
                                <Input/>
                            </Box>
                        </Box>
                        <Box>
                         <LoginBtn>이메일로 시작하기</LoginBtn>
                         <Box>or</Box>
                         <LoginBtn>이메일로 시작하기</LoginBtn>
                         <LoginBtn>이메일로 시작하기</LoginBtn>
                         <LoginBtn>이메일로 시작하기</LoginBtn>
                        
                        </Box>
                        <p>ddddddddddddddddddddddddddddddddd</p>

                    </ModalBody>
                </ModalContent>
            </ModalContainer>
        </>
    );
}
const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    `;

const ModalOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
`; 

const ModalContent = styled.div`
    background-color: white;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    
    ${({theme}) => theme.device.tablet} {
        width: 500px;
        min-height: 525px;
        position: relative;
        top: 0px;        
    }

`;

const ModalHeader = styled.div`
    padding: 16px 20px;
    ${({theme}) => theme.device.tablet} {
        width: 500px;
        display: flex; 
        align-items: center; 
        justify-content: space-between;
    }
`;

const ModalBody = styled.div`
    padding: 20px;
`;

const Input = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid gray;
`;

const LoginBtn = styled.button`
    width: 100%;
    height: 54px;
    border-radius: 27px;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid gray;
`;


export default LoginModal;