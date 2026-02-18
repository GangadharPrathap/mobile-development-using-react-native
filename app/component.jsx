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



*/