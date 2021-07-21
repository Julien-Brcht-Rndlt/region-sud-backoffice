import { List, Datagrid, TextField, Filter, SearchInput } from 'react-admin';

const ResultsFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      placeholder='Search a result by activity'
      source='activity'
      resettable
      alwaysOn
    />
  </Filter>
)


function ResultsList(props) {

  return (
    <List {...props} filters={<ResultsFilter />} >
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='address' />
        <TextField source='loc' />
        <TextField source='staff' />
        <TextField source='startDate' />
        <TextField source='endDate' />
        <TextField source='activity' />
        <TextField source='sportLevel' />
        <TextField source='id_organization' />
      </Datagrid>
    </List>
  )
}

export default ResultsList
