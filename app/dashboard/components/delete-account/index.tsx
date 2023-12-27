import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import { Box } from '@/components/layout/box';
import { Flex } from '@/components/layout/flex';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

import DeletionWarning from './deletion-warning';

const DeleteAccount = () => {
  return (
    <Alert variant='destructive' className='relative'>
      <Flex align='center' gap={4} justify='between'>
        <Flex gap={2}>
          <Box>
            <ExclamationTriangleIcon className='h-4 w-4' />
          </Box>
          <Box>
            <AlertTitle>Delete your account</AlertTitle>
            <AlertDescription>
              Permanently delete your account and all of your content.
            </AlertDescription>
          </Box>
        </Flex>
        <DeletionWarning>
          <Button variant='destructive' size='sm'>
            Delete account
          </Button>
        </DeletionWarning>
      </Flex>
    </Alert>
  );
};

DeleteAccount.displayName = 'DeleteAccount';
export default DeleteAccount;
