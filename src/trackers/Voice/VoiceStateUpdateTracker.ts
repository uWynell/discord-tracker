import type { VoiceState } from 'discord.js';

import type Tracker from '../Tracker';
import CommonEvent from '../../CommonEvent';

export default class VoiceStateUpdateTracker implements Tracker {
  updateType = 'voiceStateUpdate';

  send: (event: CommonEvent) => void;

  constructor(send: (event: CommonEvent) => void) {
    this.send = send;
  }

  handler(state1: VoiceState, state2: VoiceState): void {
    const member = state1.member || state2.member;
    if (!member) return;
    const event = new CommonEvent(this.updateType, member.user, `${member.user.tag} has updated his voice state`, state1, state2);
    this.send(event);
  }
}