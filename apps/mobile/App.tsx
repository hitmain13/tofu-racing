import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0b0b0b',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: '#f5f5f5', fontSize: 20 }}>Tofu Racing</Text>
      <Text style={{ color: '#9aa0a6', marginTop: 8 }}>
        Base mobile pronta para evoluir.
      </Text>
      <StatusBar style="light" />
    </View>
  )
}
