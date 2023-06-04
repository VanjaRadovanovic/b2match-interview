import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';

function DataDetail({route}) {
  if (route.params === undefined) return <Text>Loading...</Text>;

  const [country, setCountry] = useState(route.params);

  return (
    <View style={styles.dataDetailContainer}>
      <Text style={styles.name}>
        {country.name} {country.emoji}
      </Text>
      <Text style={styles.text}>
        Capitol: <Text style={styles.bold}>{country.capital}</Text>
      </Text>
      <Text style={styles.text}>
        Continent: <Text style={styles.bold}>{country.continent.name}</Text>
      </Text>
      <Text style={styles.text}>
        Languages:{' '}
        <Text style={styles.bold}>
          {country.languages.map((language, i) =>
            i === 0 ? language.name : `, ${language.name}`,
          )}
        </Text>
      </Text>
      <Text style={styles.text}>
        Currency: <Text style={styles.bold}>{country.currency}</Text>
      </Text>
      <Text style={styles.text}>
        Phone prefix: <Text style={styles.bold}>+{country.phone}</Text>
      </Text>

      {/* <BottomNavigation /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  dataDetailContainer: {
    padding: 15,
  },
  name: {
    fontSize: 30,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flag: {
    fontSize: 25,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default DataDetail;
