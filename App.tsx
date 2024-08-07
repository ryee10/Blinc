import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import styled from "styled-components/native";
import { StatusBar } from 'expo-status-bar';
import RootNavigation from './src/screens/navigation/RootNavigation';
import useCachedResources from './hooks/useCachedResources';
import { useUserStrore } from './store/useUserStore';
import { TabBarVisibilityProvider } from './src/screens/navigation/TabBarVisibilityContext'; 
const App = () => {
  const isLoadingComplete = useCachedResources();

  const { session, user } = useUserStrore();

  useEffect(() => console.log(user, session), [user, session]);

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Container>
      <StatusBar style="auto" />
      <TabBarVisibilityProvider> 
        <RootNavigation />
      </TabBarVisibilityProvider>
    </Container>
  );
};

export default App;

const Container = styled(View)`
  flex: 1;
`;
