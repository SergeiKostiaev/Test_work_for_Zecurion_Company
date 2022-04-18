const inptSearch = document.getElementsByClassName("search").addEventListener('search', onChange);

function onChange() {
    let text = document.getElementsByTagName("search")[0];
    let val = text.value;

const profiles = [{
    position: {
      name: 'Анна Иванова',
      pos: 'Manager',
      description: 'На увольнении'
    }
  },

  {
    position: {
        name: 'Виктория Беляева',
        pos: 'Manager'
    }
  },

  {
    position: {
        name: 'Виктор Суриков',
        pos: 'Manager'
    }
  }
];

position.forEach(function(item) {
    if (item.position.name.includes(val)) {
      console.log(item.artist.name);
    }
  });
}

onChange();