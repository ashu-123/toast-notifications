const toasts = document.getElementById('toasts');
const notify = document.getElementById('notify');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
];

const messageTypes = ['info', 'success', 'error'];

notify.addEventListener('click', () => createNotification());

function createNotification(message=null, messageType=null) {

    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.classList.add(messageType?messageType: getRandomMessageType());
    notification.innerText = message? message : getRandomMessage();
    toasts.appendChild(notification);

    setTimeout(() => notification.remove(),3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random()*messages.length)];
}

function getRandomMessageType() {
    return messageTypes[Math.floor(Math.random()*messageTypes.length)];
}