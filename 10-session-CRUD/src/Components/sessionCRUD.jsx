import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './sessionCRUD.css'
import { useEffect, useState } from "react";
// import generateUniqueId from 'generate-unique-id';

const getStorageData = () => {
    const storedBooks = localStorage.getItem("books");
    if (!storedBooks) return [];
    return JSON.parse(storedBooks);
}

const Books = () => {
    const intsialstate = {
        name: " ",
        id: " ",
        desc: " ",
        price: " ",
        category: " ",
        image: " ",
    }
    const [inputForm, setInputForm] = useState(intsialstate);
    const [storageData, setStorageData] = useState(getStorageData())
    const [isEdit, setisEdit] = useState(false)

    const handleInput = (e) => {
        const { name, value } = e.target;

        setInputForm({
            ...inputForm,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        if (isEdit) {
            setStorageData((prevData) =>
                prevData.map((book) => book.id == inputForm.id ? inputForm : book)
            )
        }
        else {
            e.preventDefault();
            let id = Math.floor(Math.random() * 1000)
            setStorageData([...storageData, { ...inputForm, id }])
        }
        setInputForm(intsialstate);
        setisEdit(false);
    }

    const handleDelete = (id) => {
        setStorageData(storageData.filter((book) => book.id !== id))
    }

    const handleEdit = (book) => {
        setInputForm(book)
        setisEdit(true)
    }

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(storageData))
    }, [storageData])

    return (
        <>
            <Container>
                <h1>Add Book</h1>
                <div className="form-wrapper">
                    <Form className=" form " onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Book Name
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Enter Book Name" name="name" value={inputForm.name} onChange={handleInput} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Description
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Enter Book Description" name="desc" value={inputForm.desc} onChange={handleInput} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Book Price
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="number" placeholder="Enter Book Price" name="price" value={inputForm.price} onChange={handleInput} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Category
                            </Form.Label>
                            <Col sm="9">
                                <Form.Select aria-label="Default select example" name="category" value={inputForm.category} onChange={handleInput}>
                                    <option>Select Category</option>
                                    <option value="Comic" selected={inputForm.category == "Comic"}>Comic</option>
                                    <option value="Story" selected={inputForm.category == "Story"}>Story</option>
                                    <option value="History" selected={inputForm.category == "History"}>History</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Book URL
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Enter Image URL" name="image" value={inputForm.image} onChange={handleInput} />
                            </Col>
                        </Form.Group>

                        <Button type="submit">{isEdit ? "Update Book" : "Add Book"}</Button>
                    </Form>
                </div>
            </Container>

            <hr />
            <Container>
                <h1>View Data</h1>
                <div className="cards">
                    {storageData.map((book) => (
                        <div className="card" key={book.id}>
                            <div className="card-img">
                                <img src={book.image} alt="book-img" />
                            </div>
                            <div className="card-info">
                                <h1>{book.name}</h1>
                                <p>{book.desc}</p>
                                <div className="book-price">
                                    <p>{book.price}</p>
                                </div>
                                <div className="book-category">
                                    <p>{book.category} </p>
                                </div>
                                <div className="edit-delete-btn">
                                    <div className="edit-btn">
                                        <button type="submit" onClick={() => handleEdit(book)}>Edit</button>
                                    </div>
                                    <div className="delete-btn">
                                        <button type="submit" onClick={() => handleDelete(book.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Books;