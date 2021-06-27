import { Chip } from '@material-ui/core';
import { Status } from '../../types/todo';

interface Props {
  status: Status;
  className?: string;
}

export function StatusChip({ status, className }: Props) {
  const color = status === 'pending' ? 'primary' : 'secondary';
  return <Chip label={status} color={color} className={className} />;
}
