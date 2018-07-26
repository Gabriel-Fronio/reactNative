import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableHighlight } from 'react-native';
import { getJobs } from '../../networking/API';
const img = require('../../assets/images/logo-h-vjobs.png');

export default class JobList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {jobs:[]}
  }

  static navigationOptions = {
      title:'VJobs'
  }

  componentDidMount() {
    getJobs().then(jobs => this.setState({jobs})).catch(error => console.error(error))
  }

  renderList() {
  
    const separatorStyle = {
      flexGrow:1, height:5, backgroundColor:'#fff'
    }
    
    return (
      <FlatList data={this.state.jobs}
      style={{
        flex:1,
        backgroundColor:'white'
      }}
      renderItem={({item}) => this.renderItem(item)}
      ItemSeparatorComponent={() => <View style={separatorStyle} />}
      ListHeaderComponent={() => this.renderHeader()}
      keyExtractor={(item) => `${item.id}`}
      />
    )

  }

  renderHeader() {
    return(
      <Image
      style={{margin:16, alignSelf:'center'}}
      source={img}>
      </Image>
    )
  }

  renderItem(vaga) {
    return (
        <TouchableHighlight onPress={
            () => this.props.navigation.navigate('JobDetail', {job:vaga})
            }>
            <Text style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                minHeight: 48,
                fontWeight: 'bold',
                borderWidth: 1,
                borderColor: '#000',
                backgroundColor: '#ccc'
            }}>
            
            {vaga.name}
                
            </Text>
        </TouchableHighlight>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderList()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
