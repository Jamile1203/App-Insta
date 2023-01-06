import React, {useState} from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,ScrollView,SafeAreaView,TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';


function InstaGitHubCard({githubUser}){
  const [liked, setLikeState] = useState(false);

    return(

      

      <View>

      {/* InstaCardHeader */}
<View style={styles.container}>


<View style={{marginLeft: 10}}>
       
     <Text>{githubUser}</Text>
     </View>
     <Image 
     style={{
      marginLeft: 10,
       width: 40,
       height:40,
       borderRadius:20,
 
     }}
       source ={{
       uri: `https://github.com/${githubUser}.png`
     }} 
     />
   {/* InstaCardHeader */}
   {/* InstaCardImage */}
    

<Image 
     style={{
       width: '100%',
       height: 350,
       
 
     }}
       source ={{
       uri: `https://github.com/${githubUser}.png`
     }} 
     />
       
       {/* InstaCardImage */}
       {/* Footer */}
       <View style={{flexDirection: 'row', padding: 15, alignItems:'center'}}>
       <TouchableOpacity onPress={() => setLikeState(!liked)}>
       {liked && <Ionicons name="ios-heart" size={24} color="red" />}
       {!liked && <Ionicons name="heart-outline" size={24} color="black" />}
       </TouchableOpacity>

       <View style={{padding: 10}}></View>
       <FontAwesome name="comment-o" size={24} color="black" />
       <View style={{padding: 10}}></View>
       <Feather name="send" size={24} color="black" />
       
       
       
       {/* Footer */}
     </View>
   </View>
   </View>
    )


}

export default function App() {

  return (

    
    


    <SafeAreaView style={styles.container}>


<StatusBar style= "auto" />


<Image 
     style={{
       width: '100%',
       height: 100,
    
       
       
     }}
       source={require('./assets/6.jpg')} 
    
     />
   


      <ScrollView>

    {[
      'Jamile1203',
      'AdrielGama',
      'RafaBallerini',
      'ClaudioDias77',
      'Murtinha',
      'RaldineyR'


    ].map((githubUser) => 
      <InstaGitHubCard key={githubUser} githubUser={githubUser}/>
    )}
    </ScrollView>
    </SafeAreaView>
    
  );
  }
 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    
  },
});
