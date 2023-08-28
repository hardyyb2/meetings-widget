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

        <div className="label mt-2">Company size (optional)</div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">1 to 50</span>
            <input
              value="1 to 50"
              type="radio"
              name="companySize"
              className="radio checked:bg-red-500"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">51 to 250</span>
            <input
              value="51 to 250"
              type="radio"
              name="companySize"
              className="radio checked:bg-blue-500"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">251 to 500</span>
            <input
              value="251 to 500"
              type="radio"
              name="companySize"
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
