import { useEffect, useState } from 'react'
import { ApiUrl } from '../config/enviroment';
import { createUser } from '../Redux/actions/userAction';
import axios from 'axios'
import { Text, View, StyleSheet, TextInput, Button, TextInputChangeEventData } from "react-native"
import tw from 'twrnc';
import { AppDispatch } from '../Redux/Store/Store';
import { useDispatch } from 'react-redux';
const Register = () => {
  const [form, setForm] = useState({ name: "", password1: "", password2: "", email: "", phone: 0 })
  const dispatch: AppDispatch = useDispatch()
  //{ name, password, email, phone }

  const onChange = (value: any, type: string) => {
    setForm({
      ...form,
      [type]: value,
    });
  }

  const onPress = async () => {
    if (form.password1 == form.password2) {
      try {  
        // let { data } = await axios.post(
        //   "http://localhost:3000/users/createUser",
        //   { name: form.name, password: form.password1, email: form.email, phone: form.phone }
        // );
        // console.log(data)
        fetch('http://localhost:3000/users/getUsers').then((res)=>
          res.json()).then(res=> console.log(res)).catch((err)=>{console.log(err)})
      } catch (error) {
        console.log(error)
      }
      // dispatch(createUser({ name: form.name, password: form.password1, email: form.email, phone: form.phone }))
    }else{
      console.log('constraseñas no coinciden')
    }
  }





return (
  <View style={tw`bg-black flex flex-col items-center h-full gap-10`}>
    <Text style={tw`text-white mt-10 text-2xl font-medium`}>Crea una cuenta</Text>
    <View style={tw`flex flex-col gap-5 mt-10`}>
      
      <Text style={tw`text-white text-center`}>Nombre</Text>
      <TextInput onChange={(e)=>onChange(e.nativeEvent.text, 'name')} style={tw`bg-white`} />
    </View>
    <View style={tw`flex flex-col gap-5`}>
      <Text style={tw`text-white text-center`}>Correo Electrónico</Text>
      <TextInput onChange={(e) => onChange(e.nativeEvent.text, 'email')} style={tw`bg-white`} />
    </View>
    <View style={tw`flex flex-col gap-5`}>
      <Text style={tw`text-white text-center`}>Número de teléfono</Text>
      <TextInput onChange={(e) => onChange(e.nativeEvent.text, 'phone')} style={tw`bg-white`} />
    </View>
    <View style={tw`flex flex-col gap-5`}>
      <Text style={tw`text-white text-center`}>Constraseña</Text>
      <TextInput onChange={(e) => onChange(e.nativeEvent.text, 'password1')} style={tw`bg-white`} />
    </View>
    <View style={tw`flex flex-col gap-5`}>
      <Text style={tw`text-white text-center`}>Confirmar Constraseña</Text>
      <TextInput onChange={(e) => onChange(e.nativeEvent.text, 'password2')} style={tw`bg-white`} />
    </View>
    <Button title="Crear" onPress={onPress} />
  </View>
);
}



export default Register