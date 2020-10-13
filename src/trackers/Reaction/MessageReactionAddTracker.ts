import type { MessageReaction, User, PartialUser } from 'discord.js';

import type Tracker from '../Tracker';
import CommonEvent from '../../CommonEvent';

export default class MessageReactionAddTracker implements Tracker {
  updateType = 'messageReactionAdd';

  send: (event: CommonEvent) => void;

  constructor(send: (event: CommonEvent) => void) {
    this.send = send;
  }

  handler(reaction: MessageReaction, user: User | PartialUser): void {
    const event = new CommonEvent(this.updateType, user, `${user.tag} has added a reaction to a message`, reaction, user);
    this.send(event);
  }
}