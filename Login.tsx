import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

type Props = {
  navigation: any;
};

export default function LoginScreen({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'chef' | 'customer' | ''>('');

  const handleLogin = () => {
    if (!username || !password || !role) {
      Alert.alert('Error', 'Please fill all fields and select role');
      return;
    }

    if (role === 'chef' && username === 'chef' && password === 'chef123') {
      navigation.replace('Home'); // chef also goes to Home
    } else if (role === 'customer' && username === 'customer' && password === 'cust123') {
      navigation.replace('Home');
    } else {
      Alert.alert('Login Failed', 'Incorrect username, password or role.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleButton, role === 'chef' && styles.selectedRole]}
          onPress={() => setRole('chef')}
        >
          <Text style={styles.roleText}>Chef</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.roleButton, role === 'customer' && styles.selectedRole]}
          onPress={() => setRole('customer')}
        >
          <Text style={styles.roleText}>Customer</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.hintText}>
        For demo use: {'\n'}
        Chef: username: chef, password: chef123 {'\n'}
        Customer: username: customer, password: cust123
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  roleButton: {
    borderWidth: 1,
    borderColor: '#666',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  selectedRole: {
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
  },
  roleText: {
    color: 'black',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 25,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  hintText: {
    marginTop: 30,
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
});
