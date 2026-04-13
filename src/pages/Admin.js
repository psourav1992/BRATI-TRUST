import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Admin.css";

function Admin() {
  const [messages, setMessages] = useState([]);
  const [messagesPage, setMessagesPage] = useState(0);
  const [messagesTotalPages, setMessagesTotalPages] = useState(0);

  const [volunteer, setVolunteer] = useState({ name: "", role: "" });
  const [newSection, setNewSection] = useState({
    headline: "",
    content: "",
    eventDate: "",
  });
  const [volunteerMessages, setVolunteerMessages] = useState([]);
  const [volPage, setVolPage] = useState(0);
  const [volTotalPages, setVolTotalPages] = useState(0);

  // Fetch contact messages (Name, Address, Message)
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/contacts?page=${messagesPage}&size=5&sort=createdAt,DESC`,
        {
          auth: { username: "admin", password: "password" },
        },
      )
      .then((res) => {
        setMessages(res.data.content);
        setMessagesTotalPages(res.data.totalPages);
      })
      .catch((err) => console.error(err));
  }, [messagesPage]);

  // Fetch volunteer messages (Name, Email, Content)
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/volunteers?page=${volPage}&size=5&sort=createdAt,DESC`,
        {
          auth: { username: "admin", password: "password" },
        },
      )
      .then((res) => {
        setVolunteerMessages(res.data.content);
        setVolTotalPages(res.data.totalPages);
      })
      .catch((err) => console.error(err));
  }, [volPage]);

  // Add volunteer
  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/bratiVolunteers`, volunteer, {
        auth: { username: "admin", password: "password" },
      })
      .then(() => {
        alert("Volunteer added!");
        setVolunteer({ fullName: "", role: "" }); // reset form
      })
      .catch(() => alert("Error adding volunteer"));
  };

  // Add new section (Headline, Content, Date)
  const handleSectionSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/news`, newSection, {
        auth: { username: "admin", password: "password" },
      })
      .then(() => {
        alert("New News added!");
        setNewSection({ headline: "", content: "", eventDate: "" }); // reset form
      })
      .catch(() => alert("Error adding news"));
  };

  return (
    <div className="admin">
      <h1>Admin Console</h1>

      {/* Messages */}
      <section className="card messages">
        <h2>Messages</h2>
        <ul>
          {messages.map((m, i) => (
            <li key={i}>
              <strong>{m.name}</strong> <br />
              {m.email}
              <p className="date">
                {new Date(m.createdAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              {m.message}
            </li>
          ))}
        </ul>
        <div className="pagination">
          <button
            onClick={() => setMessagesPage(messagesPage - 1)}
            disabled={messagesPage === 0}
          >
            PREV
          </button>
          <span>
            Page {messagesPage + 1} of {messagesTotalPages}
          </span>
          <button
            onClick={() => setMessagesPage(messagesPage + 1)}
            disabled={messagesPage + 1 >= messagesTotalPages}
          >
            NEXT
          </button>
        </div>
      </section>

      {/* Volunteers */}
      <section className="card volunteers">
        <h2>Add Volunteer</h2>
        <form onSubmit={handleVolunteerSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={volunteer.fullName}
            onChange={(e) =>
              setVolunteer({ ...volunteer, fullName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Role"
            value={volunteer.role}
            onChange={(e) =>
              setVolunteer({ ...volunteer, role: e.target.value })
            }
          />
          <button type="submit">Add</button>
        </form>
      </section>

      {/* New Section */}
      <section className="card new-section">
        <h2>Add News Section</h2>
        <form onSubmit={handleSectionSubmit}>
          <input
            type="text"
            placeholder="Headline"
            value={newSection.headline}
            onChange={(e) =>
              setNewSection({ ...newSection, headline: e.target.value })
            }
          />
          <textarea
            placeholder="Content"
            rows="4"
            value={newSection.content}
            onChange={(e) =>
              setNewSection({ ...newSection, content: e.target.value })
            }
          ></textarea>
          <input
            type="date"
            placeholder="Event Date"
            value={newSection.eventDate}
            onChange={(e) =>
              setNewSection({ ...newSection, eventDate: e.target.value })
            }
          />
          <button type="submit">Add News</button>
        </form>
      </section>

      {/* Volunteer Messages */}
      <section className="card messages">
        <h2>Volunteer Messages</h2>
        <ul>
          {volunteerMessages.map((vm, i) => (
            <li key={i}>
              <strong>{vm.fullName}</strong> <br />
              {vm.email}
              <p className="date">
                {new Date(vm.createdAt).toLocaleString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p>{vm.message}</p>
            </li>
          ))}
        </ul>
        <div className="pagination">
          <button
            onClick={() => setVolPage(volPage - 1)}
            disabled={volPage === 0}
          >
            PREV
          </button>
          <span>
            Page {volPage + 1} of {volTotalPages}
          </span>
          <button
            onClick={() => setVolPage(volPage + 1)}
            disabled={volPage + 1 >= volTotalPages}
          >
            NEXT
          </button>
        </div>
      </section>
    </div>
  );
}

export default Admin;
