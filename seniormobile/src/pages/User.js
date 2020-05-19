/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Linking } from 'react-native'
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { Divider } from 'react-native-paper';
import CollapsibleList from "react-native-collapsible-list";
import Icon from 'react-native-vector-icons/FontAwesome5';



export default class User extends Component {


    render() {

        return (

            <View style={styles.container}>
                <Header
                    containerStyle={{ width: '100%', backgroundColor: '#09203f', borderBottomWidth: 0, maxHeight: '5%' }}
                    centerComponent={{ text: 'User', style: { color: '#fff', marginBottom: '8%', fontSize: 18 } }}

                />
                <View style={styles.containertop}>
                    <Icon name="user-alt" style={styles.usericon}/>
                </View>
                <View style={styles.logoutbutton}>
                       <Text style={styles.useridtext}> Welcome 21201580 </Text>
                   </View>
                <View style={styles.logoutbutton}>
                       <Text style={styles.logoutbuttontext}>Logout</Text>
                   </View>
                <ScrollView>
              
                <CollapsibleList
                    numberOfVisibleItems={1}
                    wrapperStyle={styles.wrapperCollapsibleList}
                    buttonContent={
                        <View style={styles.button}>
                            <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons} /></Text>
                        </View>
                    }
                >
                    <View style={styles.collapsibleItem}>
                        <Text style={styles.coursestakenheader}><Icon name="chevron-circle-right" style={styles.icons} />&nbsp;&nbsp;&nbsp;Courses Taken</Text>
                    </View>
                    <View style={styles.collapsibleItem}>
                        <Text>Course Name : </Text>
                        <Text>Course Name : </Text>

                    </View>
                  
                   
                 


                </CollapsibleList>
                
                <CollapsibleList
                    numberOfVisibleItems={1}
                    wrapperStyle={styles.wrapperCollapsibleList}
                    buttonContent={
                        <View style={styles.button}>
                            <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons} /></Text>
                        </View>
                    }
                >
                    <View style={styles.collapsibleItem}>
                        <Text style={styles.coursestakenheader}><Icon name="chevron-circle-right" style={styles.icons} />&nbsp;&nbsp;&nbsp;Appointments</Text>
                    </View>
                    <View style={styles.collapsibleItem}>
                        <Text>Appointment : </Text>
                        <Text>Appointment Date : </Text><Text>{'\n'}</Text>
                        <Text>Appointment : </Text>
                        <Text>Appointment Date : </Text><Text>{'\n'}</Text>

                    </View>
                  
                   
                 


                </CollapsibleList>

