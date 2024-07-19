import { Text, Pressable } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
  title: any;
  action?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, action }: ButtonProps) => {
  return (
    <LinearGradient
    colors={[ '#6079FE','#DA84FE']}
    start={[0, 0]}
    end={[1, 1]}
      style={{ borderRadius: 15, padding: 3 }}
    >
      <Pressable
        style={{
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 12,
        }}
        onPress={action}
      >
        <Text style={{ color: 'white', fontSize: 18 , fontFamily:'WorkSans-SemiBold'}}>
          {title}
        </Text>
      </Pressable>
    </LinearGradient>
  );
};

export default Button;
