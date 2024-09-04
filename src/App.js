import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/hero-section-component/hero";
import img from "../src/images/hero-banner.png";
import ImageSlider from "./components/slider/ImagesSlider";
import ReusableCard from "./components/card/ReusableCard";
import card1 from "../src/images/card1.png";
import card2 from "../src/images/card2.png";
import card3 from "../src/images/card3.png";
import card4 from "../src/images/card4.png";
import card5 from "../src/images/card5.png";
import card6 from "../src/images/card6.png";
import illustrator from "../src/images/Illustration.png";
import { Accordion, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import contact from "./images/contact.png";
import Footer from "./components/footer/Footer";

function App() {
  const [activeKey, setActiveKey] = useState("0");

  const handleToggle = (key) => {
    setActiveKey(key === activeKey ? null : key);
  };

  return (
    <div className="App">
      <Header />
      <Banner
        imageSrc={img} // Replace with your actual image path
        title="Navigating the digital landscape for success"
        paragraph="Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation."
        button1Text="Book a consultation"
        button1Link="/learn-more" // Replace with actual link
        button2Text="Contact Us"
        button2Link="/contact" // Replace with actual link
        textColor="#000" // Optional: Customize text color
        backgroundColor="#fff"
      />
      <ImageSlider />

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-auto">
            <h1 className="text-green p-2">Service</h1>
          </div>

          <div className="col-12 col-md">
            <p className="ms-md-4">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className="container mb-5">
          <div className="row">
            {/* ReusableCard Components */}
            <div className="col-12 col-md-6 mb-4">
              <ReusableCard
                heading="Search engine optimization"
                buttonText="Learn More"
                imageUrl={card1}
                cardBg="#F3F3F3"
                headingBg="#B9FF66"
              />
            </div>
            <div className="col-12 col-md-6 mb-4">
              <ReusableCard
                heading="Pay-per-click advertising"
                buttonText="Learn More"
                imageUrl={card2}
                cardBg="#B9FF66"
                headingBg="#fff"
              />
            </div>
            <div className="col-12 col-md-6 mb-4">
              <ReusableCard
                heading="Search engine optimization"
                buttonText="Learn More"
                imageUrl={card3}
                cardBg="#000000"
                headingBg="#fff"
              />
            </div>
            <div className="col-12 col-md-6 mb-4">
              <ReusableCard
                heading="Email marketing"
                buttonText="Learn More"
                imageUrl={card4}
                cardBg="#F3F3F3"
                headingBg="#B9FF66"
              />
            </div>
            <div className="col-12 col-md-6 mb-4">
              <ReusableCard
                heading="Content Creation"
                buttonText="Learn More"
                imageUrl={card5}
                cardBg="#B9FF66"
                headingBg="#fff"
              />
            </div>
            <div className="col-12 col-md-6 mb-4">
              <ReusableCard
                heading="Analytics and Tracking"
                buttonText="Learn More"
                imageUrl={card6}
                cardBg="#191A23"
                headingBg="#B9FF66"
              />
            </div>

            {/* Banner Component */}
            <div className="col-12 mt-5">
              <Banner
                imageSrc={illustrator}
                title="Let’s make things happen"
                paragraph="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
                button1Text="Get your free proposal"
                button1Link="/learn-more"
                button2Text="Contact Us"
                button2Link="/contact"
                textColor="#000"
                backgroundColor="#F3F3F3"
                imageWidth="50%"
                imageAlignment="end"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-auto">
            <h1 className="text-green p-2">Case Studies</h1>
          </div>

          <div className="col-12 col-md">
            <p className="ms-md-4">
              Explore Real-Life Examples of Our Proven Digital Marketing Success
              through Our Case Studies
            </p>
          </div>
        </div>
      </div>

      <div className="container section-bg mb-5 p-5">
        <div className="row justify-content-center align-items-center text-white">
          <div className="col-12 col-md-4 border-line mb-4 mb-md-0">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <button className="btn btn-outline-light mt-2">Learn more</button>
          </div>
          <div className="col-12 col-md-4 border-line mb-4 mb-md-0">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <button className="btn btn-outline-light mt-2">Learn more</button>
          </div>
          <div className="col-12 col-md-4">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <button className="btn btn-outline-light mt-2">Learn more</button>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-auto">
            <h1 className="text-green p-2">Our Working Process</h1>
          </div>

          <div className="col-12 col-md">
            <p className="ms-md-4">
              Step-by-Step Guide to Achieving Your Business Goals
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <Accordion defaultActiveKey="" className="custom-accordion">
          <Accordion.Item eventKey="0" className="mb-3">
            <Accordion.Header>
              <h1>01</h1>
              <p className="ps-2">Consultation</p>
            </Accordion.Header>
            <Accordion.Body>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mb-3">
            <Accordion.Header>
              <h1>02</h1>
              <p className="ps-2">Research and Strategy Development</p>
            </Accordion.Header>
            <Accordion.Body>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mb-3">
            <Accordion.Header>
              <h1>03</h1>
              <p className="ps-2">Implementation</p>
            </Accordion.Header>
            <Accordion.Body>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mb-3">
            <Accordion.Header>
              <h1>04</h1>
              <p className="ps-2">Monitoring and Optimization</p>
            </Accordion.Header>
            <Accordion.Body>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mb-3">
            <Accordion.Header>
              <h1>05</h1>
              <p className="ps-2">Reporting and Communication</p>
            </Accordion.Header>
            <Accordion.Body>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="mb-3">
            <Accordion.Header>
              <h1>06</h1>
              <p className="ps-2">Continual Improvement</p>
            </Accordion.Header>
            <Accordion.Body>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      {/* contact section */}

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-auto">
            <h1 className="text-green p-2">Contact</h1>
          </div>

          <div className="col-12 col-md">
            <p className="ms-md-4">
              Connect with Us: Let's Discuss Your Digital Marketing Needs
            </p>
          </div>
        </div>
      </div>

      <div className="container bg-color mb-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <Form className="p-3 p-md-5">
              {["radio"].map((type) => (
                <div
                  key={`default-${type}`}
                  className="mb-3 d-flex justify-content-start align-items-center"
                >
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label="Say hi"
                  />
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label="Get a Quote"
                    className="mx-3"
                  />
                </div>
              ))}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <img src={contact} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
