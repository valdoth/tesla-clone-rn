import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
const Controls = () => {
  return (
    <View style={styles.controls}>
      <Entypo name='lock' size={26} color='gray' />
      <MaterialCommunityIcons name='fan' size={26} color='gray' />
      <FontAwesome5 name='bolt' size={26} color='gray' />
      <Ionicons name='car-sport-sharp' size={26} color='gray' />
    </View>
  )
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
})

export default Controls
