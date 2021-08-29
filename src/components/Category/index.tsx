import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  RectButton,
  RectButtonProps,
  ScrollView,
} from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

import discordImg from '../../assets/discord.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
  const { secondary50, secondary70, secondary85, secondary40 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
        colors={[checked ? secondary85 : secondary50, secondary40]}
      >
        <View style={[checked ? styles.checked : styles.check]} />
        <Icon width={48} height={48} />

        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </RectButton>
  );
}