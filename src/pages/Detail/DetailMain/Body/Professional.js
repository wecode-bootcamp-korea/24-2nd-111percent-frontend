import React from 'react';
import styled from 'styled-components';

function Professional() {
  return (
    <ProfessionalCheck>
      <H1>전문가 확인</H1>
      <Wrapper>
        <Image>
          <img src="/image/lawyer.jpg" alt="변호사_프로필_이미지" />
        </Image>
        <Desc>
          <Label>조영린 변호사</Label>
          <Detail>
            2016년 01월 29일에 매매를 원인으로 소유권 이전 등기가
            완료되었습니다. 2021년 09월 13일 현재 등기사항전부증명서상 소유권에
            대한 별도의 법률관계가 없음을 확인하였습니다.
          </Detail>
        </Desc>
      </Wrapper>
    </ProfessionalCheck>
  );
}

export default Professional;

const ProfessionalCheck = styled.div`
  margin-bottom: 8rem;
  color: ${props => props.theme.black};
`;

const H1 = styled.h1`
  margin-bottom: 3rem;
  font-size: 2.2rem;
  letter-spacing: -0.05rem;
  line-height: 1.27;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  flex: 2 2 12%;
  width: 9rem;
  height: 9rem;
  margin-right: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Desc = styled.div`
  flex: 8 8 90%;
`;

const Label = styled.div`
  margin-bottom: 2rem;
  font-size: 1.6rem;
`;

const Detail = styled.div`
  color: #606060;
  font-size: 1.4rem;
  line-height: 1.5;
  white-space: pre-wrap;
`;
