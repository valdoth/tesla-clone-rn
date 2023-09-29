import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native-web'
const MenuOption = ({ item }) => {
  return (
    <View style={styles.optionRow}>
      <View style={styles.optionLeft}>
        <MaterialCommunityIcons name={item.iconName} size={26} color='gray' />
        <Text style={styles.optionText}>{item.name}</Text>
      </View>
      <MaterialIcons name='keyboard-arrow-right' size={24} color='gray' />
    </View>
  )
}

const styles = StyleSheet.create({
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

export default MenuOption
