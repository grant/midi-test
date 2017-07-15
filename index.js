import scribble from 'scribbletune';
const clip = scribble.clip({
  notes: ['c1', 'd2', 'e3']
});
scribble.midi(clip, 'test.mid');
