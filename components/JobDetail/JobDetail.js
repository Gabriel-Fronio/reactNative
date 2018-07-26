import { ScrollView, StyleSheet, Text} from 'react-native';
import React, {Component} from 'react';

export default class JobDetails extends Component {
    static navigationOptions = {
        title:'Detalhes'
    }

    getJob() {
        const {navigation} = this.props;
        return navigation.getParam('job', {});
    }

    render() {
        const job = this.props.navigation.getParam('job');// ou job = this.getJob();
        return (
            <ScrollView style={styles.container}>
                <Text style={{fontWeight:'bold', padding:16}}>{job.name}</Text>
                <Text style={{padding:16}}>{job.description}</Text>
                <Text style={{padding:16}}>Área: {job.area}</Text>
                <Text style={{padding:16}}>Salário: {job.salary}</Text>
                <Text style={{padding:16}}>Habilidades necessárias: {job.skills}</Text>
                <Text style={{padding:16}}>Diferenciais: {job.differentials}</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });