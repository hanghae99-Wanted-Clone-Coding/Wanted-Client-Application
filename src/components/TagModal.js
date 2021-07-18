import React from "react";
import styled from "styled-components";
import Box from "../elements/Box";
import Text from "../elements/Text";
import Tag from "../elements/Tag";
import { flex } from "../mixin";

const TagModal = () => {
    return (
        <>
            <ModalContainer>
                <ModalOverlay></ModalOverlay>
                <ModalContent>
                    <ModalHeader>
                        <button>버튼</button>
                        <button>버튼</button>
                        <button>버튼</button>
                    </ModalHeader>
                    <ModalBody>
                        <Box>
                            <h2>
                                기업의 특별한 복지, 혜택 등 태그를 선택하여 
                                <br />
                                나에게 꼭 맞는 포지션을 찾아보세요!
                            </h2>
                            <br />
                            <Box>
                            <h3>1. 카테고리 선택</h3>
                            <CategoriBox>
                                <li><CategoriBtn>업계연봉수준</CategoriBtn></li>
                                <li><CategoriBtn>업계연봉수준</CategoriBtn></li>
                                <li><CategoriBtn>업계연봉수준</CategoriBtn></li>
                                <li><CategoriBtn>업계연봉수준</CategoriBtn></li>
                                <li><CategoriBtn>업계연봉수준</CategoriBtn></li>
                                <li><CategoriBtn>업계연봉수준</CategoriBtn></li>
                                <li><CategoriBtn>업계연봉수준</CategoriBtn></li>
                                <li><CategoriBtn>업계연봉수준</CategoriBtn></li>
                            </CategoriBox>
                            </Box>
                            <Box>
                                <h3>2. 태그 선택</h3>
                                <TagBox>
                                <li><Tag name="연봉업계평균이상"/></li>
                                <li><Tag name="연봉업계평균이상"/></li>
                                <li><Tag name="연봉업계평균이상"/></li>
                                
                                </TagBox>
                            </Box>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <SelectedTags></SelectedTags>
                        <ConfirmBtn>확인</ConfirmBtn>
                        
                    </ModalFooter>
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

const ModalFooter = styled.div`
    padding: 0 20px 20px;
`;

const CategoriBox = styled.div`
  ${flex};
  margin-top: 10px;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.device.tablet} {
    flex-wrap: wrap;
  }
`;

const CategoriBtn = styled.button`
    flex-shrink: 0;
    padding: 9px 14px;
    margin-bottom: 10px;
    margin-right: 6px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.bgGray};
`;

const TagBox = styled.div`
    ${flex};
    border: 1px solid ${({ theme }) => theme.colors.lightGray};

    ${({ theme }) => theme.device.tablet} {
        width: 466px;
        height: 100px;
    }

`;

const SelectedTags = styled.div`

    height: 96px;
    
    background-color: ${({ theme }) => theme.colors.bgGray};
   
${({ theme }) => theme.device.tablet} {
    height: 116px;
}
`;

const ConfirmBtn = styled.button`
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border: 1px solid black;
`;



export default TagModal;