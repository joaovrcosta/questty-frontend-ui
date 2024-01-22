import styled from 'styled-components'

export const AnswersBySubject = styled.div`
  max-width: 320px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 0 1rem;
  width: 100%;

  @media (max-width: 1168px) {
    display: none;
  }
`

export const RankingBox = styled.div`
  font-family: Poppins;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #000;
  padding: 1.25rem;
  border-radius: 16px;
  /* box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.4); */
  max-height: 22rem;
  max-width: 320px;
  width: 100%;
`

export const RankingHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0 0.5rem 0;
`
export const UserRankingWrapper = styled.div`
  max-height: 224px;
`
export const SubjectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.25rem;
`
export const MoreTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem 1rem 1rem;
`
