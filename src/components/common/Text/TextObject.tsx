import React from 'react';
import { Text, TextProps } from './TextClass'; // Предполагается, что компонент Text находится в файле Text.tsx

const LinkProps: TextProps = {
  lineHeight: '24px',
  fontSize: '16px',
  bold: '400',
  color: '#3B3C4A',
  content: undefined,
};

const LinkText: React.FC<{ content: React.ReactNode }> = ({ content }) => <Text {...LinkProps} content={content} />;

const HeaderProps: TextProps = {
  bold: '600',
  align: 'left',
  margin: '0',
  padding: '0',
  color: '#181A2A',
  content: undefined,
};
const HeaderText: React.FC<{ content: React.ReactNode; fontSize: string; lineHeight: string; margin?: string }> = ({
  content,
  fontSize,
  lineHeight,
  margin,
}) => <Text {...HeaderProps} content={content} fontSize={fontSize} lineHeight={lineHeight} margin={margin} />;

const BaseProps: TextProps = {
  bold: '400',
  align: 'left',
  margin: '0',
  padding: '0',
  color: '#696A75',
  content: undefined,
};
const BaseText: React.FC<{ content: React.ReactNode; fontSize: string; lineHeight: string; margin?: string }> = ({
  content,
}) => <Text {...BaseProps} content={content} fontSize={fontSize} lineHeight={lineHeight} margin={margin} />;

export { LinkText, HeaderText, BaseText };

// interface TextProps3 {
//     lineHeight?: string;
//     fontSize?: string;
//     bold?: boolean;
//     align?: 'left' | 'center' | 'right' | 'justify';
//     margin?: string;
//     padding?: string;
//   }

// const defaultText1Props: TextProps = {
//   lineHeight: '1.5',
//   fontSize: '40px',
//   bold: '600',
//   content: undefined,
// };

// const defaultText2Props: TextProps = {
//   align: 'center',
//   margin: '10px',
//   padding: '5px',
//   color: '#333333',
//   content: undefined,
// };

// const Text1: React.FC<{ content: React.ReactNode; color?: string }> = ({ content, color }) => (
//   <Text {...defaultText1Props} {...defaultText2Props} content={content} color={color} />
// );
