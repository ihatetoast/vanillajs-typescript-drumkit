import './style.css'

import { setUpKeys, setUpAudio, handleOnKeyDown, handleRemoveTransition } from './helperFunctions.ts'
import {keydata} from './keydata'


const drumKeys = setUpKeys(keydata);
const keyListFragment = document.createDocumentFragment();
drumKeys.forEach(key => keyListFragment.append(key))

document.querySelector<HTMLUListElement>('#drumkeys')!.append(keyListFragment);

const audioEls = setUpAudio(keydata);
const audioListFragment = document.createDocumentFragment();
audioEls.forEach(a => audioListFragment.append(a));

document.querySelector<HTMLElement>("#audio")!.append(audioListFragment);


window.addEventListener("keydown", handleOnKeyDown);

const keys: NodeListOf<HTMLElement> = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener('transitionend', handleRemoveTransition));
