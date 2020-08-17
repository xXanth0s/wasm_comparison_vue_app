<template>
    <tr>
        <th scope="row">{{index}}</th>
        <td>{{person.Forename}}</td>
        <td>{{person.Surname}}</td>
        <td>{{person.Mail}}</td>
        <td>{{person.Company}}</td>
        <td>{{person.DateRegistered}}</td>
        <td>{{person.Phone}}</td>
        <td>{{person.PersonalNumber}}</td>
        <td>{{person.Street}}</td>
        <td>{{person.City}}</td>
        <td>{{person.PostalCode}}</td>
        <td>{{person.Country}}</td>
        <td>{{person.ID}}</td>
        <td>{{person.Active}}</td>
    </tr>
</template>

<script>
  export default {
    name: 'table-row',
    props: {
      person: {
        required: true,
        type: Object,
        default: () => ({
          Forename: '',
          Surname: '',
          Mail: '',
          Company: '',
          DateRegistered: '',
          Phone: '',
          PersonalNumber: '',
          Street: '',
          City: '',
          PostalCode: '',
          Country: '',
          ID: '',
          Active: '',
        })
      },
      index: {
        required: true,
        type: Number
      }
    }
  }
</script>

<style scoped>

</style>
