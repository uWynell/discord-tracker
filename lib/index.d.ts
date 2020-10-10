import { Client } from 'discord.js';
export default class DiscordStalker {
    private working;
    constructor(client: Client, userID: number);
    start(): void;
    stop(): void;
}
