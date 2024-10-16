import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen'; // Import màn hình SignIn

const Stack = createStackNavigator();

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/8140 1.png')} // Hình nền của bạn
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Khu vực chứa logo, tiêu đề, phụ đề và nút */}
        <View style={styles.content}>
          <Image source={require('./assets/carrot.png')} style={styles.logo} />
          <Text style={styles.title}>Welcome to our store</Text>
          <Text style={styles.subtitle}>
            Get your groceries in as fast as one hour
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Đảm bảo hình nền phủ toàn màn hình
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end', // Đẩy nội dung xuống cuối màn hình
    paddingHorizontal: 20,
    paddingBottom: 50, // Khoảng cách từ nội dung đến đáy màn hình
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Nền đen mờ
  },
  content: {
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain', // Đảm bảo logo giữ nguyên tỉ lệ
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});