import type { ClientEvents, PartialUser, User } from 'discord.js';

export default class CommonEvent {
  public type: string;
  public author: User | PartialUser;
  private str: string;
  public events: Array<any>;

  constructor(type: string, author: User | PartialUser, str: string, ...events: Array<any>) {
    this.type = type;
    this.author = author;
    this.str = str;
    this.events = events;
  }

  toString(): string {
    return this.str;
  }
}