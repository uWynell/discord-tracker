import type { Presence } from 'discord.js';

import type Tracker from '../Tracker';
import CommonEvent from '../../CommonEvent';

export default class PresenceUpdateTracker implements Tracker {
  updateType = 'presenceUpdate';

  send: (event: CommonEvent) => void;

  constructor(send: (event: CommonEvent) => void) {
    this.send = send;
  }

  handler(presence1: Presence | undefined, presence2: Presence | undefined): void {
    if (!presence1 || !presence1.user) return;
    const event = new CommonEvent(this.updateType, presence1.user, `${presence1.user.tag} has updated a presence`, presence1, presence2);
    this.send(event);
  }
}