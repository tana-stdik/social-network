
let state = {
  profilePage:{
    posts: [
    {id: 1, message: "Hi! How are you?", likeCount: 4},
    {id: 2, message: "I'm happy!", likeCount: 25},
    {id: 3, message: "Don't worry!", likeCount: 23},
    {id: 4, message: "Yo!", likeCount: 0},
    ],
  },
  messagesPage:{
    dialogs: [
    {id: 1, name: 'Tania'},
    {id: 2, name: 'Andriy'},
    {id: 3, name: 'Olexiy'},
    {id: 4, name: 'Lev'},
    {id: 5, name: 'Nikola'},
    {id: 6, name: 'Olia'},
    ],
    messages: [
    {id: 1, message: "Hi! How are you?"},
    {id: 2, message: "Don't worry!"},
    {id: 3, message: "I'm happy!"},
    {id: 4, message: "Yo!"},
    ],
  }
}

export default state;