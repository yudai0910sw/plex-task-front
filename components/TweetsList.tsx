import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { TWEETS_QUERY, TweetsData } from '../graphql/queries/tweets.query';
import { NextPage } from 'next';

interface TweetsListProps {}

const TweetsList: NextPage<TweetsListProps> = () => {
  const { loading, error, data } = useQuery<TweetsData>(TWEETS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const { tweets } = data;
  if (!tweets) return null;

  return (
    <ul>
      {tweets.map((tweet, index) => {
        return (
          <li key={index}>
            {tweet.body}{' '}
            {tweet.id}
          </li>
        );
      })}
    </ul>
  );
};

export default TweetsList;