import { MessageTracker, MessageDeleteTracker, MessageUpdateTracker, TypingStartTracker } from './Message';
import { MessageReactionAddTracker, MessageReactionRemoveTracker } from './Reaction';
import { UserUpdateTracker, PresenceUpdateTracker } from './User';
import { VoiceStateUpdateTracker } from './Voice';

export default [
  MessageTracker,
  MessageDeleteTracker,
  MessageUpdateTracker,
  TypingStartTracker,

  UserUpdateTracker,
  PresenceUpdateTracker,

  MessageReactionAddTracker,
  MessageReactionRemoveTracker,

  // VoiceStateUpdateTracker
  // ⬆ Does not work yet
];