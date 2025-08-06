import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAsync, getAllProductAsync } from "../Services/Actions/productAction";
import { Button, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
    const dispatch = useDispatch();
    const { products, isLoading } = useSelector((state) => state.productReducer);
    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/edit-product/${id}`);
    }
    const handleDelete = (id) => {
        dispatch(deleteProductAsync(id));
    }

    useEffect(() => {
        dispatch(getAllProductAsync());
    }, []);
    return (
        <>
            <h2>Home Page</h2>
            {isLoading ? <Spinner></Spinner> : <Table>
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
                <tbody>
                    {products.map((prod) => (
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.title}</td>
                            <td>{prod.desc}</td>
                            <td>{prod.price}</td>
                            <td>{prod.category}</td>
                            <td>
                                <img src={prod.image} height={100} />
                            </td>
                            <td>
                                <Button onClick={() => handleEdit(prod.id)}>Edit</Button>
                            </td>
                            <td>
                                <Button onClick={() => handleDelete(prod.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>}
        </>
    );
};

export default Home;