import type CommonEvent from '../CommonEvent';

export default interface Tracker {
  updateType: string;
  send: (event: CommonEvent) => void;
  handler(...args: Array<any>): void;
}