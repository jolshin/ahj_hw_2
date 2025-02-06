import goblinImg from '../img/goblin.png'

export default class Goblin {
  static {
    this.size = 4;
    this.width = window.innerWidth - 200;
  }

  static random() {
    return Math.floor(Math.random() * (this.size**2))
  }

  static addStyle() {
    return { 
      'grid-template-columns': `repeat( ${this.size}, ${this.width/this.size}px)`,
      'grid-auto-rows': `${this.width/this.size}px` 
    }
  }

  static createField() {
    const div = document.createElement('div');
    div.id = 'wrapper'

    Object.assign(div.style,this.addStyle());

    const imgEl = document.createElement('img');
    imgEl.id = 'goblin'
    imgEl.src = `${goblinImg}`
    
    for (let i=0; i < this.size**2; i++) {
      const innerDiv = document.createElement('div');
      div.appendChild(innerDiv)
    }

    document.body.appendChild(div);
    document.querySelector('#wrapper').children[this.random()].appendChild(imgEl)


  }

  static refreshGrid() {
    const imgEl = document.getElementById('goblin')
    console.log(imgEl)
    document.querySelector('#wrapper').children[this.random()].appendChild(imgEl)
    
  }
}