import { Card, List, Typography, Image, Badge, Rate, Spin } from 'antd';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllProducts, getAllProductsByCategory } from '../../services/products';
import AddToCartButton from './AddToCartButton';

const Products = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        setLoading(true);
        (params?.categoryId ?
            getAllProductsByCategory(params.categoryId)
            : getAllProducts()
        ).then((res) => {
            setItems(res.products);
            setLoading(false)
        });
    }, [params]);

    if (loading) {
        return <Spin spinning style={{ alignItems: 'center' }} />
    }

    return <>
        <List
            grid={{ column: 3, gutter: 12 }}
            renderItem={(product, index) => {
                return (
                    <Badge.Ribbon
                        text={product.discountPercentage}
                        color='green'
                        className="itemCardBadge"
                    >
                        <Card
                            className='itemCard'
                            title={product.title}
                            key={index}
                            cover={<Image className="itemCardImage" src={product.thumbnail} />}
                            actions={[
                                <Rate allowHalf value={product.rating} />,
                                <AddToCartButton item={product} />
                            ]}
                        >
                            <Card.Meta
                                title={
                                    <Typography.Paragraph>
                                        Price: ${product.price}{" "}
                                        <Typography.Text delete type="danger">
                                            $
                                            {parseFloat(
                                                product.price +
                                                (product.price * product.discountPercentage) / 100
                                            ).toFixed(2)}
                                        </Typography.Text>
                                    </Typography.Paragraph>
                                }
                                description={
                                    <Typography.Paragraph
                                        ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                                    >
                                        {product.description}
                                    </Typography.Paragraph>
                                }
                            ></Card.Meta>
                        </Card>
                    </Badge.Ribbon>
                )
            }}
            dataSource={items}
        ></List>
    </>
};

export default Products;
