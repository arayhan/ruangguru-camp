// TODO: answer here

export default function UploadForm({ onSubmit }) {
  return (
    <div aria-label="Upload Form">
      <form>
        <div>
          <label htmlFor="caption">Caption</label>
          <input
            type="text"
            name="caption"
            id="caption"
            placeholder="Enter caption"
            aria-label="Caption Input"
          />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/jpeg, image/png, image/gif"
            placeholder="Enter Image"
            aria-label="Image Input"
          />
        </div>
        <button onClick={onSubmit} aria-label="Submit Button">
          Submit
        </button>
      </form>
    </div>
  );
}
