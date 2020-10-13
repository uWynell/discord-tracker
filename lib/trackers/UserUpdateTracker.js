"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CommonEvent_1 = __importDefault(require("../CommonEvent"));
var UserUpdateTracker = /** @class */ (function () {
    function UserUpdateTracker(send) {
        this.updateType = 'userUpdate';
        this.send = send;
    }
    UserUpdateTracker.prototype.handler = function (user1, user2) {
        this.send(new CommonEvent_1.default(this.updateType, user1, user1.tag + " has updated", user1, user2));
    };
    return UserUpdateTracker;
}());
exports.default = UserUpdateTracker;
