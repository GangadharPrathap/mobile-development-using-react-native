// import react from "react";
// import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from "react-native";
// import MyImage from "./assets/favicon.png"
// import { StatusBar } from "react-native";
// import Home from "./Home.jsx";
// import Contact from "./Contact.jsx";
// import Component from "./component.jsx";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import PasswordField from "./task.jsx";
// import {NavigationContainer} from "@react-navigation/native"
// import {createNativeStackNavigator} from "@react-navigation/native-stack"

// const Stack = createNativeStackNavigator()
// const App = () => {
//   return (
//     <>
//       {/* <SafeAreaProvider> */}

//         {/* <Component /> */}
//         {/* <PasswordField/> */}
//       {/* </SafeAreaProvider> */}
//       <NavigationContainer
//         screenOptions = {{
//           // title:"header"

//         }}
//       >
//         <Stack.Navigator>
//           <Stack.Screen name="Home" Component={Home}/>
//           <Stack.Screen name="Contact" Component={Contact}/>

//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   )
// }

// export default App;



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { Icon } from 'react-native-paper';
// import Home from './Home';
// import Contact from './Contact';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import {Icon} from 'react-native-paper';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createNativeStackNavigator()
// export default function App() {
//   return (
//    <NavigationContainer>
//     <Stack.Navigator
//       screenOptions={{
//         // title:"HAI"
//         // headerShown:false
//         // headerStyle:{
//         //   backgroundColor:"red"
//         // }
//         // headerTintColor:"red"
//         // headerTitleStyle:{
//         //   fontSize:26
//         // }
//         headerTitleAlign:"center",
//         headerRight:()=> <Icon source={"bell"} size={24}/>,
//         // headerLeft:() => <Icon source={"home"} size={24}/>,
//         headerBackButtonDisplayMode:"minimal",
//         animation:"fade"

//       }}
//     >
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Contact" component={Contact} />
//     </Stack.Navigator>
//    </NavigationContainer>
//   );
// }





// Stack Navigations
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { Icon } from 'react-native-paper';
// import Home from './Home';
// import Contact from './Contact';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();
// import Profile from './Profile';
// // import TabNavigation from './TabNavigation';
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* <Stack.Screen name="TabNavigation" component={TabNavigation}/> */}
//         <Stack.Screen name="Profile" component={Profile}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



// import react, { useState } from "react";
// import { View,Image,Text } from "react-native";
// import { Button } from "react-native-paper";
// import * as Imagepicker from 'expo-image-picker';
// import { SafeAreaView } from "react-native-safe-area-context";


// const Home = () =>{
//     const [ImagePath , setImagePath] = useState(null)
//     const LaunchGallary = async() =>{
//         const Response = await Imagepicker.requestMediaLibraryPermissionsAsync();
//         if(!Response.granted){
//             alert('Please Give Access to Media')
//             return;
//         }
//         const Data = await Imagepicker.launchImageLibraryAsync({
//             mediaTypes:"images",
//             allowsMultipleSelection:true,
//             allowsEditing:true,
//             quality:1
//         })
//         setImagePath(Data.assets)
//         console.log(Data.assets)
//     }
//     return(
//         <>
//           <SafeAreaView>
//             <Button mode="contained" onPress={LaunchGallary}>
//                     Tap Me!!!
//             </Button>
//             {
//                 ImagePath
//                 ? <View>
//                     {
//                         ImagePath.map((ele,index)=>{

//                             return <Image
//                                 key={index}
//                                 source={{uri:ele.uri}}
//                                 style={{width:200,height:200}}
//                             />
//                         })
//                     }
//                 </View>
//                 : <Text>No Images selected</Text>
//             }
//           </SafeAreaView>
//         </>
//     )
// }
// export default Home;


import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import * as Sharing from "expo-sharing";

export default function App() {

  const [ImagePath, setImagePath] = useState(null);

  const Choose = async () => {
    const permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissions.granted) {
      alert("Permission denied to access the gallery");
      return;
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!data.canceled) {
      setImagePath(data.assets[0].uri);
    }
  };

  const Share = async () => {
    const status = await Sharing.isAvailableAsync();

    if (!status) {
      alert("Sharing is not available in your device");
      return;
    }

    await Sharing.shareAsync(ImagePath);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>

      <Button mode="contained" onPress={Choose}>
        Choose Image
      </Button>

      {ImagePath ? (
        <>
          <Image
            source={{ uri: ImagePath }}
            style={{ width: 200, height: 200, borderRadius: 10 }}
          />

          <Button mode="contained" onPress={Share}>
            Share Image
          </Button>
        </>
      ) : (
        <Text>No image selected</Text>
      )}

    </View>
  );
}




// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { Icon } from 'react-native-paper';
// import Home from './Home';
// import Contact from './Contact';
// import  createDrawerNavigator from "@react-navigation/drawer"
// import { NavigationContainer } from '@react-navigation/native';
//      const DrawerNavigation = createDrawerNavigator
//       <NavigationContainer>
//         <DrawerNavigation.Navigator>
//           <DrawerNavigation.Screen name="Home" component = {Home}></DrawerNavigation.Screen>
//           <DrawerNavigation.Screen name="Settings" component = {Contact}></DrawerNavigation.Screen>
//         </DrawerNavigation.Navigator>
//       </NavigationContainer>


















/*
    the navigations are quite similar as in webdevelopment we use similar Js in react native as well
    Onclick => Onpress
    Onchange => Onchange
    Mostly we will be using only the Event listeners in this Applications there will be no DOM manipulations in this

    buttons,text,activity listener,badges,text input ,Helper text,icons,useStates components to caputre in some variables
    data.includes('@')


    **check boxes**
    which has a default status of uncheck inside if we give it as status check then it will be like selected
    customisations:{the colors will be applied only when the check box was in check state}
    in order make it like a button we will be using useState like;
        status={status ? check : uncheck}
        <button
            mode:Contained
            onPress : {()=> setStatus(!status)}>Click me</>

        However the check box is invisible when it was used without the label in ios but in android it was visible

    **Radio Button**

    same as like a check box but we will be giving the status in the string format

    **Switch**
    it is a toggle switch
    <switch
        value = {status}   the switch can be controlled
        onChange={()=>setStatus(!status)}
    />


    **Search Bar**
    it defaultly comes with an elevated edge like a default shaded color and works like an inpput field
    it has two modes:
        1.View(extends the entire search bar along the screen)
        2.bar(default case)
    <SearchBar  />

    **Chip**
        it is like a badge format similar badges created using div (onClose functions are used only in this chips)
    <Chip
        Onclose:{()=>alert("closed")}
    >My hoome</>


    23-02-2026
    ****** Navigation in ReactNative ********
    there are three types of navigations ::
    1. Top bar Navigations
    2. Bottom bar Navigations
    3. Stack Navigations
    4. Drawer Navigations

    ---------------------  STACK NAVIGATIONS  -------------------
    the stack navigations as based on the stack ds format just LIFO format( When the stack becomes empty the entire application will get closed automatically)
    Packages required :
        @react-navigation/native
        @react-native-screens
        @react-native-safe-area-context         these three are mandatory to use navigations
        react-navigation/native-stack

    different screens are required in order to use the navigations
    create Home.jsx
    create contact.jsx
    now we create a navigation container in order to perform the navigations
    in order to perform any operations on the screen like titles,customisations we use screenOptions tag to do customisations in block
    Customisations:::
        1. Title:"   " to put a title
        2. headerShown : True/False in order to display the header or not
        3. headerStyle:{
            backgroundColor:"red" to change the background colors of the header
        }
        4. headerTintColor: "red"  it is used to change the color of the content present in the header
        5. headerTitleStyle:{
            fontsize: "26"

            }any kind of customizations related to font of the header we use this tag
        6.  headerTitleAlign: "Center"
        if we are using the native stack navigations we are not able to change the alignment of the title name in ios
        but in the android it was possible to change the alignment
        7. headerRight:()=><Icon source = {Bell} size = {24}>
        this tag is used in order to place anything like icons or buttons on the header at right position
        8. headerLeft: ()=><Icon source = {Home} size = {24}> similar to that of headerRight()
        9. headerBackButtonDisplayMode:"minimal" then in ios screen the previous screen data won't be mentioned
        10. animation:"" this is used to add some customised animations while we are changing in between the screens



    ---------------- BOTTOM TAB NAVIGATIONS --------------------
    best example for the bottom tab navigations is instagram
    import the naviagtion container from the react-naviagtion/native
    import tthe createbottomtabnavigator from the @react-navigation/bottom-tab
    const BottomTabNavigator = createbottomtabnavigator()
    <NavigationContainer>
      <BottomTabNavigation.Navigator>
        <BottomTabNavigation.Screen name = "Home" component = {Home}/>
        <BottomTabNavigation.Screen name = "Contact" component = {Contact}/>
      </>
    </>

    :::::Customizations:::::
    the customisations will be applied for the entire navigations or can be applied for individual as well
    screenOptions={}
    1. TabBarActiveTintcolor: used in order to change the color active components
    2. TabBarInActiveTintcolor: used in order to change the color inactive components
    3. tabBarLabelStyle: this is used in order to change the font related stylings for the labels that are mentioned
        1. fontSize: change the label font size
        2. borderWidth: add some border only for the text labels
    4. tabBarItemStyle: the tab bar items are the no of blocks that are present in the bottom bar like: home block and contact block
    in order to do some stylings we use tabBarItemStyles
          we use tags like height,width
    5. tabBarIcon: it is used in order to customise the icon in the tabs now we follow this procedure in order to put dynamic icons
      screenOptions={({route})=>{
        tabBarIcon:({})=>{
          if(route.name == 'Home')      while using this format the icon won't be able to change its state whether it is acitve or not
          return<Icon source ={"home"}/>
          if(route.name == 'Contact')
          return<Icon source ={"car"}/>
          }
        }}


        tabBarIcon:({focused,color})=>{
          let IconName;
          if(route.name == "Home"){
              IconName = focused ? "Home" : "home-outline"
          }
          if(route.name == "Contact"){
              IconName = focused ? "contact" : "contact-outline"
          }
          return<Icon source ={IconName} size={30} color={color}/>
          },
          tabbaractivetintcolor = "green",
          tabBarActiveTintColor = "red"
        }}

    ------------------ STACK + BOTTOM NAVIGATIONS-----------------
    the tabnavigation componenet will be having the entire code for the bottom tab navigations now in app.js we use
    const Stack = createNativeStackNavigator();
    import profile
    import tabNaviagtions
    <NavigationContainer> only one should be there so remove it in the TabNavigation
      <Stack.Navigator>
        <Stack.Screen name = "TabNavigation" component = {TabNavigation}/>
        <Stack.Screen name = "Profile" component = {profile}/>

        in contact page
        we will add a button to change the page from the contact page to the profile page





     ------------------ DRAWER NAVIAGTIONS--------------------------------
     react-navigation/drawer is the most important command in order make the navigations work
     implementation is very similar to that of remaining naviagtions
     import  createDrawerNavigator
     const DrawerNavigation = createDrawerNavigator
      <NavigationContainer
        ScreenOptions: {
        drawerActiveTintColor = "green",
        drawerInactiveTintColor = "greenish yellow",
        drawerActiveBackgroundColor = "pink",
        drawerInactiveBackgroundColor = "blue",
        drawerPosition:"right",///left is default
        drawerLabelStyle:{
        font customisations
        },
        drawerStyles:{used to customize the drawer panel
          width:
        },
        drawerItemStyle:{},
        drawerlabel:{},
        drawerIcon: () => (<Icon source = {"Home"} />)
        }
      >
        <DrawerNavigation.Navigator>
          <DrawerNavigation.Screen name="Home" component = {Home}>
          <DrawerNavigation.Screen name="Settings" component = {Contact}>



      ---------- CORE React Native Concepts -----------
      Native modules of React Native
      Today class is about accessing the gallery or photos in the mobile using react native
      we have to use the expo-image-picker package in order to access the gallery in the mobile
      npm install expo-image-picker but we use npx expo install expo-image-picker
      in order to check the permissions we use the following code
      import * as ImagePicker from "expo-image-picker"
      const LaunchGallery = async ()=>{
        const resp = await ImagePicker.requestMediaLibraryPermissionsAsync()
        console.log(resp)
        if(!resp.granted){
          alert("Permission requested to access the gallery")
          return;
          }
        }
          const data = await ImagePicker.launchImageLibraryAsync(){
            allowsEditing:true,
            aspect:[4,3],
            mediaTypes:"Images",
            allowsMultipleSelection:true,

            quality:1
          }
            // when i use the multiple selection the data will be in the form of array of objects and when i use the single selection the data will be in the form of object
             console.log(data)
             setImagePath(data.assets)
             console.log(data.assets)



          this is used to launch the gallery in the mobile
      <Button mode = "contained" onPress={LaunchGallery}>Open Gallery</Button>
      {
        ImagePath
        ? <Image source={{uri:ImagePath}} style = {{width:200,height:200}}/>
        : <Text>No image selected</Text>
      }

      {
          ImagePath
          ? ImagePath.map((ele,index)=>{
            return <Image
                source = {{uri:ele.uri}}
                style = {{width:200,height:200}}
                key={index}
            />
          })
          : <Text>No image selected</Text>
      }

      }


    ---------------------------  file sharing ------------------------------------
    i will be creating a button in order send the image to another app
    import * as Imagepicker from "expo-image-picker"
    import {useState} from "react"
    import * as Sharing from "expo-sharing" -----> new package npm i expo-sharing
    const [ImagePath,setImagePath] = useState(null)
    const Choose = async()=>{
            const permissions = await ImagePicker.requestMediaLibraryPermissionsAsync()
            console.log(permissions)
            if(!permissions.granted){
            alert("Permission denied to access the gallery")
            return;}
            const data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:"Images",
                quality:1,

            })
                console.log(data.assets[0].uri)
                setImagePath(data.assets[0].uri)
            }
        }
    const Share = async()=>{
        const status = await Sharing.isAvailableAsync()  // this is used to check whether the sharing option is available in the mobile or not
        if(!status){
            alert("Sharing is not available in your device")
            return;
        }
        await Sharing.shareAsync(ImagePath)  // this is used to share the image to another app

        }
    return(
    <View>
        <Button mode = "contained" onPress={Choose}>Choose Image</Button>
        {
            ImagePath
            ? <Button mode = "contained" onPress={Share}>Share Image</Button>
            : <Text>No image selected</Text>
        }
        <Button>share</Button>
    </View>
)

































*/
