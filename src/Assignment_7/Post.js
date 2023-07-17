import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setUserId, setPosts, setComments } from './actions';
import { Container, Form, Button, Card, ListGroup } from 'react-bootstrap';


function Post() {
  const userId = useSelector((state) => state.userId);
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleUserIdChange = (event) => {
    dispatch(setUserId(event.target.value));
  };

  const fetchPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => dispatch(setPosts(response.data)))
      .catch((error) => console.log(error));
  };

  const fetchComments = (postId) => {
    setSelectedPostId(postId);

    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => dispatch(setComments(response.data)))
      .catch((error) => console.log(error));
  };

  return (
    <Container className="post-container"> 
      <Form.Group>
        <Form.Label>Enter a number from 1 to 10:</Form.Label>
        <Form.Control
          type="number"
          min="1"
          max="10"
          value={userId}
          onChange={handleUserIdChange}
        />
      </Form.Group>

      <Button variant="primary" onClick={fetchPosts}>
        Posts
      </Button>

      <hr />

      {posts.map((post) => (
        <Card key={post.id} className="mb-4">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button
              variant="secondary"
              onClick={() => fetchComments(post.id)}
            >
              See Comments
            </Button>
            {selectedPostId === post.id && (
              <ListGroup className="mt-3">
                {comments.map((comment) => (
                  <ListGroup.Item key={comment.id}>
                    <h4>{comment.name}</h4>
                    <p>{comment.body}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Post;
