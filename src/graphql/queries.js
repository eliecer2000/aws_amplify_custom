/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const echo_string = /* GraphQL */ `
  query Echo_string($msg: String) {
    echo_string(msg: $msg)
  }
`;
export const echo_object = /* GraphQL */ `
  query Echo_object($msg: String) {
    echo_object(msg: $msg) {
      msg
      items
    }
  }
`;
export const sqs_test = /* GraphQL */ `
  query Sqs_test($msg: String) {
    sqs_test(msg: $msg) {
      MD5OfMessageBody
      MessageId
    }
  }
`;
export const getItems = /* GraphQL */ `
  query GetItems($id: ID!) {
    getItems(id: $id) {
      id
      name
      description
      archived
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        archived
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOthersItems = /* GraphQL */ `
  query GetOthersItems($id: ID!) {
    getOthersItems(id: $id) {
      id
      name
      description
      archived
      createdAt
      updatedAt
    }
  }
`;
export const listOthersItems = /* GraphQL */ `
  query ListOthersItems(
    $filter: ModelOthersItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOthersItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        archived
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
