import { useQuery, useMutation } from '@apollo/client';
import { Formik, Field, Form } from 'formik'
import { Stack, FormControl, Input, Button } from '@chakra-ui/react'
import { CreateTweetMuatation, TweetsData, TWEETS_QUERY } from '../graphql/queries/tweets.query';

const TweetAddForm: React.FC = () => {
    const [createTweet, { error }] = useMutation(CreateTweetMuatation, {
      refetchQueries: [TWEETS_QUERY],
    })
    const handleSubmit = (body: string, resetForm: () => void) => {
        if (!body) return
        createTweet({
          variables: {
            body: body,
          },
        })
        resetForm()
      }

      if (error) return <p>Error: {error.message}</p>

      return (
        <Formik
          initialValues={{ body: '' }}
          onSubmit={(value, actions) => handleSubmit(value.body, actions.resetForm)}
        >
          <Form>
            <Stack  spacing={4}>
              <Field name='body' size='sm'>
                {({ field }) => (
                  <FormControl>
                    <Input {...field} id='body' type='text' placeholder='Add tweet' htmlSize={6} width='auto' />
                  </FormControl>
                )}
              </Field>
              <Button colorScheme='teal' type='submit' width='100px'>
                Submit
              </Button>
            </Stack>
          </Form>
        </Formik>
      )
    }
    
    export default TweetAddForm