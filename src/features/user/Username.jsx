import { useSelector } from 'react-redux';
import { getUserData } from './userSlice';

function Username() {
  const { username } = useSelector(getUserData);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
