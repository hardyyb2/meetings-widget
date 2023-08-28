import { FormEventHandler } from "react";
import "./App.css";

function App() {
  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined" && "ApolloMeetings" in window) {
      (window.ApolloMeetings as any)?.submit();
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Company (optional)</span>
          </label>
          <input
            name="company"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control mt-4">
          <label className="label cursor-pointer">
            <span className="label-text">Backend engineer</span>
            <input
              type="radio"
              name="profession"
              className="radio checked:bg-red-500"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Frontend engineer</span>
            <input
              type="radio"
              name="profession"
              className="radio checked:bg-blue-500"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Fullstack engineer</span>
            <input
              type="radio"
              name="profession"
              className="radio checked:bg-blue-500"
            />
          </label>
        </div>
        <button className="btn btn-primary mt-4">Submit</button>
      </form>
    </div>
  );
}

export default App;
