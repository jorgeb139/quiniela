interface MenuItem {
  menuTitle: string
  pageURL: string
}

const MenuItems: MenuItem[] = [
  {
    menuTitle: 'Inicio',
    pageURL: '/principal'
  },
  {
    menuTitle: '¿Cómo jugar?',
    pageURL: '/como-jugar'
  },
  {
    menuTitle: 'Resultados',
    pageURL: '/resultados'
  },
  {
    menuTitle: 'Calendario',
    pageURL: '/calendario'
  },
  {
    menuTitle: 'Posiciones de participantes',
    pageURL: '/posicion-participantes'
  },
  {
    menuTitle: 'Preguntas y respuestas',
    pageURL: '/faqs'
  }
]

export default MenuItems
