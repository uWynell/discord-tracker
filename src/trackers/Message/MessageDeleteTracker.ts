import type { Message, PartialMessage } from 'discord.js';

import type Tracker from '../Tracker';
import CommonEvent from '../../CommonEvent';

export default class MessageDeleteTracker implements Tracker {
  updateType = 'messageDelete';

  send: (event: CommonEvent) => void;

  constructor(send: (event: CommonEvent) => void) {
    this.send = send;
  }

  handler(message: Message | PartialMessage): void {
    if (!message.author) return;
    const event = new CommonEvent(this.updateType, message.author, `${message.author.tag} has deleted a message`, message);
    this.send(event);
  }
}