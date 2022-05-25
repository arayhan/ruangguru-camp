import { useState } from 'react';
import { submitPost } from '../api/post';

export default function UploadForm({ onSubmit }) {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    const image = event.target['image'].files[0];
    const caption = event.target['caption'].value;

    formData.append('content', caption);
    formData.append('image', image);

    try {
      const response = await submitPost(formData);
      onSubmit(response);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="container pt-8" aria-label="Upload Form">
      <div className="flex justify-end">
        <form onSubmit={handleSubmit} className="w-1/2 flex flex-col items-end space-y-3">
          <div className="w-full flex items-center space-x-3">
            <label className="w-1/4" htmlFor="image">
              Image URL
            </label>
            <input
              type="file"
              className="w-full bg-white px-3 py-2 rounded-md"
              name="image"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              accept="image/png, image/jpg, image/gif"
              placeholder="Enter Image"
              aria-label="Image Input"
              required
            />
          </div>
          <div className="w-full flex items-center space-x-3">
            <label className="w-1/4" htmlFor="caption">
              Caption
            </label>
            <input
              className="w-full bg-white px-3 py-2 rounded-md"
              type="text"
              name="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              id="caption"
              placeholder="Enter caption"
              aria-label="Caption Input"
              required
            />
          </div>
          <button
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-600 transition-all"
            type="submit"
            value="Submit"
            aria-label="Submit Button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
