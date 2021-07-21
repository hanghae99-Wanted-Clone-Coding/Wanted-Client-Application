import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "../elements/Box";
import Text from "../elements/Text";
import Tag from "../elements/Tag";
import { flex } from "../mixin";
import {GrClose} from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import {
  getSecondTagsDB,
  getTagResultsDB,
  getTagsDB,
} from "../redux/modules/opening";

const TagModal = ({showModal, closeModal}) => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.opening.tags) || [];
  const secondTags = useSelector((state) => state.opening.secondTag) || [];

  const [choices, setChoices] = useState([]);

  useEffect(() => dispatch(getTagsDB()), []);

  const clickCategory = (id) => {
    dispatch(getSecondTagsDB(id));
  };

  const choiceTag = (name) => {
    if (
      choices.length !== 0 &&
      choices.findIndex((ele) => ele === name) !== -1
    ) {
      const newAry = choices.filter((ele) => ele !== name);
      setChoices(newAry);
      return;
    }
    if (choices.length >= 3) {
      alert("태그는 3개 까지 선택 가능합니다.");
      return;
    }
    setChoices([...choices, name]);
  };

  const submitTags = () => {
    dispatch(getTagResultsDB(choices));
  };

  return (
    <>{showModal ?
        (
           <ModalContainer>
            <ModalOverlay onClick={closeModal} />
            <ModalContent>
              <ModalHeader>
                <button>초기화</button>
                <button>태그</button>
                <button onClick={closeModal}><GrClose /></button>
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
                      {categoryList.map((item, idx) => (
                        <li key={idx} onClick={() => clickCategory(item.tagId)}>
                          <CategoriBtn>{item.name}</CategoriBtn>
                        </li>
                      ))}
                    </CategoriBox>
                  </Box>
                  <Box>
                    <h3>2. 태그 선택</h3>
                    <TagBox>
                      {secondTags.map((item, idx) => (
                        <li key={idx} onClick={() => choiceTag(item.name)}>
                          <Tag name={item.name} />
                        </li>
                      ))}
                    </TagBox>
                  </Box>
                </Box>
              </ModalBody>
              <ModalFooter>
                <SelectedTags></SelectedTags>
                <ConfirmBtn onClick={submitTags}>확인</ConfirmBtn>
              </ModalFooter>
            </ModalContent>
          </ModalContainer>)
        : null
        }
      </>
    );
  };

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

  ${({ theme }) => theme.device.tablet} {
    width: 500px;
    min-height: 525px;
    position: relative;
    top: 0px;
  }
`;

const ModalHeader = styled.div`
  padding: 16px 20px;
  ${({ theme }) => theme.device.tablet} {
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
