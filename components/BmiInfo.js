import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


class BmiInfo extends Component {
  state= {
    toggleInfo:{
      display: 'none',
    }
  }

  showInfo(){
    if(this.state.toggleInfo.display === 'none'){
      this.setState({
        toggleInfo:{
          display:'flex'
        }
      })
    }else{
      this.setState({
        toggleInfo:{
          display:'none'
        }
    })
  }


  };
  // 
  render(){

    return(
      <View>

        <View style={this.state.toggleInfo}>
          <View  style={styles.infoBox}>
            <Text style={styles.titleText}>BMI Information</Text>
            <Text style={styles.infoText}>Underweight {"<"}=18.5</Text> 
            <Text style={styles.infoText}>Normal weight = 18.5–24.9 </Text>
            <Text style={styles.infoText}>Overweight = 25–29.9</Text>
            <Text style={styles.infoText}>Obese {'>'}= 30</Text>
            <Text style={styles.titleText2}>Frame Size Information</Text>
            <Text style={styles.infoText}>
              Frame Size and level of muscularity will affect your acceptable BMI range. 
              If you have a large frame but do not exercise much then a BMI of 26 may mean you are still a healthy weight for example.
              If you happen to be a body builder and have a large frame then your BMI will probably not be a good way for you to determine what a healthy weight is for yourself.
              Conversely, if you have a small frame you may be healthy even if your BMI is slightly lower than the normal accepted range.
            </Text>
          </View>
        </View>
        
        <View>
          <TouchableOpacity 
            style={styles.button}
            onPress={()=>this.showInfo()}
          >
            <Text style={styles.buttonText}>General Info About BMI</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}
export default BmiInfo;

const styles = StyleSheet.create({
  infoBox:{

    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#d6ebeb',
    marginBottom: 10,
    marginTop: 10,
  },
  infoText: {
    color: 'white',  
    textAlign: 'center',
    fontSize: 22,
  },
  titleText: {
    color: 'white',  
    textAlign: 'center',
    fontSize: 32,
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  titleText2: {
    color: 'white',  
    textAlign: 'center',
    fontSize: 32,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'white'
  },
  button:{
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
  buttonText:{
    fontSize: 20,
    color: '#d6ebeb',
    textAlign: 'center',
  }
});