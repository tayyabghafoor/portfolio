const projects={
  righteous:{title:'RIGHTEOUS',summary:'A story-driven mobile FPS set in Pakistan.',role:'Muhammad Tayyab — Developer and Designer.',tools:'Unity · C#',story:'Development challenges included building 3D models without prior experience and adapting games designed for PC keyboard-and-mouse input to mobile devices and touch controls.',tags:['ANDROID','2026','100% COMPLETE','READY TO SHIP']}
};
const dialog=document.querySelector('.case-dialog');
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  const project=projects[button.dataset.project];
  document.querySelector('#dialog-title').textContent=project.title;
  document.querySelector('#dialog-summary').textContent=project.summary;
  document.querySelector('#dialog-role').textContent=project.role;
  document.querySelector('#dialog-tools').textContent=project.tools;
  document.querySelector('#dialog-story').textContent=project.story;
  document.querySelector('#dialog-tags').replaceChildren(...project.tags.map(tag=>{const item=document.createElement('span');item.textContent=tag;return item;}));
  dialog.showModal();
  dialog.querySelector('.chalk-board').scrollTop=0;
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{
  const bounds=dialog.getBoundingClientRect();
  if(event.target===dialog&&(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom))dialog.close();
});
const resumeDialog=document.querySelector('.resume-dialog');
const resumeButton=document.querySelector('.resume-open');
resumeButton.addEventListener('click',()=>resumeDialog.showModal());
resumeDialog.addEventListener('toggle',()=>{
  resumeButton.setAttribute('aria-expanded',String(resumeDialog.open));
  resumeButton.querySelector('.resume-mark').textContent=resumeDialog.open?'×':'+';
});
document.querySelector('.resume-close').addEventListener('click',()=>resumeDialog.close());
resumeDialog.addEventListener('click',event=>{
  const bounds=resumeDialog.getBoundingClientRect();
  if(event.target===resumeDialog&&(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom))resumeDialog.close();
});
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
document.querySelector('#year').textContent=new Date().getFullYear();

const screenButtons=document.querySelectorAll('[data-screen]');
const screens=document.querySelectorAll('[data-game-screen]');
function showGameScreen(name){screens.forEach(screen=>{screen.hidden=screen.dataset.gameScreen!==name;});document.querySelectorAll('.game-tab').forEach(tab=>{const active=tab.dataset.screen===name;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));});}
screenButtons.forEach(button=>button.addEventListener('click',()=>showGameScreen(button.dataset.screen)));
const boardButtons=document.querySelectorAll('[data-board-page]');
const boardPanels=document.querySelectorAll('[data-board-panel]');
boardButtons.forEach(button=>button.addEventListener('click',()=>{
  boardButtons.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-selected',String(active));});
  boardPanels.forEach(panel=>{panel.hidden=panel.dataset.boardPanel!==button.dataset.boardPage;});
}));
