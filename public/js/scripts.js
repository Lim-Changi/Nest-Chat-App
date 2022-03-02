const socket = io('/');

const getElementByID = (id) => document.getElementById(id) || null;

// get Dom element
const helloStrangerElement = getElementByID('hello_stranger');
const chattingBoxElement = getElementByID('chatting_box');
const formElement = getElementByID('chat_form');

const helloUser = () => {
  const userName = prompt('이름을 입력해주세요');
  socket.emit('new_user', userName);
  socket.on('hello_user', (data) => console.log(data));
};

function init() {
  helloUser();
}

init();
