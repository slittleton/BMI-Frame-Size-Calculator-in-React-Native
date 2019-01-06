import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, 
        TextInput, Picker, TouchableOpacity, Slider} from 'react-native';



// Error Messages
const emptyFieldError = 'You will need to answer all fields to get your results';


class BmiAndFrameSize extends Component{
state = {
  //Inputs
  sex: null,
  heightFeet: null,
  heightInches: null,
  weight: null,
  wrist: null,
  //Results Variables
  bmi: null,
  frameSize: null,
  // Error Message
  errorMsg: null,
  // Results Display
  display:{
    display: 'none',

  },

}


calculateStuff(){

  if (this.state.sex === null ||
      this.state.heightFeet === null ||
      this.state.heightInches === null ||
      this.state.weight === null ||
      this.state.wrist === null )
  {
    this.errorMsg(emptyFieldError);
  } else { 
    //Compute BMI
    const metricWeight = this.state.weight * 0.45;
    const inchesHeight = (Number(this.state.heightFeet) * 12) + Number(this.state.heightInches);
    const metricHeight =  inchesHeight * 0.025;

    const rawBMI = (metricWeight/(Math.pow(metricHeight, 2))).toFixed(2);
    

    this.setState({
      bmi: rawBMI,
    })

    //Compute Frame Size
 
    const wrist = this.state.wrist;
    const sex = this.state.sex;
    let frameSize;

    if(sex==='female'){
      // short female height
      if (inchesHeight < 62){
        if(wrist < 5.5){
          frameSize='Small'
        }else if(wrist >= 5.5 &&  wrist <= 5.75){
          frameSize='Medium'
        }else if(wrist > 5.75){
          frameSize='Large'
        }
        // medium female height
      } else if (inchesHeight >= 62 && inchesHeight <= 65){
        if(wrist < 6){
          frameSize='Small'
        }else if(wrist >= 6.00 && wrist <= 6.25){
          frameSize='Medium'
        }else if(wrist > 6.25){
          frameSize='Large'
        }
        //tall female height
      }else if (inchesHeight > 65){
        if(wrist< 6.25){
          frameSize='Small'
        }else if(wrist >= 6.25 && wrist <= 6.5){
          frameSize='Medium'
        }else if(wrist > 6.5){
          frameSize='Large'
        }
  
      }
    }else if (sex==='male'){
        if(wrist <= 6.49){
          frameSize='Small';
        }else if(wrist >= 6.5 && wrist <= 7.5){
          frameSize='Medium'
        }else if(wrist >= 7.6){
          frameSize='Large'
        }
      }


    this.setState({
      
      frameSize: frameSize,
      display: {
        display: 'flex',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#d6ebeb',

      },
    })

  }


}
errorMsg(msg){

  this.setState({
    errorMsg: msg
  })

  setTimeout(()=>this.setState({
    errorMsg:null
  }), 3000)

}


render(){
  return(
    <View >

      <View>
        <Text style={styles.header}>BMI &amp; Frame Size Calculator</Text>
        <Text style={styles.textStyle}>Please enter your information</Text>
      </View>

      <View>
      {/* <Text style={styles.textStyle}>Please Choose A Sex</Text> */}
        <Picker textStyle={{fontSize: 20}}
           style={styles.picker}
          selectedValue={this.state.sex}
          onValueChange={(value)=>{this.setState({sex:value})}}
        >
          <Picker.Item label=" - - - Please Choose Sex" value=""  textStyle={{fontSize: 20}}/>
          <Picker.Item label="Female" value="female" textStyle={{fontSize: 20}}/>
          <Picker.Item label="Male" value="male" textStyle={{fontSize: 20}}/>
        </Picker>
      </View>





      <View>
      <TextInput 
        style={styles.textInput}
        placeholderTextColor={'#9a9a9a'}
        keyboardType='numeric'
        placeholder="Height feet"
        onChangeText={(ft)=>{this.setState({heightFeet: ft})}}
      />
      <TextInput 
        style={styles.textInput}
        placeholderTextColor={'#9a9a9a'}
        keyboardType='numeric'
        placeholder="Height Inches"
        onChangeText={(inches)=>{this.setState({heightInches: inches})}}
      />
      <TextInput
        style={styles.textInput} 
        placeholderTextColor={'#9a9a9a'}
        keyboardType='numeric'
        placeholder="Weight lbs"
        onChangeText={(lbs)=>{this.setState({weight: lbs})}}
      />
      <TextInput 
        style={styles.textInput}
        placeholderTextColor={'#9a9a9a'}
        keyboardType='numeric'
        placeholder="Wrist Circumference Inches"
        onChangeText={(circumference)=>{this.setState({wrist: circumference})}}
      />
      </View>

      

      <View>
        <TouchableOpacity 
          style={styles.btn}
          onPress={()=>this.calculateStuff()}>
          <Text style={styles.btnText}>Calculate</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.errorMsg}>{this.state.errorMsg}</Text>

      <View style={this.state.display}>
        <Text style={styles.displayText}>BMI: {this.state.bmi}</Text>
        <Text style={styles.displayText}>Frame Size: {this.state.frameSize}</Text>
      </View>

    </View>
  )
}

}

export default BmiAndFrameSize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header:{
    fontSize:35,
    fontWeight: 'bold',
    color: '#d6ebeb',
    textAlign: 'center',
    marginTop: 40,
    backgroundColor: "#024753",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#d6ebeb',
  },
  textStyle:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  textInput:{
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  picker:{
    color: 'white',
    backgroundColor: 'gray',
    marginRight: 60,
    marginLeft: 60,

  },
  btn:{
    backgroundColor: '#024753',
    borderRadius: 5,
    marginRight: 70,
    marginLeft: 70,
    marginTop: 10,
    marginBottom: 10,
    height: 30,
    borderWidth: 1,
    borderColor: '#d6ebeb',

  },
  btnText:{
    fontSize: 20,
    color: '#d6ebeb',
    textAlign: 'center',
  },
  infoText:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  displayText:{
    color: '#d6ebeb',
    fontSize: 25,
    textAlign: 'center',
    backgroundColor:'#024753',
    padding:5,

  },
  errorMsg:{
    color: 'tomato',
    textAlign: 'center',
    fontSize: 20,

  }

});