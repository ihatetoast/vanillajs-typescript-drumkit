import  { type Key } from './keydata'

export function setUpKeys(keysArr: Key[]): HTMLLIElement[] {
  const keyItems =  keysArr.map((item) => {
    const liEl = document.createElement('li') as HTMLLIElement;
    const kbdEl = document.createElement('kbd') as HTMLElement;
    const spanEl = document.createElement('span') as HTMLSpanElement;

    liEl.className = `key ${item.sound}`;
    liEl.dataset.key = item.code
    spanEl.className = "sound-name"
    kbdEl.textContent = item.name;
    spanEl.textContent = item.sound;
    liEl.append(kbdEl, spanEl);
    return liEl;
  })
  return keyItems;
}

export function setUpAudio(keysArr: Key[]): HTMLAudioElement[] {
  const audioItems = keysArr.map((item) => {
    const audioEl = document.createElement('audio') as HTMLAudioElement;
    audioEl.dataset.key = item.code;
    audioEl.src = item.soundSrc;
    return audioEl;
  })
  return audioItems;
}

export function handleOnKeyDown(e: KeyboardEvent) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`) as HTMLAudioElement;
  const key = document.querySelector(`.key[data-key="${e.code}"]`) as HTMLLIElement;
  if(!audio) return;
  if(!key) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("hit");
}

export function handleRemoveTransition(e: TransitionEvent) {
  if(e.propertyName !== 'transform') return;
  const el = e.target as HTMLElement;
  el.classList.remove('hit');
}