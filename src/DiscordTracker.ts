import type { Client } from 'discord.js';
import { isMatch } from 'matcher';

import type CommonEvent from './CommonEvent';
import type Tracker from './trackers/Tracker';
import trackers from './trackers';

export default class DiscordTracker {

  /**
   * Whether to catch discord updates or not
   */
  private working = false;

  /**
   * The Discord.js Client that we are working with
   */
  private client: Client;

  /**
   * The list of user IDs that we are tracking
   */
  public users: Set<string> = new Set();

  /**
   * The list of handlers that we are tracking
   */
  public handlers: Map<string, (event: CommonEvent) => void> = new Map();

  /**
   * @param client The discord client that we will work with (use v11 to retain the ability to use custom tokens)
   */
  constructor(client: Client) {
    this.client = client;
    trackers.forEach(this.registerTracker.bind(this));
  }

  private registerTracker(Tracker: new (send: (event: CommonEvent) => void) => Tracker) {
    const tracker = new Tracker(this.send.bind(this));
    this.client.on(tracker.updateType, tracker.handler.bind(tracker));
  }

  /**
   * Used to dispatch events of type CommonEvent
   * @param event The CommonEvent object
   */
  private send(event: CommonEvent): void {
    if (!this.working) return;
    if (!this.users.has(event.author.id)) return;
    for (const [wildcard, handler] of Array.from(this.handlers)) {
      if (!isMatch(event.type, wildcard)) continue;
      handler(event);
    }
  }

  /**
   * Start the Discord stalker
   */
  start(): void {
    this.working = true;
  }

  /**
   * Stop the discord stalker
   */
  stop(): void {
    this.working = false;
  }
}