import { Edit, SimpleForm, TextInput, DateTimeInput, SelectInput } from 'react-admin'

// TextInput source point the field you want to Edit
// DateTimeInput source is empty, you can fill it if you have a date
// SelectInput will update the status

const OrganizationEdit = (props) => {
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source='id' defaultValue='1' />
      <TextInput source='orgName' />
      <TextInput source='orgStaff' />
      <TextInput source='password' />
      <DateTimeInput disabled source='' />
      <SelectInput
        source='status'
        choices={[
          { id: 'event scheduled', name: 'event scheduled'},
          { id: 'event passed', name: 'event passed'},
        ]}
      />
    </SimpleForm>
  </Edit>
}

export default OrganizationEdit
