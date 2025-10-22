import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Menu from './MenuScreen'; 

const bgImage = require('./assets/background.jpg');

export default function MenuScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    courseType: '',
    price: '',
  });

  const [starters, setStarters] = useState<any[]>([]);
  const [mains, setMains] = useState<any[]>([]);
  const [desserts, setDesserts] = useState<any[]>([]);
  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  }

  const handleSubmit = () => {
    const { name, description, courseType, price } = formData;

    if (!name || !description || !courseType || !price) {
      Alert.alert('Validation Error', 'Please fill out all fields.');
      return;
    }

    const newDish = { name, description, price };

    if (courseType === 'starter') {
      setStarters([...starters, newDish]);
    } else if (courseType === 'main') {
      setMains([...mains, newDish]);
    } else if (courseType === 'dessert') {
      setDesserts([...desserts, newDish]);
    }

    setFormData({ name: '', description: '', courseType: '', price: '' });
    setModalVisible(false);
  };

  return (
    <ImageBackground source={bgImage} style={styles.background} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>THE FOOD APP</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Total Dishes Available</Text>
          <Text>{starters.length + mains.length + desserts.length}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Menu</Text>
        </View>
        <Menu starters={starters} mains={mains} desserts={desserts} />
        <StatusBar style="auto" />
      </ScrollView>

      {!modalVisible && (
        <TouchableOpacity style={styles.floatingButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Add Food Item</Text>
        </TouchableOpacity>
      )}

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Add Food Details</Text>

            <TextInput
              style={styles.input}
              placeholder="Dish Name"
              value={formData.name}
              onChangeText={(text) => handleInputChange('name', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={formData.description}
              onChangeText={(text) => handleInputChange('description', text)}
            />
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={formData.courseType}
                onValueChange={(value) => handleInputChange('courseType', value)}
                style={styles.picker}
              >
                <Picker.Item label="Select Course Type..." value="" />
                <Picker.Item label="Starter" value="starter" />
                <Picker.Item label="Main" value="main" />
                <Picker.Item label="Dessert" value="dessert" />
              </Picker>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Price"
              keyboardType="numeric"
              value={formData.price}
              onChangeText={(text) => handleInputChange('price', text)}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
 
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    paddingTop: 60,
    paddingBottom: 120,
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  section: {
    width: '90%',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffffffaa',
    borderRadius: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    marginBottom: 10,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  submitButton: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
