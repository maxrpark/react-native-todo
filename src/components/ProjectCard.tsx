import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {Project} from '../ts/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({project}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.projectName}>{project.name}</Text>
      <View style={styles.imgContainer}>
        <Image source={{uri: project.url}} style={styles.img}></Image>
      </View>
      <View style={styles.description}>
        <View style={styles.links}>
          <Icon name="logo-github"></Icon>
          <Icon name="link-outline"></Icon>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#8c57db', //--theme-color
    color: '#ffffff',
    margin: 3,
  },
  projectName: {
    width: '100%',
    textAlign: 'center',
    padding: 10,
    color: '#ffffff',
  },
  description: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  links: {
    display: 'flex',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    padding: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imgContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default ProjectCard;
