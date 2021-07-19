import React, {useState} from "react";
import styled from "styled-components";
import Box from "../elements/Box";
import Text from "../elements/Text";
import Image from "../elements/Image";
import { flex } from "../mixin";

import {GrClose} from "react-icons/gr";

const CareerModal = ({showModal, closeModal}) => {


    return (
        <>
        {showModal ?
            <ModalContainer>
            <ModalOverlay onClick={closeModal}></ModalOverlay>
            <ModalContent>
                <ModalHeader>
                    <div></div>
                    <div><Text bold>경력</Text></div>
                    <button onClick={closeModal}><GrClose /></button>
                </ModalHeader>
                <ModalBody>
                    <Select>
                        <option>전체</option>
                        <option>신입</option>
                        <option>경력</option>
                    </Select>
                </ModalBody>
                <ModalFooter>
                    <Btn>확인</Btn>
                </ModalFooter>
            </ModalContent>
        </ModalContainer> : null} 
        
        
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
    width: 100%;
    background-color: white;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    
    ${({theme}) => theme.device.tablet} {
        width: 360px;
        height: 320px;
        position: relative;
        top: 0px;        
    }

`;

const ModalHeader = styled.div`
    ${flex};
    justify-content: space-between;
    padding: 16px 20px;
    ${({theme}) => theme.device.tablet} {
        width: 360px;
        
    }
`;

const ModalBody = styled.div`
    padding: 70px 25px 46px;
`;

const Select = styled.select`
    width: 100%;
    height: 40px;
    border: 1px solid ${({theme}) => theme.colors.lightGray};
    border-radius: 5px;
    padding: 0 15px;

    // -moz-appearance:none; 
    // -webkit-appearance:none; 
    // appearance:none;
    // select::-ms-expand { display:none; } 

    // background: 
`;

const ModalFooter = styled.div`
    padding: 40px 20px 20px;
`;

const Btn = styled.button`
    width: 100%;
    height: 54px;
    margin: 0 0 10px 0;
    border-radius: 27px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: ${({theme}) => theme.colors.mainBlue};
`;

export default CareerModal;