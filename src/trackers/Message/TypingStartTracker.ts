import type { Channel, User } from 'discord.js';

import type Tracker from '../Tracker';
import CommonEvent from '../../CommonEvent';

export default class TypingStartTracker implements Tracker {
  updateType = 'typingStart';

  send: (event: CommonEvent) => void;

  constructor(send: (event: CommonEvent) => void) {
    this.send = send;
  }

  handler(channel: Channel, user: User) {
    const event = new CommonEvent(this.updateType, user, `${user.tag} has started typing`, channel, user);
    this.send(event);
  }
}