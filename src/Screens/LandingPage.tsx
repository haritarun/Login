import {  Image, StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import { useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const data =[
    {
        id:0,
        imageUrl:'https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg',
        content:"We provide user friendly and user experiences."
    },
    {
        id:1,
        imageUrl:'https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg',
        content:"We offer real-time solutions to keep you connected and updated instantly."
    },
    {
        id:2,
        imageUrl:'https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg',
        content:"Our services ensure quick and hassle-free delivery for your convenience."
    },
    {
        id:3,
        imageUrl:'https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg',
        content:"Integrated maps make navigation and tracking effortless and efficient."
    },


]



const LandingPage = () => {
    const navigation = useNavigation()
    const [activePage,setActivePage]=useState(data[0]);

    const getNext=()=>{

        if( activePage.id < data.length-1 ){
            setActivePage(data[activePage.id+1])
        }
        else{
            navigation.navigate("login")
        }
        
    }

    const getSkip=()=>{
        navigation.navigate("login")
    }
  return (
    <LinearGradient
      colors={['#76f3c1', '#ffffff']} 
      start={{ x: 0, y: 1 }} 
      end={{ x: 0, y: 0.3 }} 
      style={styles.container}
    >
        <View style={styles.imageContainer}> 
            <Image source={{uri:activePage.imageUrl}} style={styles.image}/>
            <Text style={styles.text}>{activePage.content}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.skipbutton} onPress={getSkip}>
                <Text style={styles.skiptext}>Skip</Text>
            </TouchableOpacity>
            {
                data.map((eachItem,index)=>(
                    
                    <Icon name={'dot-single'} 
                    style={styles.dotContainer}
                    color={index===activePage.id ? '#0b7eba':'gray'}
                    />
                    
                ))
            }
            <TouchableOpacity style={styles.skipbutton} onPress={getNext} >
                <Text style={styles.skiptext}>Next</Text>
            </TouchableOpacity>
        </View>
    </LinearGradient>
  )
}

export default LandingPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:80,
        paddingBottom:50
  },
    image:{
        height:300,
        width:400,
    },
    text:{
        marginTop:20,
        color:'#0b7eba',
        fontSize:30,
        fontFamily:'serif',
        textAlign:'center'
    },
    imageContainer:{
        padding:10,
    },
    skipbutton:{
        backgroundColor:'#54b6e9',
        borderRadius:25,  
        marginHorizontal:10
    },
    skiptext:{
        color:'white',
        padding:12,
        fontSize:20,
        letterSpacing:2,
        fontFamily:'serif',
        fontWeight:700
    },
    buttonContainer:{ 
        flexDirection:'row',
        alignItems:'center',  
    },
    dotContainer:{
        fontSize:30,
        marginHorizontal:2,
    }
})

