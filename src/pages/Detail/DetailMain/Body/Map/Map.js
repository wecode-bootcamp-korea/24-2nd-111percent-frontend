import React, { useEffect } from 'react';
import EstateDetail from './EstateDetail';
import styled from 'styled-components';

function Map(props) {
  const { investment } = props;

  const { latitude, longitude } = investment;

  useEffect(() => {
    // make map
    const container = document.getElementById('map');
    const { kakao } = window;
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 10,
    };

    const map = new kakao.maps.Map(container, options);

    // make marker
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <Wrapper>
      <H1>담보 상세</H1>
      <KakaoMap id="map" />
      <EstateDetail details={investment} />
    </Wrapper>
  );
}

export default Map;

const Wrapper = styled.div`
  margin-bottom: 8rem;
`;

const H1 = styled.h1`
  margin-bottom: 3rem;
  font-size: 2.2rem;
  letter-spacing: -0.05rem;
  line-height: 1.27;
`;

const KakaoMap = styled.div`
  width: 100%;
  height: 28rem;
  margin-bottom: 3rem;
`;
