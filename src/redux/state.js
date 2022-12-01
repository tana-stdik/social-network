
let state = {
  navbarPage:{
    friendsItem: [
      {id: 1, avatarUrl:'https://i.pinimg.com/564x/40/5e/a8/405ea823383767b67d9bb57ea4fff21f.jpg', name: "Name1"},
      {id: 2, avatarUrl:'https://i.pinimg.com/564x/55/9e/f3/559ef3fce18f579cdf5d25f12b9838d1.jpg', name: "Name2"},
      {id: 3, avatarUrl:'https://i.pinimg.com/564x/2b/f7/5c/2bf75c09aff31cd580c8208e90fb0b50.jpg', name: "Name3"},
    ],
  },
  profilePage:{
    avatarUrl: [
    {id: 1, avatarUrl: 'https://cdn.pixabay.com/photo/2016/08/16/10/18/dragon-1597583_1280.png'},
    {id: 2, avatarUrl: 'https://cdn.pixabay.com/photo/2016/08/16/10/18/dragon-1597583_1280.png'},
    {id: 3, avatarUrl: 'https://cdn.pixabay.com/photo/2016/08/16/10/18/dragon-1597583_1280.png'},
    {id: 4, avatarUrl: 'https://cdn.pixabay.com/photo/2016/08/16/10/18/dragon-1597583_1280.png'},
    {id: 5, avatarUrl: 'https://cdn.pixabay.com/photo/2016/08/16/10/18/dragon-1597583_1280.png'},
    {id: 6, avatarUrl: 'https://cdn.pixabay.com/photo/2016/08/16/10/18/dragon-1597583_1280.png'},
    ],
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