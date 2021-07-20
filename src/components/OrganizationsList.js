import { List, Datagrid, TextField, Filter, SearchInput } from 'react-admin';

const resultsFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      placeholder='Search a result by name'
      source='orgName'
      resettable
      alwaysOn
    />
  </Filter>
)


function OrganizationsList(props) {

  return (
    <List {...props} filters={<resultsFilter />} >
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='orgName' />
        <TextField source='orgStaff' />
        <TextField source='password' />
      </Datagrid>
    </List>
  )
}

export default OrganizationsList
