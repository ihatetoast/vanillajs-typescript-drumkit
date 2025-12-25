export interface Key {
name: string;
code: string;
sound: string;
soundSrc: string;
}

export const keydata: Key[]  = [
  {
    name:"A", 
    code: "KeyA",
    sound: "hihat",
    soundSrc: '/sounds/hihat.wav'
  },
  {
    name:"S", 
    code: "KeyS",
    sound: "openhat",
    soundSrc: '/sounds/openhat.wav'
  },
  {
    name:"D", 
    code: "KeyD",
    sound: "clap",
    soundSrc: '/sounds/clap.wav'
  },
  {
    name:"F", 
    code: "KeyF",
    sound: "snare",
    soundSrc: '/sounds/snare.wav'
  },
  {
    name:"G", 
    code: "KeyG",
    sound: "kick",
    soundSrc: '/sounds/kick.wav'
  },
  {
    name:"H", 
    code: "KeyH",
    sound: "tom",
    soundSrc: '/sounds/tom.wav'
  },
  {
    name:"J", 
    code: "KeyJ",
    sound: "ride",
    soundSrc: '/sounds/ride.wav'
  },
  {
    name:"K", 
    code: "KeyK",
    sound: "boom",
    soundSrc: '/sounds/boom.wav'
  },
   {
    name:"L", 
    code: "KeyL",
    sound: "tink",
    soundSrc: '/sounds/tink.wav'
  },

]