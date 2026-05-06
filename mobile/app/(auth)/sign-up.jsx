import React from 'react'
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native'
import { useRouter, Link } from 'expo-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

export default function SignUp() {
  const router = useRouter()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert("Berhasil daftar!")
      router.push('/sign-in')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        placeholder="Password"
      />

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Daftar</Text>
      </Pressable>

      <View style={styles.link}>
        <Text>Sudah punya akun? </Text>
        <Link href="/sign-in">
          <Text style={{ color: 'blue' }}>Login</Text>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  button: { backgroundColor: '#0a7ea4', padding: 12, alignItems: 'center' },
  buttonText: { color: '#fff' },
  link: { flexDirection: 'row', marginTop: 10 }
})