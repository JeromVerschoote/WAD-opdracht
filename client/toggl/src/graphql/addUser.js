import gql from 'graphql-tag';

export default gql`
mutation addUser($name: String!, $email: String!) {
  addUser(name: $name, email: $email) {
    _id
    name
    email
  }
}
`;
