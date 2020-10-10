"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DiscordStalker = /** @class */ (function () {
    function DiscordStalker(client, userID) {
        this.working = false;
    }
    DiscordStalker.prototype.start = function () {
        this.working = true;
    };
    DiscordStalker.prototype.stop = function () {
        this.working = false;
    };
    return DiscordStalker;
}());
exports.default = DiscordStalker;
