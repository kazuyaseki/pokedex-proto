import React from 'react';
import styled from 'styled-components';

const chineseToJapanese = type => {
  switch (type) {
    case '一般':
      return {
        label: 'ノ',
        color: 'rgba(174, 174, 174)'
      };
    case '\u708e':
      return {
        label: '炎',
        color: 'rgba(253, 167, 108)'
      };
    case '\u6c34':
      return {
        label: '水',
        color: 'rgba(104, 198, 245)'
      };
    case '\u7535':
      return {
        label: '電',
        color: 'rgba(230, 210, 46)'
      };
    case '\u8349':
      return {
        label: '草',
        color: 'rgba(155, 193, 42)'
      };
    case '\u51b0':
      return {
        label: '氷',
        color: 'rgba(103, 233, 244)'
      };
    case '\u683c\u6597':
      return {
        label: '格',
        color: 'rgba(236, 106, 108)'
      };
    case '\u6bd2':
      return {
        label: '毒',
        color: 'rgba(170, 124, 200)'
      };
    case '\u5730\u4e0a':
      return {
        label: '地',
        color: 'rgba(199, 167, 74)'
      };
    case '\u98de\u884c':
      return {
        label: '飛',
        color: 'rgba(103, 168, 238)'
      };
    case '\u8d85\u80fd':
      return {
        label: 'エ',
        color: 'rgba(233, 131, 242)'
      };
    case '\u866b':
      return {
        label: '虫',
        color: 'rgba(86, 201, 96)'
      };
    case '\u5ca9\u77f3':
      return {
        label: '岩',
        color: 'rgba(249, 198, 61)'
      };
    case '\u5e7d\u7075':
      return {
        label: 'ゴ',
        color: 'rgba(117, 112, 178)'
      };
    case '\u9f99':
      return {
        label: 'ド',
        color: 'rgba(253, 136, 95)'
      };
    case '\u6076':
      return {
        label: '悪',
        color: 'rgba(105, 131, 209)'
      };
    case '\u94a2':
      return {
        label: '鋼',
        color: 'rgba(129, 138, 163)'
      };
    case '\u5996\u7cbe':
      return {
        label: 'フ',
        color: 'rgba(250, 121, 154)'
      };
  }
};

const Label = styled.span`
  display: inline-block;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: ${props => props.color};
  color: #fff;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
`;

const TypeLabel = ({ type, onClick }) => {
  const jtype = chineseToJapanese(type);

  return (
    <Label color={jtype.color} onClick={() => onClick()}>
      {jtype.label}
    </Label>
  );
};
export default TypeLabel;
