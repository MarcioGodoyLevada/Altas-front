import React from 'react';
import { Friend } from '../../services/friend';

import * as S from './styles';

export type CardProps = {
  friend: Friend;
};

const Card = ({ friend }: CardProps) => (
  <S.Card>
    <S.WrapperFriend>
      <span> {friend.name}</span>
      <span> {friend.email}</span>
      <span> {friend.username}</span>
    </S.WrapperFriend>

    <S.WrapperAddress>
      <span>{friend.address.city}</span>
      <span>{friend.address.street}</span>
      <span>{friend.address.suite}</span>
      <span>{friend.address.zipcode}</span>
    </S.WrapperAddress>
  </S.Card>
);

export default Card;
