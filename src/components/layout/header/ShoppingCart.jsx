import { ShoppingCartOutlined } from "@ant-design/icons";
import {
    Badge,
    Button,
    Checkbox,
    Drawer,
    Form,
    Input,
    InputNumber,
    message,
    Table,
    Typography,
  } from "antd";
import { useEffect, useState } from "react";
import { getCart } from "../../../services/products";

export const ShoppingCart = () => {
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getCart()
            .then((res) => {
                setCartItems(res.products);
            });
    }, []);

    const onConfirmOrder = (values) => {
        console.log({ values });
        setCartDrawerOpen(false);
        setCheckoutDrawerOpen(false);
        message.success("Your order has been placed successfully.");
    };

    return (
        <>
            <Badge count={7} className='shoppingCartIcon' color={'green'}>
                <ShoppingCartOutlined
                    className='shoppingCartIcon'
                    onClick={() => {
                        setCartDrawerOpen(true);
                    }}
                />
            </Badge>
            <Drawer
                open={cartDrawerOpen}
                title='Your cart'
                contentWrapperStyle={{ width: 600 }}
                onClose={() => {
                    setCartDrawerOpen(false);
                }}>
                <Table columns={[
                    {
                        title: 'Title',
                        dataIndex: 'title'
                    },
                    {
                        title: 'Price',
                        dataIndex: 'price',
                        render: (value) => {
                            return <span>$ {value}</span>
                        }
                    },
                    {
                        title: 'Quantity',
                        dataIndex: 'quantity',
                        render: (value, record) => {
                            return (
                                <InputNumber
                                    min={0}
                                    defaultValue={value}
                                    onChange={(value) => {
                                        setCartItems((pre) =>
                                            pre.map((cart) => {
                                                if (record.id === cart.id) {
                                                    cart.total = cart.price * value;
                                                }
                                                return cart;
                                            })
                                        );
                                    }}
                                ></InputNumber>
                            );
                        },

                    },
                    {
                        title: 'Total',
                        dataIndex: 'total'
                    },
                ]}
                    dataSource={cartItems}
                    summary={(data) => {
                        const total = data.reduce((pre, current) => {
                            return pre + current.total;
                        }, 0);

                        return <span>Total: {total}</span>
                    }}
                />

                <Button
                    type='primary'
                    onClick={() => {
                        setCheckoutDrawerOpen(true);
                    }}
                >
                    Checkout your cart
                </Button>
            </Drawer>

            <Drawer
                open={checkoutDrawerOpen}
                onClose={() => {
                    setCheckoutDrawerOpen(false);
                }}
                title='Confirm order'
            >
                <Form onFinish={onConfirmOrder} autoComplete='off'>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: "Please enter your full name",
                            },
                        ]}
                        label="Full Name"
                        name="full_name"
                    >
                        <Input placeholder="Enter your full name.." />
                    </Form.Item>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                type: "email",
                                message: "Please enter a valid email",
                            },
                        ]}
                        label="Email"
                        name="your_name"
                    >
                        <Input placeholder="Enter your email.." />
                    </Form.Item>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: "Please enter your address",
                            },
                        ]}
                        label="Address"
                        name="your_address"
                    >
                        <Input placeholder="Enter your full address.." />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox defaultChecked disabled>
                            Cash on Delivery
                        </Checkbox>
                    </Form.Item>
                    <Typography.Paragraph type="secondary">
                        More methods coming soon
                    </Typography.Paragraph>
                    <Button type="primary" htmlType="submit">
                        {" "}
                        Confirm Order
                    </Button>
                </Form>
            </Drawer>
        </>
    )
};