'use client';

import React from 'react';

import { Download } from 'lucide-react';
import Link from 'next/link';

import { Flex } from '@/components/layout/flex';
import { Text } from '@/components/typography/text';
import { Button } from '@/components/ui/button';

import UpdateDownloadCount from './action';

const DownloadResume = ({ email, link }: { email: string; link: string }) => {
  const handleSubmit = async () => {
    UpdateDownloadCount(email);
  };

  return (
    <Link
      href={link ?? '#'}
      target='_blank'
      rel='noopener noreferrer'
      className='w-full'
    >
      <Button
        className='mt-4 w-full'
        size='lg'
        disabled={!link}
        onClick={handleSubmit}
      >
        <Flex gap={2} align='center'>
          <Download className='h-5 w-5' />
          <Text>Download Resume</Text>
        </Flex>
      </Button>
    </Link>
  );
};

DownloadResume.displayName = 'DownloadResume';
export default DownloadResume;
