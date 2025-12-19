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
    sound: "clap",
    soundSrc: './src/assets/sounds/clap.wav'
  },
  {
    name:"S", 
    code: "KeyS",
    sound: "hihat",
    soundSrc: './src/assets/sounds/hihat.wav'
  },
  {
    name:"D", 
    code: "KeyD",
    sound: "kick",
    soundSrc: './src/assets/sounds/kick.wav'
  },
  {
    name:"F", 
    code: "KeyF",
    sound: "openhat",
    soundSrc: './src/assets/sounds/openhat.wav'
  },
  {
    name:"G", 
    code: "KeyG",
    sound: "boom",
    soundSrc: './src/assets/sounds/boom.wav'
  },
  {
    name:"H", 
    code: "KeyH",
    sound: "ride",
    soundSrc: './src/assets/sounds/ride.wav'
  },
  {
    name:"J", 
    code: "KeyJ",
    sound: "snare",
    soundSrc: './src/assets/sounds/snare.wav'
  },
  {
    name:"K", 
    code: "KeyK",
    sound: "tom",
    soundSrc: './src/assets/sounds/tom.wav'
  },
  {
    name:"L", 
    code: "KeyL",
    sound: "tink",
    soundSrc: './src/assets/sounds/tink.wav'
  },

]