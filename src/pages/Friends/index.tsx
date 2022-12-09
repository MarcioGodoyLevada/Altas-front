import { useCallback, useEffect, useState } from 'react';
import Card from '../../components/Card';

import { Friend, FriendService } from '../../services/friend';

import * as S from './styles';

export default function Friends() {
  const [friends, setFriends] = useState<Friend[]>([]);

  const getData = useCallback(async () => {
    await FriendService.getFriend().then((data) => {
      console.log(data);

      const friends: Friend[] = data.map((item) => ({
        id: item.id,
        name: item.name,
        username: item.username,
        email: item.email,
        address: item.address,
      }));
      setFriends(friends);
    });
  }, [setFriends]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <S.Wrapper>
      {friends.map((item) => (
        <Card friend={item}></Card>
      ))}
    </S.Wrapper>
  );
}
