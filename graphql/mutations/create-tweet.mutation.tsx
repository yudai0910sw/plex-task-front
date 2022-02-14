import { gql } from '@apollo/client';
import { Tweet } from '../../types';

export const CREATE_TWEET = gql`
mutation($body: String!) {
    createTweet( input: { body: $body}) {
      tweet {
        id
        body
      }
    }
  }
`;

export interface CreateTweetData {
  tweet: Tweet;
}
