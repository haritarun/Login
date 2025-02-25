import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoingPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);

  // Send OTP
  const sendOTP = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      Alert.alert('OTP Sent', 'An OTP has been sent to your phone number.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  // Verify OTP
  const verifyOTP = async () => {
    try {
      await confirm.confirm(code);
      Alert.alert('Success', 'Phone number verified!');
    } catch (error) {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter Phone Number (with country code)"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Send OTP" onPress={sendOTP} />

      <TextInput
        placeholder="Enter OTP"
        value={code}
        onChangeText={setCode}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button title="Verify OTP" onPress={verifyOTP} />
    </View>
  );
};

export default LoingPhone;