                <CollapsibleList
                    numberOfVisibleItems={1}
                    wrapperStyle={styles.wrapperCollapsibleList}
                    buttonContent={
                        <View style={styles.button}>
                            <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons} /></Text>
                        </View>
                    }
                >
                    <View style={styles.collapsibleItem}>
                        <Text style={styles.coursestakenheader}><Icon name="chevron-circle-right" style={styles.icons} />&nbsp;&nbsp;&nbsp;About</Text>
                    </View>
                    <View style={styles.collapsibleItem}>
                        <Text style={styles.centerpersonnel}>Center Personnel </Text>
                        <Divider/>
                        <Text style={styles.personnelname}>Ahsen Küçükdurmaz <Text style={styles.personnelcontent}> Director</Text><Text style={styles.funcmailText} onPress={() => Linking.openURL('mailto:ahsen@bilkent.edu.tr') } >{'\n'}Press to Send E-mail</Text></Text>
                        
                        <Text>{'\n'}</Text>
                        <Divider/>
                        <Text style={styles.personnelname}>K. Koray Şeşenoğlu <Text style={styles.personnelcontent}> Sports Facilities and Swimming Pool Technical Supervisor</Text> <Text style={styles.funcmailText} onPress={() => Linking.openURL('mailto:kkoray@bilkent.edu.tr') }>{'\n'}Press to Send E-mail</Text></Text>
                       
                        <Text>{'\n'}</Text>
                        <Divider/>
                        <Text style={styles.personnelname}>Orhan Saffetoğlu <Text style={styles.personnelcontent}> Main Sports Hall Facilities Supervisor</Text><Text style={styles.funcmailText} onPress={() => Linking.openURL('mailto:orhans@bilkent.edu.tr') }>{'\n'}Press to Send E-mail</Text></Text>
                        
                        <Text>{'\n'}</Text>
                        <Divider/>
                        <Text style={styles.personnelname}>Ercan Turgut <Text style={styles.personnelcontent}> East Sports Hall Facilities Supervisor</Text>   <Text style={styles.funcmailText} onPress={() => Linking.openURL('mailto:tercan@bilkent.edu.tr') } >{'\n'}Press to Send E-mail</Text></Text>
                     
                        <Text>{'\n'}</Text>
                        <Divider/>
                        <Text style={styles.personnelname}>Meral Erol <Text style={styles.personnelcontent}> Administrative Assistant</Text><Text style={styles.funcmailText} onPress={() => Linking.openURL('mailto:meralerol@bilkent.edu.tr') }>{'\n'}Press to Send E-mail</Text></Text>
                        
                        <Text>{'\n'}</Text>
                        <Divider/>
                        <Text style={styles.personnelname}>Fırat Bingöl <Text style={styles.personnelcontent}> Fitness Trainer</Text><Text style={styles.funcmailText} onPress={() => Linking.openURL('mailto:firatbi@bilkent.edu.tr') }>{'\n'}Press to Send E-mail</Text></Text>
                        
                        <Text>{'\n'}</Text>
                        <Divider/>
                        <Text style={styles.personnelname}>Elif İçke <Text style={styles.personnelcontent}> Receptionist</Text><Text style={styles.funcmailText} onPress={() => Linking.openURL('mailto:elificke@bilkent.edu.tr') } >{'\n'}Press to Send E-mail</Text></Text>
                        
                        <Text>{'\n'}</Text>
                        <Text style={styles.personnelcontent}>Part-time Sports Instructors: Qualified part-time sports instructors also work in the areas of aerobic/step, fitness/conditioning, martial arts and racket sports.</Text>
                        <Divider/>
                        <Text style={styles.centerpersonnel1}>Hours of Operation for Facilities:</Text>
                        <Text style={styles.personnelcontent}>Sports Center (Dormitories Sports Hall){'\n'}
                        Weekdays: 07:30 a.m. – 11:00 p.m. {'\n'}
                        Weekends: 09:00 a.m. – 11:00 p.m.</Text>
                        <Text>{'\n'}</Text>
                        <Text style={styles.personnelcontent}>Swimming Pool (Monday closed){'\n'}
                        Weekdays: 08:00 a.m. – 10:15 p.m. {'\n'}
                        Weekends: 09:00 a.m. – 10:15 p.m.</Text>
                        <Text>{'\n'}</Text>
                        <Text style={styles.personnelcontent}>Main Sports Hall{'\n'}
                        Everyday: 08:30 a.m. – 10:00 p.m.{'\n'}
                       </Text>
                       <Text>{'\n'}</Text>
                        <Text style={styles.personnelcontent}>East Sports Hall{'\n'}
                        Everyday: 08:30 a.m. – 10:00 p.m.{'\n'}
                       </Text>
                       <Text>{'\n'}</Text>
                        <Text style={styles.personnelcontent}>Outdoor Tennis Courts (Main / East){'\n'}
                        Everyday: 10:00 a.m. – 10:00 p.m.{'\n'}
                       </Text>
                       <Text>{'\n'}</Text>
                        <Text style={styles.personnelcontent}>Indoor Tennis Courts (Main){'\n'}
                        Everyday: 10:00 a.m. – 10:00 p.m.{'\n'}
                       </Text>
                       <Text>{'\n'}</Text>
                        <Text style={styles.personnelcontent}>Mini Football Fields (Main / East){'\n'}
                        Everyday: 10:00 a.m. – 11:00 p.m.{'\n'}
                       </Text>
                       <Divider/>
                    </View>
                  
                   
                 


                </CollapsibleList>

                <CollapsibleList
                    numberOfVisibleItems={1}
                    wrapperStyle={styles.wrapperCollapsibleList}
                    buttonContent={
                        <View style={styles.button}>
                            <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons} /></Text>
                        </View>
                    }
                >
                    <View style={styles.collapsibleItem}>
                        <Text style={styles.coursestakenheader}><Icon name="chevron-circle-right" style={styles.icons} />&nbsp;&nbsp;&nbsp;Contact</Text>
                    </View>
                    <View style={styles.collapsibleItem}>
                    <Text style={styles.personnelname}>Physical Education and Sports Center</Text>
                    <Divider/>
                    <Text onPress={()=>{Linking.openURL('tel:+903122901993');}} style={styles.funcNavText}>Telephone: +90-312-290-1993</Text>
                    <Text>Fax: +90-312-266-4267</Text>
                    <Text style={styles.funcmailText} onPress={() => Linking.openURL('mailto:spor@bilkent.edu.tr') } >spor@bilkent.edu.tr</Text>
                    <Divider/>
                    <Text style={styles.personnelname1}>Director: Ahsen Küçükdurmaz</Text>
                    <Text onPress={()=>{Linking.openURL('tel:+903122903190');}} style={styles.funcNavText}>Telephone: +90-312-290-3190</Text>
                 
                    </View>
                  
                   
                 


                </CollapsibleList>
               
                
                
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    usericon:{
fontSize:80,
color:'gray',

    },
    useridtext:{
fontSize:16,
    },
    containertop:{
        marginTop:'6%',
        alignSelf:'center',
        marginBottom:'5%',
    },
    funcNavText:{
color:'#09203f',
fontWeight:'bold',

    },
    funcmailText:{
        color:'#09203f',
        fontWeight:'bold',
      
        
            },
    centerpersonnel:{
        fontWeight: "bold",
        fontSize: 14,
        marginBottom:'2%',
    },
    centerpersonnel1:{
        fontWeight: "bold",
        fontSize: 14,
        marginBottom:'2%',
        marginTop:'3%',
    },
    emailbutton:{
       color:'red',
        width:'100%',
        height:30,
        marginTop:'1%',
    },
    personnelname:{
        marginTop:'1%',
        marginBottom:'1%',
        fontWeight: "bold",
    },
    personnelname1:{
        marginTop:'2%',
        marginBottom:'2%',
        fontWeight: "bold",
    },
    personnelcontent:{
       fontWeight:"400",
    },
    coursestakenhead: {
        marginTop: '3%',
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    coursestaken: {
        width: '90%',
        backgroundColor: 'white',
        height: 'auto',
        alignSelf: 'center',
        borderRadius: 20,
    },
    contentcoursestaken: {
        marginLeft: '2%',
        marginTop: '2%',
        marginBottom: '4%',
    },
    appointmentshead: {
        marginTop: '3%',
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    Appointments: {
        width: '90%',
        backgroundColor: 'white',
        height: 'auto',
        alignSelf: 'center',
        borderRadius: 20,
    },
    contentappointments: {
        marginLeft: '2%',
        marginTop: '2%',
        marginBottom: '4%',
    },
    bosluk: {
        marginTop: '5%',
    },

    enrollButtonStyle: {
        width: '100%',
        backgroundColor: "#09203f",


    },
    coursestakenheader: {

        flex: 2,
        justifyContent: "space-around",
        fontWeight: "bold",

    },

    wrapperCollapsibleList: {
        flex: 1,
        marginTop: 10,
        overflow: "hidden",
        backgroundColor: "#FFF",
        borderRadius: 10,
        width:'90%',
        alignSelf:'center',


    },
    collapsibleItem: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#CCC",
        padding: 10,



    },
    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
    },
  
    icons: {
        color: "red",
        fontSize: 15,

    },
    logoutbutton:{
        marginTop:'1%',
        marginBottom:'5%',
        alignSelf:'center',
     
    },
    logoutbuttontext:{
        fontSize:16,
        color:'#09203f',
        fontWeight:'bold',
    },

});