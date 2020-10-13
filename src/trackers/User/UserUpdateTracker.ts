import type { User, PartialUser } from 'discord.js';

import type Tracker from '../Tracker';
import CommonEvent from '../../CommonEvent';

export default class UserUpdateTracker implements Tracker {
  updateType = 'userUpdate';

  send: (event: CommonEvent) => void;

  constructor(send: (event: CommonEvent) => void) {
    this.send = send;
  }

  handler(user1: User | PartialUser, user2: User | PartialUser): void {
    const event = new CommonEvent(this.updateType, user1, `${user1.tag} has updated his user`, user1, user2);
    this.send(event);
  }
}