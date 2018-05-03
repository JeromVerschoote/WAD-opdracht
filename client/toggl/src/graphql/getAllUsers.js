import gql from 'graphql-tag';

export default gql`
  query getAllUsers{
    getAllUsers {
      _id
      name
      email
    }
  }
`;
