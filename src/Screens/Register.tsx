import { Text, View, StyleSheet, TextInput, Button } from "react-native"
import tw from 'twrnc';
const Register = () => {
  return (
    <View style={tw`bg-black flex flex-col items-center h-full gap-10`}>
      <Text style={tw`text-white mt-10 text-2xl font-medium`}>Crea una cuenta</Text>
      <View style={tw`flex flex-col gap-5 mt-10`}>
        <Text style={tw`text-white text-center`}>Correo Electrónico</Text>
        <TextInput style={tw`bg-white`} />
      </View>
      <View style={tw`flex flex-col gap-5`}>
        <Text style={tw`text-white text-center`}>Constraseña</Text>
        <TextInput style={tw`bg-white`}/>
      </View>
      <View style={tw`flex flex-col gap-5`}>
        <Text style={tw`text-white text-center`}>Confirmar Constraseña</Text>
        <TextInput style={tw`bg-white`}/>
      </View>
      <Button title="Crear" />
    </View>
  );
}



export default Register