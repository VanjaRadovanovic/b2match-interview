import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  StackActions,
} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import DataDetail from './Data-detail';
import {createStackNavigator} from '@react-navigation/stack';
import {Details} from '@mui/icons-material';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function Data({navigation}) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await axios.post('https://countries.trevorblades.com/', {
      query: `
        {
          countries{
            code
            capital
            currency
            name
            phone
            emoji
            continent{
              name
            }
            native
            states{
              code
              name
            }
            languages{
              native
              name
            }
          }
        }
      `,
    });
    setCountriesData(data.data.data.countries);
  };

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Country details" component={DataDetail} />
      </Stack.Navigator>

      <ScrollView style={styles.dataScreenContainer}>
        <View style={styles.listContainer}>
          {countriesData.map((country, index) => (
            <Pressable
              key={index}
              style={styles.item}
              onPress={() => {
                navigation.push('Country details', country);
              }}>
              <Text style={styles.itemFlag}>{country.emoji}</Text>
              <Text style={styles.itemTitle}>{country.name}</Text>
              <FontAwesomeIcon icon={faArrowRight} style={styles.arrow} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  dataScreenContainer: {
    padding: 15,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 50,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, .2)',
  },
  itemTitle: {
    fontSize: 20,
  },
  itemFlag: {
    fontSize: 20,
    marginRight: 15,
  },
  arrow: {
    position: 'absolute',
    right: 10,
    color: '#9B9B9C',
  },
});

export default Data;
