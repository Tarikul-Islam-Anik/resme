'use client';
import { toast } from 'sonner';

import { Text } from '@/components/typography/text';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const ShareLink = ({ link }: { link: string }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://resme.vercel.app/' + link);
    toast.success('Link is copied to clipboard!');
  };
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' onClick={copyToClipboard} disabled={!link}>
            <Text>Share link</Text>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <Text as='p'>Copy the link</Text>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

ShareLink.displayName = 'ShareLink';
export default ShareLink;
