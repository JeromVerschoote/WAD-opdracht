import gql from 'graphql-tag';

export default gql`
mutation updateUser($id: String!, $name: String, $email: String) {
  updateUser(_id: $id, name: $name, email: $email) {
    _id
    name
    email
  }
}
`;
