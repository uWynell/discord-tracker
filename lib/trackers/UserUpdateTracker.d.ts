import type { User, PartialUser } from 'discord.js';
import CommonEvent from '../CommonEvent';
import Tracker from './Tracker';
export default class UserUpdateTracker implements Tracker {
    updateType: string;
    send: (event: CommonEvent) => void;
    constructor(send: (event: CommonEvent) => void);
    handler(user1: User | PartialUser, user2: User | PartialUser): void;
}
