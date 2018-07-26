import JobList from './components/JobList/JobList';
import JobDetail from './components/JobDetail/JobDetail';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator(
  {
    JobList: JobList,
    JobDetail: JobDetail
  },
  {initialRouteName:'JobList'}
)