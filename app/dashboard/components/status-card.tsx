import React from 'react';

import { Box } from '@/components/layout/box';
import { Text } from '@/components/typography/text';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatusCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
}

const StatusCard = ({
  title,
  value,
  icon,
  description,
  ...props
}: StatusCardProps) => {
  return (
    <Card className='w-full shadow-none' {...props}>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <Box className='text-2xl font-bold tabular-nums'>{value}</Box>
        <Text className='text-xs text-muted-foreground'>{description}</Text>
      </CardContent>
    </Card>
  );
};

StatusCard.displayName = 'StatusCard';
export default StatusCard;
