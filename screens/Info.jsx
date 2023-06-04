import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import InfoIcon from '@mui/icons-material/Info';

function Info() {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.title}>About me</Text>
      <Image
        source={{
          uri: 'https://vr-softdev.kreda.hr/wp/wp-content/uploads/2023/05/Vanja-02.png',
        }}
        style={styles.image}
      />
      <Text style={styles.text}>
        I am a first-year student at the Faculty of Electrical Engineering and
        Computing in Zagreb. Due to my interest in programming and robotics, I
        have been actively involved in website development for the past four
        years. During this time, I have independently and collaboratively
        created several websites for businesses in Croatia.
      </Text>
      <Text style={styles.text}>
        I am characterized by a strong desire to acquire new knowledge in the
        field of modern IT programming technologies. Persistence,
        resourcefulness and meticulousness are my main attributes. Currently, I
        am seeking a professional opportunity that will allow me to enhance my
        existing skills and acquire new ones. I consider every new experience as
        a significant value for my personal and carrier development.
      </Text>
      <Text style={styles.text}>
        If you are in search of a young and ambitious web developer who is ready
        for challenges, I am excited for the possibility of becoming part of
        your team. The projects I have completed so far serve as references
        demonstrating my responsible and highly motivated approach to new
        projects, with a focus on quality.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 15,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
    objectFit: 'contain',
    borderRadius: 5,
    marginBottom: 20,
  },
  text: {
    marginBottom: 10,
  },
});

export default Info;
