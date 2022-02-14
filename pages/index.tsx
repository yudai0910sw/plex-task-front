import { NextPage } from 'next';
import TweetsList from '../components/TweetsList';
import { useQuery, useMutation } from '@apollo/client';
import TweetAddForm from '../components/CreateTweet'


interface HomeProps {}

const Home: NextPage<HomeProps> = () => {

  return (
    <div>
      <h1>Tweets</h1>
      <TweetsList />
      <TweetAddForm />
    </div>
  );
};

export default Home;