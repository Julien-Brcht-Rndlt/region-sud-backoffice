import './App.css';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import ResultsList from './components/ResultsList'
import OrganizationsList from './components/OrganizationsList'
import OrganizationEdit from './components/OrganizationsEdit'


function App() {

  return (
    <Admin dataProvider={simpleRestProvider('http://localhost:8080/emi')}>
      <Resource name='events' list={ResultsList} />
      <Resource name='organizations' list={OrganizationsList}  edit={OrganizationEdit} />
    </Admin>
  );
}

export default App;
