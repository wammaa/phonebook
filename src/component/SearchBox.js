import React,{useState} from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <Form onSubmit={searchByName} >
      <Row>
        <Col>
          <Form.Label>찾기</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(event)=>setKeyword(event.target.value)}/>
          <Button type="submit" className="search-button">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
