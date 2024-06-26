import styled from "styled-components";
import Hamburger from "assets/icons/hamburger.svg?react";
import { ButtonContainerProps } from "type/button";



const ButtonContainer = styled.div<ButtonContainerProps>`
  display: inline-flex;
  height: 2.5625rem;
  padding: 0.5rem 0.875rem 0.625rem 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  width: 10rem;
  flex-shrink: 0;
  background-color: ${(props) => props.BackGroundColor};
  border: 1.5px solid ${(props) => props.borderColor};
  &:hover {
    cursor: pointer;
  }

  /* ButtonShadow1 */
  box-shadow: 0px 4px 10px 0px rgba(34, 39, 47, 0.1);
`;

const ButtonTitle = styled.span`
  font-weight: 500;
  font-size: var(--font-size-primary);
  font-weight: bold;
  color: ${(props) => props.color};
  margin-left: 6px;
`;

export default function CategoryButton({ ...props }) {
  return (
    <>
      <ButtonContainer
        BackGroundColor={props.BackGroundColor}
        borderColor={props.borderColor}
        onMouseOver={() => {
          props.setSelectedFirstCategory(props.data)
          props.setSelectedSecondCategory(null)
          props.setHoveredFirstCategory(null)
        }}
      >
        <Hamburger width="18" height="18" />
        <ButtonTitle color={props.color}>{props.title}</ButtonTitle>
      </ButtonContainer>
    </>
  );
}
