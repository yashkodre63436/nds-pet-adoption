// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import Dog from "../Assets/dog1.jpg";
// import Cat from "../Assets/cat2.jpg";
// import Pet from "../Assets/pet1.png";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <Container className="mt-4">
//       {/* Hero Section */}
//       <Row className="text-center">
//         <Col>
//           <img
//             src={Dog}
//             alt="Pet Adoption"
//             className="img-fluid rounded"
//             style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
//           />
//           <h1 className="mt-3">Welcome to Pet Adoption Center</h1>
//           <p className="lead">
//             Find your perfect companion and give them a loving home.
//           </p>

//           <Button variant="primary" size="lg">
//             Adopt Now
//           </Button>
//         </Col>
//       </Row>

//       {/* Featured Pets */}
//       <Row className="mt-5">
//         <Col md={6} lg={4}>
//           <Card className="shadow-sm">
//             <Card.Img
//               variant="top"
//               src={Dog}
//               alt="Dog"
//               height={"300px"}
//               width={"300px"}
//             />
//             <Card.Body className="text-center">
//               <Card.Title className="text-center">Adopt a Dog</Card.Title>
//               <Card.Text className="text-center">
//                 Dogs are loyal and make great companions.
//               </Card.Text>
//               <Link to={"/adoption"}>
//                 {" "}
//                 <Button variant="primary" className="text-center">
//                   View More
//                 </Button>
//               </Link>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6} lg={4}>
//           <Card className="shadow-sm">
//             <Card.Img
//               variant="top"
//               src={Cat}
//               alt="Cat"
//               height={"300px"}
//               width={"300px"}
//             />
//             <Card.Body className="text-center">
//               <Card.Title>Adopt a Cat</Card.Title>
//               <Card.Text>Cats are independent yet affectionate pets.</Card.Text>
//               <Link to={"/adoption"}>
//                 {" "}
//                 <Button variant="primary" className="text-center">
//                   View More
//                 </Button>
//               </Link>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6} lg={4}>
//           <Card className="shadow-sm">
//             <Card.Img
//               variant="top"
//               src={Pet}
//               alt="Cat"
//               height={"300px"}
//               width={"300px"}
//             />
//             <Card.Body className="text-center">
//               <Card.Title>Adopt a Pet</Card.Title>
//               <Card.Text>Explore more affectionate pets.</Card.Text>
//               <Link to={"/adoption"}>
//                 {" "}
//                 <Button variant="primary" className="text-center">
//                   View More
//                 </Button>
//               </Link>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Benefits of Adoption */}
//       <Row className="mt-5">
//         <Col md={6}>
//           <h3>Why Adopt?</h3>
//           <ul>
//             <li>Save a life and provide a loving home</li>
//             <li>Reduce pet homelessness</li>
//             <li>Enjoy unconditional love and companionship</li>
//           </ul>
//         </Col>
//         <Col md={6}>
//           <h3>How It Works</h3>
//           <ol>
//             <li>Browse available pets</li>
//             <li>Apply for adoption</li>
//             <li>Meet your new furry friend</li>
//           </ol>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Home;



import React from "react";
import { Link } from "react-router-dom";
import Dog from "../Assets/dog1.jpg";
import Cat from "../Assets/cat2.jpg";
import Pet from "../Assets/pet1.png";

const Home = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      {/* Hero Section */}
      <div className="text-center">
        <img
          src={Dog}
          alt="Pet Adoption"
          className="w-full max-h-[300px] rounded-lg object-cover"
        />
        <h1 className="text-3xl font-bold mt-4">Welcome to Pet Adoption Center</h1>
        <p className="text-lg text-gray-600 mt-2">
          Find your perfect companion and give them a loving home.
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Adopt Now
        </button>
      </div>

      {/* Featured Pets */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[{ image: Dog, title: "Adopt a Dog", text: "Dogs are loyal and make great companions." },
          { image: Cat, title: "Adopt a Cat", text: "Cats are independent yet affectionate pets." },
          { image: Pet, title: "Adopt a Pet", text: "Explore more affectionate pets." }
        ].map((pet, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img src={pet.image} alt={pet.title} className="w-full h-60 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-3">{pet.title}</h2>
            <p className="text-gray-600 mt-2">{pet.text}</p>
            <Link to="/adoption">
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                View More
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Benefits of Adoption */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-bold">Why Adopt?</h3>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Save a life and provide a loving home</li>
            <li>Reduce pet homelessness</li>
            <li>Enjoy unconditional love and companionship</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold">How It Works</h3>
          <ol className="list-decimal list-inside mt-3 text-gray-700">
            <li>Browse available pets</li>
            <li>Apply for adoption</li>
            <li>Meet your new furry friend</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
