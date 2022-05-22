import React from 'react';
import styled from 'styled-components';

const EstateDetail = props => {
  const { details } = props;
  const {
    address,
    completion_date,
    household,
    supply_area,
    exclusive_private_area,
    lease_status,
  } = details;

  return (
    <Table>
      <tbody>
        <tr>
          <th>주소</th>
          <td colSpan="3">{address}</td>
        </tr>
        <tr>
          <th>준공시기</th>
          <td>{completion_date}</td>
          <th>규모</th>
          <td>{household}세대</td>
        </tr>
        <tr>
          <th>공급면적</th>
          <td>{supply_area}㎡</td>
          <th>전용면적</th>
          <td>{exclusive_private_area}㎡</td>
        </tr>
        <tr>
          <th>임차여부</th>
          <td colSpan="3">{lease_status}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default EstateDetail;

const Table = styled.table`
  width: 100%;
  padding: 2reem;
  border-collapse: collapse;
  color: #858d94;

  th,
  td {
    border: 1px solid #dee2e6;
    border-left: none;
    padding: 1.2rem 2rem;
    font-size: ${props => props.theme.smallFont};
    text-align: start;
    line-height: 1.15;
  }

  th {
    width: 20%;
    background-color: #f8f9fa;
    padding: 1.4rem 2rem;
    font-weight: 400;
  }

  td {
    width: 30%;
    color: #606060;

    &:last-child {
      border-right: none;
    }
  }
`;
