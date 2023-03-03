import React, { useEffect, useState } from "react";
import { Get } from "../APIBaseMethods/CommentsApiHandle";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Comments() {
  const [loader, setLoader] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    setLoader(true);
    Get("comments")
      .then((response) => {
        setApiData((previous) => [...previous, ...response.data]);
        setLoader(false);
      })
      .catch((error) => setLoader(false));
  }, []);

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button variant="contained" className="rounded-5 " onClick={handleOpen}>
          Add
        </Button>
      </div>
      <div className="container">
        <h2>Comments</h2>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Add
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>
        <div className="row d-flex justify-content-around align-item-evenly">
          {loader ? (
            <>
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <h4>Loading...</h4>
            </>
          ) : apiData && apiData.length < 1 ? (
            <img src="https://st4.depositphotos.com/5686152/27322/v/600/depositphotos_273220330-stock-illustration-sorry-page-found-404-error.jpg" />
          ) : apiData && apiData.length > 0 ? (
            apiData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-sm-12 border rounded shadow pt-3 my-3"
                >
                  <h5>
                    <b>Post Id:</b> {item.postId}
                  </h5>
                  <p>
                    <b>Name: {item.name}</b>
                  </p>
                  <p>
                    <b>Email:</b> {item.email}
                  </p>
                  <p>
                    <b>Comments: </b>
                    {item.body}
                  </p>
                </div>
              );
            })
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Comments;
