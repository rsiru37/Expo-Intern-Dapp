// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Details{
    uint public curr_id;
    uint public gasUsed;
    uint public gas2;
    struct User{
        uint id;
        uint age;
        string name;
        string gender;
        string[] profiles;
    }
    mapping(uint => User) public user_track;

    function getuser(uint id) public view returns(User memory){
        require(user_track[id].age!=0,"The ID is Invalid");
        return (user_track[id]);
    }

    function adduser(User memory _userdetails) public{
        require(bytes(_userdetails.name).length>0,"Name cannot be Null");
        require(_userdetails.age>0,"Age cannot be 0");
        curr_id++;
        User storage userdetails = user_track[curr_id];
        userdetails.id = curr_id;
        userdetails.age = _userdetails.age;
        userdetails.name = _userdetails.name;
        userdetails.gender = _userdetails.gender;
        for(uint i;i<_userdetails.profiles.length;++i){
            userdetails.profiles.push(_userdetails.profiles[i]);
        }
    }

    function updateuser(User memory _userdetails) public {
        require(_userdetails.age>0,"Age cannot be 0");
        require(bytes(_userdetails.name).length>0,"Name cannot be null");
        User storage userdetails = user_track[_userdetails.id];
        userdetails.age = _userdetails.age;
        userdetails.name = _userdetails.name;
        userdetails.gender = _userdetails.gender;
        userdetails.profiles = _userdetails.profiles;
    }
}