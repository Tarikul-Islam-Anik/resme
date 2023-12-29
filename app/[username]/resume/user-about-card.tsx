import ShowMore from '@/components/shared/show-more';
import { Text } from '@/components/typography/text';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

const UserAboutCard = ({ about }: { about: string | null }) => {
  return (
    <Card className='relative min-w-full overflow-hidden shadow-none lg:min-h-[300px]'>
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent className='mb-7'>
        <Text as='p' size='sm' align='justify'>
          {about ? (
            <ShowMore text={about} wordsDisplay={800} />
          ) : (
            'No description added.'
          )}
        </Text>
      </CardContent>
      <CardFooter className='bottom-0 w-full p-0 lg:absolute'>
        <TabsList className='w-full justify-around rounded-none border-b bg-transparent p-0'>
          {['educations', 'projects', 'experiences'].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className='w-full rounded-none pb-2 capitalize data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none'
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </CardFooter>
    </Card>
  );
};

UserAboutCard.displayName = 'UserAboutCard';
export default UserAboutCard;
