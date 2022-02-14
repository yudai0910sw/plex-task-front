import { gql } from '@apollo/client';
import { Tweet } from '../../types';

export const TWEETS_QUERY = gql`
  query {
    tweets {
      id
      body
    }
  }
`;

export const CreateTweetMuatation = gql`
mutation CreateTweet($body: String!) {
    createTweet( input: {body: $body} ) {
      tweet {
        id
        body
      }
    }
  }
`;

export interface TweetsData {
  tweets: Tweet[];
}