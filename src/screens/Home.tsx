import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParams} from '../navigators/StackNavigator';
import ProjectCard from '../components/ProjectCard';
import axios from 'axios';
import {Project} from '../ts/interfaces';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const url = 'https://assitant-app.netlify.app/api/projects-api';

interface Props extends StackScreenProps<RootStackParams, 'Home'> {}

const Home: React.FC<Props> = ({navigation}) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    try {
      const res = await axios<Project[]>(url);
      if (res.data.length > 0) {
        console.log(typeof res.data);

        setProjects(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <View>
      <Text>Home</Text>
      <Button title="Todo" onPress={() => navigation.navigate('Todo')}></Button>

      <View>
        <FlatList
          data={projects}
          renderItem={({item}) => <ProjectCard project={item} />}
          keyExtractor={(project: Project) => project.id}
        />
      </View>
    </View>
  );
};

export default Home;
