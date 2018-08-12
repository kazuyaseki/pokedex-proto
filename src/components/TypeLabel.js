import React from 'react';
import styled from 'styled-components';

const themeColor = type => {
  switch (type) {
    case 'ノーマル':
      return 'rgba(174, 174, 174)';
    case '炎':
      return 'rgba(253, 167, 108)';
    case '水':
      return 'rgba(104, 198, 245)';
    case '電気':
      return 'rgba(230, 210, 46)';
    case '草':
      return 'rgba(155, 193, 42)';
    case '氷':
      return 'rgba(103, 233, 244)';
    case '格闘':
      return 'rgba(236, 106, 108)';
    case '毒':
      return 'rgba(170, 124, 200)';
    case '地面':
      return 'rgba(199, 167, 74)';
    case '飛行':
      return 'rgba(103, 168, 238)';
    case 'エスパー':
      return 'rgba(233, 131, 242)';
    case '虫':
      return 'rgba(86, 201, 96)';
    case '岩':
      return 'rgba(249, 198, 61)';
    case 'ゴースト':
      return 'rgba(117, 112, 178)';
    case 'ドラゴン':
      return 'rgba(253, 136, 95)';
    case '悪':
      return 'rgba(105, 131, 209)';
    case '鋼':
      return 'rgba(129, 138, 163)';
    case 'フェアリー':
      return 'rgba(250, 121, 154)';
  }
};

const Label = styled.span`
  display: inline-block;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: ${props => themeColor(props.type)};
  color: #fff;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
`;

const TypeLabel = ({ type }) => <Label type={type}>{type}</Label>;
export default TypeLabel;
