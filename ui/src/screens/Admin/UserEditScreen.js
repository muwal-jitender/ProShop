import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import { useNavigate } from "react-router";
import { getUserDetails, updateUser } from "../../actions/userActions";
import { USER_UPDATE_RESET } from "../../constants/userConstants";

const UserEditScreen = () => {
  const params = useParams();
  const userId = params.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const navigate = useNavigate();

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate("/admin/userlist");
    } else {
      if (!user.name || user._id !== userId) {
        // TODO check here for the bug that no updated information is being loaded
        dispatch(getUserDetails(userId));
      } else {
        console.log("123");
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [dispatch, navigate, userId, user, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
  };

  return (
    <FormContainer>
      <>
        <Link to="admin/userlist" className="btn btn-light my-3">
          Go Back
        </Link>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger" childern={errorUpdate} />}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger" childern={error}></Message>
        ) : (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Names</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isAdmin">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Check
                type="checkbox"
                label="isAdmin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button
              className="py-3"
              type="button"
              onClick={(e) => submitHandler(e)}
              variant="primary"
            >
              Update
            </Button>
          </Form>
        )}
      </>
    </FormContainer>
  );
};

export default UserEditScreen;
