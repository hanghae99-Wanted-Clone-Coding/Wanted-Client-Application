import React, {useState} from "react";
import styled from "styled-components";
import {KAKAO_AUTH_URL} from "../shared/OAuth";
import {setCookie} from "../shared/Cookie";

import Box from "../elements/Box";
import Text from "../elements/Text";
import Image from "../elements/Image";
import { flex } from "../mixin";
import Logo from "../assets/wanted-logo.png";
import {FcGoogle} from "react-icons/fc";
import {GrApple, GrClose} from "react-icons/gr";
import {RiKakaoTalkFill} from "react-icons/ri";
import {HiOutlineMail} from "react-icons/hi";

const LoginModal = ({showModal, closeModal}) => {


    return (
        <>{showModal ?
            <ModalContainer>
            <ModalOverlay onClick={closeModal}></ModalOverlay>
            <ModalContent>
                <ModalHeader>
                    <Box>
                    <ModalLogo src={Logo}/>
                    </Box>
                    <button onClick={closeModal}><GrClose /></button>
                </ModalHeader>
                <ModalBody>
                    <Box text_align="center" margin="24px 0px 40px">
                        <Text line_height="1.54" bold size="26px">지금 원티드에서
                            <br/>
                            딱 맞는 회사찾기
                        </Text>
                        <Box margin="16px 0 0 0" text_align="center">
                            <Text  size="16px">나에게 딱 맞는 회사를 찾아보세요</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Box padding="0 0 22px 0">
                            <label>이메일</label>
                            <Input/>
                        </Box>
                    </Box>
                    <Box>
                     <EmailBtn><HiOutlineMail />이메일로 시작하기</EmailBtn>
                     <Box text_align="center" margin="0 0 10px 0">or</Box>
                     <Btn><GrApple />Apple로 시작하기</Btn>
                     <Btn><FcGoogle/>Google로 시작하기</Btn>
                     <Btn href={KAKAO_AUTH_URL}><RiKakaoTalkFill />카카오로 시작하기</Btn>
                    
                    </Box>
                    <P>
                        걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
                        <br />
                        회원가입 시 <a href="https://help.wanted.co.kr/hc/ko/articles/360035484292">개인정보 처리방침</a>
                        과 <a href="https://help.wanted.co.kr/hc/ko/articles/360035844551">이용약관</a>을 확인하였으며, 
                        <br />
                        동의합니다.
                    </P>

                </ModalBody>
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
    background-color: white;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    
    ${({theme}) => theme.device.tablet} {
        width: 400px;
        overflow-y: auto;
        min-height: 750px;
        position: relative;
        top: 0px;        
    }

`;

const ModalHeader = styled.div`
    padding: 16px 20px;
    ${({theme}) => theme.device.tablet} {
        width: 400px;
        ${flex};
        justify-content: space-between;
    }
`;


const ModalLogo = styled.img`
  width: 75px;
  
`;


const ModalBody = styled.div`
    padding: 20px;
`;

const Input = styled.input`
    width: 100%;
    height: 50px;
    border: 2px solid ${({theme}) => theme.colors.bgGray};
    border-radius: 5px;
    margin-top: 10px;
`;

const EmailBtn = styled.button`
    width: 100%;
    height: 54px;
    margin: 0 0 10px 0;
    border-radius: 27px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: ${({theme}) => theme.colors.mainBlue};
`;

const Btn = styled.button`
    width: 100%;
    height: 54px;
    margin: 0 0 10px 0;
    border-radius: 27px;
    font-size: 16px;
    font-weight: 600;

    border: 2px solid ${({theme}) => theme.colors.bgGray};
`;

const P = styled.p`
    margin-top: 26px;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
`;


export default LoginModal;