/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import withObservables from '@nozbe/with-observables';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import {compose} from 'recompose';
import {useDatabase} from '@nozbe/watermelondb/hooks';

const App = ({postsObserved}) => {
  const database = useDatabase();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  React.useEffect(() => {
    _didMount();
  }, []);

  const _didMount = async () => {
    try {
      await database.write(async () => {
        let data = await database.get('posts').create((ticket: any) => {
          ticket.title = `New Ticket ${Math.random()}`;
          ticket.body = `${Math.random()}`;
        });
        console.log('data: ', data);
      });
    } catch (error) {}
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button title="hello" onPress={() => _didMount()}></Button>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        {postsObserved?.map((item: any) => (
          <Text key={item?.title}>{item?.title}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default compose(
  withDatabase,
  withObservables([], ({database}: {database: any}) => ({
    postsObserved: database.get('posts').query().observe(),
  })),
)(App);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
