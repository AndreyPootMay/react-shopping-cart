import { Menu, Typography } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from './ShoppingCart';

const AppHeader = () => {
    const navigate = useNavigate();

    const onMenuClick = (item) => {
        navigate(`/${item.key}`);
    };

    return <div className='appHeader'>
        <Menu
            mode='horizontal'
            onClick={onMenuClick}
            items={[
                {
                    label: <HomeFilled />,
                    key: 'home'
                },
                {
                    label: 'Men',
                    key: 'men',
                    children: [
                        {
                            label: "Men's Shirts",
                            key: "mens-shirts",
                        },
                        {
                            label: "Men's Shoes",
                            key: "mens-shoes",
                        },
                        {
                            label: "Men's Watches",
                            key: "mens-watches",
                        },
                    ],
                },
                {
                    label: 'Women',
                    key: 'women',
                    children: [
                        {
                            label: "Women's Dresses",
                            key: "womens-dresses",
                        },
                        {
                            label: "Women's Shoes",
                            key: "womens-shoes",
                        },
                        {
                            label: "Women's Watches",
                            key: "womens-watches",
                        },
                        {
                            label: "Women's Bags",
                            key: "womens-bags",
                        },
                        {
                            label: "Women's Jewellery",
                            key: "womens-jewellery",
                        },
                    ],
                },
                {
                    label: "Fragrances",
                    key: "fragrances",
                },
            ]}
        />
        <Typography.Title>
            Example Shop
            <ShoppingCart />
        </Typography.Title>
    </div>;
}

export default AppHeader;