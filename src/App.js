import './App.css';
import { Admin, Resource } from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import ResultsList from './components/ResultsList'
import OrganizationsList from './components/OrganizationsList'
import OrganizationEdit from './components/OrganizationsEdit'


function App() {
  return (
    <Admin dataProvider={lb4Provider('http:/localhost/8080/emi')}>
      <Resource name='events' list={ResultsList} />
      <Resource name='organizations' list={OrganizationsList} edit={OrganizationEdit} />
    </Admin>
  );
}

export default App;
