import React,{useState} from "react";
import{Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
Button,
TouchableOpacity,
Pressable} from "react-native";

function MyCustomButton(props){
 
return (
<TouchableOpacity style={[styles.button,{marginStart:16}]} onPress={props.onPress}>
  <Text style={styles.button}>{ props.title}</Text>
</TouchableOpacity>);
}

function App()
{
const [count,setCount] = useState(0);

  const sayacArttir=()=>{
      setCount(count+1);
 
  };
  const sayacAzalt=()=>{
      setCount(count-1);
      alert(count);
       
  };
    return(
    <SafeAreaView>
        <View style={styles.container}>
      <Image source={{uri:"https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png"}} style={styles.Tasarım}/>
     <Text style={styles.Text}>Counter:{count}</Text>
      <Text style={styles.subtitle}>Click buttons to change the counter.</Text>
            <View style={styles.buttoncontainer}>
                 <MyCustomButton title="Increment+" onPress={sayacArttir}/>
                <MyCustomButton title="Decrement-"onPress={sayacAzalt}/>
             </View>
          </View>
    </SafeAreaView>);
  
}
const styles= StyleSheet.create({
  container:{
margin:16,
  },

  Text:{
    fontSize:50,
  },

  subtitle:{
     fontSize:20,
    color:'gray',
    marginTop:8,
  },

  Tasarım:{
    //marginHorizontal:16,
    borderRadius:12,
    height:180,
  },
  buttoncontainer:{
    marginTop:16,
    flexDirection:"row", //Butonlar yan yana yine işlemler container da
  },
  button:{
    backgroundColor:"lightblue",
    padding:12,
    borderRadius:12,
    alignItems:"center", //Yazıyı Ortala 
  },

})
export default App;
