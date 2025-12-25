import  { type Key } from './keydata'

export function setUpKeys(keysArr: Key[]): HTMLDivElement[] {
  const keyItems =  keysArr.map((item) => {
    const divEl = document.createElement('div') as HTMLDivElement;
    const kbdEl = document.createElement('kbd') as HTMLElement;
    const minorDivEl = document.createElement('div') as HTMLElement;
    const spanEl = document.createElement('span') as HTMLSpanElement;

    divEl.className = `key ${item.sound} testing-remove-later`;
    divEl.dataset.key = item.code;
    // item.sound-extra will be used to style the element more as what hte sound is.
    // could be stand for cymbals or sides for drums
    minorDivEl.className = `${item.sound}-extra`;
    // item.sound-clanger will be used to style the stick or whatever bangs it. hidden on mob.
    spanEl.className = `${item.sound}-mallet mallets`;
    kbdEl.textContent = item.name;
    divEl.append(kbdEl, minorDivEl,spanEl);
    return divEl;
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
  // if(e.propertyName !== 'transform') return;
  const el = e.target as HTMLElement;
  el.classList.remove('hit');
}

export function handleOnClick(e: PointerEvent) {
  const target = e.currentTarget as HTMLElement;
  const code = target.dataset.key as string;
  const audio = document.querySelector(`audio[data-key="${code}"]`) as HTMLAudioElement;
  const key = document.querySelector(`.key[data-key="${code}"]`) as HTMLLIElement;
  if(!audio) return;
  if(!key) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("hit");
}