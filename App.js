import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.H1}>Top 10 melhores filmes</Text>
      <View style={styles.contentContainer}>

        <Image source={require('./assets/images/ds.png')} style={styles.image} />
        <Image source={require('./assets/images/fp.png')} style={styles.image} />
        <Image source={require('./assets/images/gg.png')} style={styles.image} />
        <Image source={require('./assets/images/gg2.png')} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/images/kimet.png')} style={styles.image} />
        <Image source={require('./assets/images/nt.png')} style={styles.image} />
        <Image source={require('./assets/images/rk.png')} style={styles.image} />
        <Image source={require('./assets/images/sp.png')} style={styles.image} />
        <Image source={require('./assets/images/st.png')} style={styles.image} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#444',

  },
  image: {
    width: 300,
    height: 500,
    borderRadius: 30,
    boorder: '3px solid black',
    margin: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',

  },
  H1: {
    color: 'blue',
    fontSize: 45,
    textAlign: 'center',
    fontweight: '900',
    justifyContent: "center",
  },
});