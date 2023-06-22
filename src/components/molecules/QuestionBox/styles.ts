import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import Image from 'next/image'
import styled, { css } from 'styled-components'

export const QuestionBoxContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  box-shadow: 0px 4px 5px 10px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 14.7%;
    left: -31px;
    transform: translateY(-50%) rotate(-180deg);
    border-width: 32px 0 32px 32px;
    border-style: solid;
    border-color: transparent transparent transparent
      ${({ theme }) => theme.colors.white};
    z-index: 9999;
  }

  &::after {
    content: '';
    position: absolute;
    top: 14.7%;
    left: -32px;
    transform: translateY(-50%) rotate(-180deg);
    border-width: 32px 0 32px 32px;
    border-style: solid;
    border-color: transparent transparent transparent black;
  }

  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 100%;
      background-color: transparent;
      border: none;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 1);

      &::before {
        display: none;
      }

      &::after {
        display: none;
      }
    }
  `}
`
export const LogoIcon = styled(Image)`
  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 72px;
    }
  `}
`

export const QuestionInfo = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const QuestionInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Username = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const UserLevel = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  height: 32px;
  width: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Poppins;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const AnswerQuantityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const AnswerQuantity = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`

// Question Content

export const QuestionContent = styled.div`
  margin-bottom: 1.5rem;
`

export const QuestionTitleText = styled(Text)`
  line-height: 1.2;
  font-family: Inter;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      line-height: 1.4;
    }
  `}
`

export const QuestionTitle = styled.div`
  margin-bottom: 1rem;
`

export const QuestionContentText = styled(Text)`
  font-family: Nunito;

  ${({ theme }) => css`
    @media (max-width: 735px) {
      font-size: 16px;
    }
  `};
`

// User Handle Actions
export const UserHandleActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const AnswerButton = styled(Button)`
  padding: 1.625rem 2rem;
  font-weight: 400;
  border: 2px solid ${({ theme }) => theme.colors.black};

  &:focus {
    border: 2px solid #6d83f3;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.2s ease all;
  }
`

export const ModerationWrapper = styled.div``

export const ModerateLabel = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

// More Details

export const MoreDetailsInputContainer = styled.div``

export const MoreDetailsInput = styled.input`
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;
`

export const QuestionWrapper = styled.div`
  max-width: 912px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2.5rem;
`

export const UserAvatarContainer = styled.div`
  margin-top: 5rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.4rem;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const AvatarContainer = styled.div`
  margin-top: 4.5rem;
  margin-right: 2.4rem;

  ${({ theme }) => css`
    @media (max-width: 850px) {
      margin-top: 6.4rem;
      margin-right: 2.4rem;
    }
  `};

  ${({ theme }) => css`
    @media (max-width: 845px) {
      margin-top: 5rem;
      margin-right: 2.4rem;
    }
  `};

  ${({ theme }) => css`
    @media (max-width: 810px) {
      margin-top: 5.2rem;
      margin-right: 2.4rem;
    }
  `};

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none;
    }
  `};
`

export const AvatarInfoContainer = styled.div`
  display: none;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: block;
    }
  `};
`
