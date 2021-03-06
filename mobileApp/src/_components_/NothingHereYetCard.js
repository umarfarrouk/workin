import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from './Global/colors';

const DEVICE_WIDTH = Dimensions.get('window').width;

const StyledMainView = styled.View`
  width: ${DEVICE_WIDTH - 20};
  margin-top: 200;
  margin-bottom: 30;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-weight: 600;
  line-height: 26px;
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.0861539px;
  color: ${colors.mediumNeutral};
  margin-top: 10;
`;

const StyledTextLinkButton = styled.TouchableOpacity``;

const StyledTextLink = styled.Text`
  font-weight: 600;
  line-height: 26px;
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.0861539px;
  color: ${colors.mediumNeutral};
  text-decoration-line: underline;
`;

export default (NothingHereyetCard = ({ onPress }) => (
  <StyledMainView>
    <StyledText>No one has posted in this group yet!</StyledText>
    <StyledTextLinkButton onPress={onPress}>
      <StyledTextLink>Get the conversation started.</StyledTextLink>
    </StyledTextLinkButton>
  </StyledMainView>
));
