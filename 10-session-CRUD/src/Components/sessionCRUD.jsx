import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './sessionCRUD.css'
import generateUniqueId from 'generate-unique-id';
import BookDetail from "./BookData";

const getSotrageData = () => {
    return JSON.parse(sessionStorage.getItem("Books")) || []
}

const Books = () => {
    const intialState = {
        id: "",
        title: "",
        desc: "",
        price: "",
        category: "",
        image: ""
    }
    const [inputForm, setInputForm] = useState(intialState);
    const [bookData, setBookData] = useState(getSotrageData());
    const [isEdit, setIsEdit] = useState(false)

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            let updateData = bookData.map(book => {
                if (book.id == inputForm.id) {
                    return inputForm
                } else {
                    return book
                }
            })

            setBookData(updateData);
            setIsEdit(false);
        } else {
            let id = generateUniqueId({
                length: 6,
                useLetters: false
            });
            inputForm.id = id
            setBookData([...bookData, inputForm]);
        }
        setInputForm(intialState);
    }

    const handleDelete = (id) => {
        let updatedData = bookData.filter(book => book.id != id)
        setBookData(updatedData);
    }

    const handleEdit = (id) => {
        let signleRec = bookData.find(book => book.id == id)
        setInputForm(signleRec);
        setIsEdit(true);
    }

    useEffect(() => {
        sessionStorage.setItem("Books", JSON.stringify(bookData));
    }, [bookData])

    return (
        <>
            <Container>
                <h1>Add Book</h1>
                <div className="form-wrapper">
                    <Form>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Title
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Enter Title" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Description
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Enter Description" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Price
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="number" placeholder="Enter Price" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Category
                            </Form.Label>
                            <Col sm="9">
                                <Form.Select aria-label="Default select example" name="category">
                                    <option>Select Category</option>
                                    <option value="Comic">Comic</option>
                                    <option value="Story">Story</option>
                                    <option value="History">History</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Image
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Enter Image URL" />
                            </Col>
                        </Form.Group>

                        <Button type="submit">Add Book</Button>
                    </Form>
                </div>
            </Container>

            <hr />
            <Container>
                <h1>View Data</h1>
                <div className="d-flex">
                    {
                        bookData.map(book => (
                            <BookDetail key={book.id} book={book} handleDelete={handleDelete} handleEdit={handleEdit} />
                        ))
                    }
                </div>
            </Container>
        </>
    );
};

export default Books;