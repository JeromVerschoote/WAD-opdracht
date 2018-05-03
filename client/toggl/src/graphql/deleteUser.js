import gql from 'graphql-tag';

export default gql`
mutation deleteUser($id: String!) {
  deletedUser: deleteUser(_id: $id) {
    _id
  }
}
`;
