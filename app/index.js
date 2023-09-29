import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons'
import car from '../assets/images/car.png'
import menuOptions from '../data/menuOptions'

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
        renderItem={({ item }) => (
          <View style={styles.optionRow}>
            <View style={styles.optionLeft}>
              <MaterialCommunityIcons
                name={item.iconName}
                size={26}
                color='gray'
              />
              <Text style={styles.optionText}>{item.name}</Text>
            </View>
            <MaterialIcons name='keyboard-arrow-right' size={24} color='gray' />
          </View>
        )}
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
  },
  optionRow: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#eee',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
})
