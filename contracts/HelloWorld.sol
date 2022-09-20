//SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract HellloWorld{
    event updatedMessages(string oldStr,string newStr);

    string public message;

    constructor(string memory initMessage){
        message=initMessage;
    }

    function update(string memory newMessage) public{
    string memory oldMessage=message;
    message=newMessage;
    emit updatedMessages(oldMessage, newMessage);
    }


} 