import react from "react";
import { View ,StyleSheet,StatusBar,Text,FlatList,Image} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Person_1 from "./assets/person_1.jpg"
import Person_2 from "./assets/person_2.jpg"
import Person_3 from "./assets/person_3.jpg"
import Person_4 from "./assets/person_4.jpg"
import Person_5 from "./assets/person_5.jpg"
import Person_6 from "./assets/person_6.png"
const Component = () =>{
    const Results = useSafeAreaInsets();
    console.log(Results)
const Mydata=[
        {
            id:1,
            Img:Person_1,
            Name:"Durga",
            Msg:"Hai Hello"
        },
         {
            id:2,
            Img:Person_2,
            Name:"Madhu",
            Msg:"Coming or not ?"
        },
         {
            id:3,
            Img:Person_3,
            Name:"Hanumanth",
            Msg:"Single ?"
        },
         {
            id:4,
            Img:Person_4,
            Name:"Girish",
            Msg:"Sitting when ?"
        },
         {
            id:5,
            Img:Person_6,
            Name:"Gangadhar",
            Msg:"Kishore ni chudu ?"
        },
        {
            id:6,
            Img:Person_5,
            Name:"Sudheer",
            Msg:"Em prakash ..?"
        },
        {
            id:7,
            Img:Person_5,
            Name:"Sudheer",
            Msg:"Em prakash ..?"
        }
    ]
    return(
        <>
            <StatusBar barStyle="light-content" hidden />
            <View style={[Mystyles.MystatusBar,{paddingTop:Results.top}]}>
            </View>


        <FlatList
                data = {Mydata}
                renderItem={({item})=>(
                    <View style={Mystyles.parent}>
                        <View style={Mystyles.Image_View}>
                            <Image
                                style={Mystyles.Image_Tag}
                                source={item.Img}
                            />
                        </View>
                        <View style={Mystyles.infoparent}>
                            <Text style={Mystyles.SendName}>{item.Name}</Text>
                            <Text style={Mystyles.LastMsg}>{item.Msg}</Text>
                        </View>
                    </View>

                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id }
            />
        </>
    )
}
export default Component;

const Mystyles = StyleSheet.create({
    MystatusBar:{
        backgroundColor:"green"
    },
    parent:{
        width:"100%",
        flexDirection:'row',
        marginVertical:5,
        backgroundColor:"#D9D9D9"
    },
    Image_View:{
        width:50,
        height:50,
    },
    Image_Tag:{
        width:"100%",
        height:"100%",
        borderRadius:25
    },
    infoparent:{
        justifyContent:"space-evenly",
        marginLeft:10
    },
    SendName:{
        fontSize:19,
        fontWeight:40,
    },
    LastMsg:{
        fontSize:18
    }
})




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



        Sending data from one Screen to another Screen































*/