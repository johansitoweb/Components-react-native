import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       un componente llamado texto..
      </Text>
     <Card style={styles.popeh}>
     <Text>texto adentro de de una card</Text>
     </Card>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
 
  // logo: {
  //   height: 128,
  //   width: 128,
  // }
});
