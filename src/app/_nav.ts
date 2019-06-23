interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    title: true,
    name: 'Mile High Store'
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Countries & Airports',
    url: '/countryandairport',
    icon: 'icon-drop',
    children: [
      {
        name: 'Countries',
        url: '/countryandairport/country',
        icon: 'icon-puzzle'
      },
      {
        name: 'Air Port',
        url: '/countryandairport/airport',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Operation',
    url: '/operation',
    icon: 'icon-pencil',
    children:[
      {
        name: 'Category',
        url: '/operation/category',
        icon: 'icon-puzzle'
      },
      {
        name: 'Sub Category',
        url: '/operation/subcategory',
        icon: 'icon-puzzle'
      },
      {
        name: 'Brand',
        url: '',
        icon: 'icon-puzzle'
      },
      {
        name: 'Product',
        url: '',
        icon: 'icon-puzzle'
      } ,
      {
        name: 'Option Type',
        url: '',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  }
];
