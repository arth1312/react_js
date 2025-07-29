import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Services/Actions/productAction";
import { Button, Table } from "react-bootstrap";

const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productReducer);
    useEffect(() => {
        dispatch(getAllProducts());
    }, []);
    return (
        <>
            <h2>Home Page</h2>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                {products.map((prod) => (
                    <tr>
                        <td>{prod.id}</td>
                        <td>{prod.title}</td>
                        <td>{prod.desc}</td>
                        <td>{prod.price}</td>
                        <td>{prod.category}</td>
                        <td>
                            <img src={prod.image} height={100} />
                        </td>
                        <td>
                            <Button>Edit</Button>
                        </td>
                        <td>
                            <Button>Delete</Button>
                        </td>
                    </tr>
                ))}
            </Table>
        </>
    );
};

export default Home;