<Modal
open={openUpdateModal}
className="modal-container"
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box
  component="form"
  autoComplete="off"
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    backgroundColor: "white",
    padding: "50px",
  }}
>
  <Typography>Add Task</Typography>
  <TextField
    placeholder="Type your task here..."
    variant="outlined"
    id="text"
    type="text"
    required
    fullWidth
    autoFocus
    error={error.error}
    helperText={error.message}
    onChange={handleItemUpdate}
    value={updateInputLocal}
    style={{ marginBottom: "10px" }}
  />
  <Box>
    <Box style={{ display: "flex", gap: "20px" }}>
      {selectPriority.map((priorityItem, index) => {
        return (
          <Button
            key={index}
            style={{
              borderRadius: "10px",
              width: "120px",
              fontWeight: "bold",
            }}
            variant="outlined"
            onClick={() => handlePriorityUpdate(priorityItem)}
            // className={`${priorityItem}-select priority `}
            sx={{
              border:
                priorityItem === "high"
                  ? " 1px solid #f73446"
                  : priorityItem === "medium"
                  ? "1px solid #ffbd21"
                  : "1px solid #0ac947",
              color:
                priorityItem === "high"
                  ? "#f73446"
                  : priorityItem === "medium"
                  ? "#ffbd21"
                  : "#0ac947",
            }}
          >
            {priorityItem}
          </Button>
        );
      })}
    </Box>
  </Box>
  <Button
    variant="outlined"
    type="submit"
    sx={{ mt: 2 }}
    onClick={() =>handleUpdateSubmit(updateId, updateInputLocal, updatePriorityLocal)}
  >
    Add
  </Button>
  <Button
    variant="outlined"
    sx={{ mt: 2 }}
    onClick={() => setOpenUpdateModal(false)}
  >
    Cancel
  </Button>
</Box>
</Modal>