export class ItemImage {
  private static images = [
    {
      name: 'poster1.jpg',
      image: require('../assets/images/poster1.jpg'),
    },
    {
      name: 'poster2.jpg',
      image: require('../assets/images/poster2.jpg'),
    },
    {
      name: 'poster3.jpg',
      image: require('../assets/images/poster3.jpg'),
    },
    {
      name: 'poster4.jpg',
      image: require('../assets/images/poster4.jpg'),
    },
    {
      name: 'poster5.jpg',
      image: require('../assets/images/poster5.jpg'),
    },
    {
      name: 'poster6.jpg',
      image: require('../assets/images/poster6.jpg'),
    },
    {
      name: 'poster7.jpg',
      image: require('../assets/images/poster7.jpg'),
    },
    {
      name: 'poster8.jpg',
      image: require('../assets/images/poster8.jpg'),
    },
    {
      name: 'poster9.jpg',
      image: require('../assets/images/poster9.jpg'),
    },
  ];

  static GetImage = (name: string) => {
    const found = ItemImage.images.find(e => e.name === name);
    return found
      ? found.image
      : require('../assets/images/placeholder_for_missing_posters.png');
  };
}
