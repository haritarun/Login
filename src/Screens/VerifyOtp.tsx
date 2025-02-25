import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VerifyOtp = ({route}) => {
  const {data} = route.params
  return (
    <View>
      <Text>{data.email}</Text>
      <Text>{data.password}</Text>
    </View>
  )
}

export default VerifyOtp

const styles = StyleSheet.create({})