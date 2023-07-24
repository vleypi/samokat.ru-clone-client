export const getAllCategories = async () => {
    const response1 = await fetch("https://jsonplaceholder.typicode.com/posts");
  
    if (!response1.ok) throw new Error("Unable to fetch posts.");
  

    const response = [
        {
            label: 'Мясо и рыба',
            image: 'https://images.samokat.ru/original/176644_1218744549.jpg',
            options: [
                {
                    label: 'Мясо и птица',
                    slug: 'myaso-i-ptitsa'
                },
                {
                    label: 'Колбоса и сосиски',
                    slug: 'kolbosa-and-sosiski'
                }
            ]
        },
        {
            label: 'Сладкое',
            image: 'https://cm.samokat.ru/processed/public/d6abc5500a99e737_2023_06_27_18795_small.jpg',
            options: [
                {
                    label: 'Мороженое',
                    slug: 'morozjenoe'
                },
                {
                    label: 'Шоколад',
                    slug: 'shokolad'
                }
            ]
        }
    ]

    return response
};
  
