import { StyleSheet, Text, View,Modal,SafeAreaView,Button } from 'react-native'

import React , { useState } from 'react'

const ModalPractice = () => {
    const[showModal,setShowModal] = useState(false)
  return (
    <SafeAreaView style ={{flex:1}}>
    <View style={styles.centeredView} >
        <Modal
         animationType='slide'
         transparent={false}
         visible={showModal}
         onRequestClose={()=> alert('Model has Been closed')}
        >
            <View style ={styles.centeredView}>
                <Text style={styles.modalText}>ไฟในห้องปิดอยู่!</Text>
                <Button     
                    title='กรุณากดปุ่มเพื่อเปิดอีกครั้งไฟ'
                    onPress={()=> setShowModal(!showModal)}
                    style ={styles.buttonOpen}
                />
            </View>

        </Modal>
        {/* Upadat */}
        <View style={styles.modalView}>
            <Text style ={styles.modalText}>คุณลืมปิดไฟในห้อง!!!!!!</Text>
        <Button
            title='กรุณากดปุ่มเพื่อปิดไฟ'
            color={'#F194FF'}
            onPress={()=> setShowModal(!showModal)}
            
            
        />
        </View>
    </View>
    </SafeAreaView>
  )
}

export default ModalPractice

const styles = StyleSheet.create({centeredView: {flex: 1,justifyContent: 'center',alignItems: 'center',marginTop: 22,},
modalView: {margin: 20,backgroundColor: 'white',borderRadius: 20,padding: 35,alignItems: 'center',shadowColor: '#000',
shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 4,elevation: 5,},
button: {borderRadius: 20,padding: 10,elevation: 2,},
buttonOpen: {backgroundColor: '#F194FF',},
buttonClose: {backgroundColor: '#2196F3',},
textStyle: {color: 'white',fontWeight: 'bold',textAlign: 'center',},
modalText: {marginBottom: 15,textAlign: 'center',},});