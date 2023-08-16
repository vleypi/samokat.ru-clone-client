export const getAllCategories = async () => {

    const response = [
        {
            label: 'Мясо и рыба',
            image: 'https://images.samokat.ru/original/176644_1218744549.jpg',
            options: [
                {
                    label: 'Мясо и птица',
                    slug: 'myaso-i-ptitsa',
                    image: 'https://images.samokat.ru/original/176644_1218744549.jpg'
                },
                {
                    label: 'Колбоса и сосиски',
                    slug: 'kolbosa-and-sosiski',
                    image: '	https://images.samokat.ru/original/109541_1818297172.jpg'
                },
                {
                    label: 'Рыба и дары моря',
                    slug: 'Riba-and-darimorya',
                    image: 'https://images.samokat.ru/original/124606_321691658.jpg'
                }
            ]
        },
        {
            label: 'Сладкое',
            image: 'https://cm.samokat.ru/processed/public/d6abc5500a99e737_2023_06_27_18795_small.jpg',
            options: [
                {
                    label: 'Мороженое',
                    slug: 'morozjenoe',
                    image: 'https://cm.samokat.ru/processed/public/d6abc5500a99e737_2023_06_27_18795_small.jpg'
                },
                {
                    label: 'Шоколад',
                    slug: 'shokolad',
                    image: 'https://cm.samokat.ru/processed/public/e6a2bc97397b50c7___________________4i5.jpg'
                }
            ]
        }
    ]

    return response
};
  
