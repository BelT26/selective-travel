import Form from "react-bootstrap/Form";
import AnimatedButton from "../ui/animated-button";
import classes from "./add-experience-form.module.css";
import { useState } from "react";

function AddExperienceForm() {
  const [title, setTitle] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [slug, setSlug] = useState("");
  const [type, setType] = useState("");
  const [days, setDays] = useState([]);
  const [duration, setDuration] = useState("");
  const [hours, setHours] = useState("");
  const [price, setPrice] = useState("");
  const [included, setIncluded] = useState([]);
  const [excluded, setExcluded] = useState([]);
  const [tips, setTips] = useState([]);
  const [features, setFeatures] = useState([]);
  const [isInvalid, setIsInvalid] = useState(false);

  function handleIncluded(event) {
    const itemString = event.target.value;
    const itemList = itemString.split(",");
    setIncluded(itemList);
  }

  function handleExcluded(event) {
    const itemString = event.target.value;
    const itemList = itemString.split(",");
    setExcluded(itemList);
  }

  function handleTips(event) {
    const itemString = event.target.value;
    const itemList = itemString.split(",");
    setTips(itemList);
  }

  function handleFeatures(event) {
    const itemString = event.target.value;
    const itemList = itemString.split(",");
    setFeatures(itemList);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let fullDescription = [];
    fullDescription.push(description1);
    fullDescription.push(description2);
    fullDescription.push(description3);

    if (!title || title.trim() === "" || !slug || slug.trim() === "" || !days) {
      setIsInvalid(true);
      alert("You must complete all required fields");
      return;
    }

    const newExperience = {
      title,
      description: fullDescription,
      slug,
      type,
      days,
      duration,
      hours,
      price,
      included,
      excluded,
      tips,
      features,
    };
    console.log(newExperience);
    fetch("/api/experiences", {
      method: "POST",
      body: JSON.stringify(newExperience),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <Form>
      <div className={classes.booking_form}>
        <Form.Group
          className="mb-3"
          controlId="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        >
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="description1"
          value={description1}
          onChange={(event) => setDescription1(event.target.value)}
        >
          <Form.Label>Description Paragraph 1</Form.Label>
          <Form.Control as="textarea" rows={3} style={{ height: "100px" }} />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="description2"
          value={description2}
          onChange={(event) => setDescription2(event.target.value)}
        >
          <Form.Label>Description Paragraph 2</Form.Label>
          <Form.Control as="textarea" rows={3} style={{ height: "100px" }} />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="description3"
          value={description3}
          onChange={(event) => setDescription3(event.target.value)}
        >
          <Form.Label>Description Paragraph 3</Form.Label>
          <Form.Control as="textarea" rows={3} style={{ height: "100px" }} />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="slug"
          value={slug}
          onChange={(event) => setSlug(event.target.value)}
        >
          <Form.Label>Slug</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <Form.Label>Experience Type</Form.Label>
          <Form.Select aria-label="type">
            <option value="coach">Coach Excursion</option>
            <option value="boat">Boat Trip</option>
            <option value="opera">Verona Opera</option>
            <option valut="sport">Sport and Wellness</option>
            <option valut="parks">Theme Parks</option>
            <option valut="food">Food and Wine</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="days"
          value={days}
          onChange={(event) => setDays(event.target.value)}
        >
          <Form.Label>Days</Form.Label>
          <Form.Select aria-label="type" multiple>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option valut="Thursday">Thursday</option>
            <option valut="Friday">Friday</option>
            <option valut="Saturday">Saturday</option>
            <option valut="Sunday">Sunday</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="duration"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        >
          <Form.Label>Duration</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="hours"
          value={hours}
          onChange={(event) => setHours(event.target.value)}
        >
          <Form.Label>Hours</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        >
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" min={0} />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="included"
          onChange={handleIncluded}
          value={included}
        >
          <Form.Label>Included</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="excluded"
          onChange={handleExcluded}
          value={included}
        >
          <Form.Label>Included</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="tips"
          onChange={handleTips}
          value={included}
        >
          <Form.Label>Tips</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="features"
          onChange={handleFeatures}
          value={included}
        >
          <Form.Label>Coach Features</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </div>
      <AnimatedButton link="/" onClick={handleSubmit}>
        Add Experience
      </AnimatedButton>
    </Form>
  );
}

export default AddExperienceForm;
