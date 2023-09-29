import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from '@expo/vector-icons'
import car from '../assets/images/car.png'
import menuOptions from '../data/menuOptions'
import MenuOption from '../components/MenuOption'

const Page = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name='user-circle' size={30} color='gray' />
      </View>

      <Image source={car} style={styles.image} resizeMode='contain' />

      <View style={styles.controls}>
        <Entypo name='lock' size={26} color='gray' />
        <MaterialCommunityIcons name='fan' size={26} color='gray' />
        <FontAwesome5 name='bolt' size={26} color='gray' />
        <Ionicons name='car-sport-sharp' size={26} color='gray' />
      </View>

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <MenuOption item={item} />}
      />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161818',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: '#eee',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: 'gray',
    fontWeight: '500',
  },
  image: {
    width: '100%',
    height: 300,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
})
