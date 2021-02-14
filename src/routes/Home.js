import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AppTitleBar from '../components/AppTitleBar';
import {Picker} from '@react-native-picker/picker';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


import EIcon from 'react-native-vector-icons/Entypo';

function credit(item) {
  return item.credit;
}

function sum(prev, next) {
  return prev + next;
}

const HomePage = () => {
  const [state, setState] = React.useState([
    {
      key: 0,
      grade: 8,
      credit: 3,
    },
  ]);

  const [cgpa,setCgpa] = React.useState(0)

  const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSelectChange = (key, value) => {
    const result = state.map((data) => {
      if (data.key === key) {
        data.grade = value;
        return data;
      } else {
        return data;
      }
    });
    setState(result);
  };

  const handleCreditChange = (key, value) => {

    if((Number(value) <= 10) || value === undefined || value === '' ){
      const result = state.map((data) => {
        if (data.key === key) {
          data.credit = value;
          return data;
        } else {
          return data;
        }
      });
      setState(result);
    }
   
  };

  const addNewField = () => {
    let newField;
    if (state.length === 1) {
      newField = {
        grade: 5,
        credit: 4,
        key: 1,
      };
    } else {
      newField = {
        grade: 5,
        credit: 4,
        key: state.length,
      };
    }
    setState([...state, newField]);
  };

  const calculateCgpa = () => {
    const resData = state;
    var total_credits = 0;
    var total_score = 0;
    resData.map(data =>{
        total_credits = total_credits +parseFloat(data.credit);
        total_score = total_score + (parseFloat(data.credit)*parseInt(data.grade))
    })

    console.log(total_credits);
    console.log(total_score)
    console.log(((total_score/total_credits).toFixed(2)/10)*100)
    setCgpa((total_score/total_credits).toFixed(2))
  };

  const resetAllFields = () => {
      setState([ {
        key: 0,
        grade: 8,
        credit: 3,
      }])
      setCgpa(0)
  };

  return (
    <View style={styles.container}>
      <AppTitleBar />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.table}>
            <View style={styles.tableHead}>
              <View style={{flex: 1, paddingLeft: 10}}>
                <Text style={styles.title}>#</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.title}>Grade</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.title}>Credits</Text>
              </View>
            </View>
            <View style={styles.tableBody}>
              {state.map((data) => {
                return (
                  <View style={styles.tableItem} key={data.key}>
                    <View style={{flex: 1, paddingLeft: 10}}>
                      <Text style={styles.valText}>{data.key + 1}</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput
                        value={`${data.credit}`}
                        keyboardType="numeric"
                        style={{
                          backgroundColor: '#fff',
                          elevation: 10,
                          fontSize: 16,
                          color: 'black',
                          width: 60,
                          paddingTop: 3,
                          paddingBottom: 3,
                          marginVertical: 8,
                        }}
                        onChangeText={(value) => handleCreditChange(data.key,value)}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Picker
                        style={{
                          height: 35,
                          width: 90,
                          backgroundColor: '#fff',
                          elevation: 10,
                        }}
                        mode="dialog"
                        selectedValue={state[data.key].grade}
                        onValueChange={(itemValue, itemIndex) =>
                          handleSelectChange(data.key, itemValue)
                        }>
                        {grades.map(grade => (
                          <Picker.Item
                            label={`${grade}`}
                            value={grade}
                            key={grade + 1}
                          />
                        ))}
                      </Picker>
                    </View>
                  </View>
                );
              })}

              <TouchableOpacity style={styles.addbtn} onPress={addNewField}>
                <EIcon name="plus" size={16} color="#fff" />
              </TouchableOpacity>

              
            </View>
          </View>
          <View style={styles.result}>
              <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 10,
                    }}>
                    <TouchableOpacity
                      style={styles.calcBtn}
                      onPress={() => calculateCgpa()}>
                      <Text style={{color: '#fff', fontSize: 16}}>Calculate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.resetBtn}
                      onPress={resetAllFields}>
                      <Text style={{color: '#fff', fontSize: 16}}>Reset</Text>
                    </TouchableOpacity>
              </View>

              <View style={{marginTop:15,}}>
                
                <AnimatedCircularProgress
                size={130}
                width={15}
                fill={(cgpa/10)*100}
                tintColor="#536DFE"
                backgroundColor="#E9E9E9"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                >
                    {
                    (fill) => (
                      <>
                      <Text style={{fontSize:24,fontWeight:'bold'}}>
                        { cgpa }
                      </Text>
                      <Text>GPA</Text>
                      </>
                    )
                  }
                </AnimatedCircularProgress>
                
              </View>     
              
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  table: {
    marginVertical:10,
    marginHorizontal:15,
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 6,
  },
  tableHead: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  tableBody: {
    minHeight: 300,
    padding: 10,
  },
  tableItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    padding: 5,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  valText: {
    fontSize: 16,
    color: 'black',
  },
  addbtn: {
    marginTop: 13,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'grey',
  },
  calcBtn: {
    backgroundColor: '#F6AD2D',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginRight: 10,
  },
  resetBtn: {
    backgroundColor: '#536DFE',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  result: {
    margin: 10,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  },
});
