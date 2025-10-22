import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>We started in 1947 as a small resturant in Durban Kwazulu-Natal we had few customers and fewer employees. Over the years we have learnt from
        many mistakes and have grown to be a small chain of resturants across South Africa. Our mission is to provide quality food at affordable prices while maintaining excellent customer service.
        Our team is made up of passionate individuals who are dedicated to making your dining experience memorable. From our chefs to our waitstaff, everyone plays a crucial role in delivering the best service possible
        Thank you for being a part of our journey. We look forward to serving you for many more years to come!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
